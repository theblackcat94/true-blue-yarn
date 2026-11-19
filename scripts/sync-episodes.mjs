import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const channelId = "UC8-lhe8rdOBUjz_X1froPlA";
const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
const outputFile = fileURLToPath(new URL("../lib/episodes.generated.json", import.meta.url));

function decodeXml(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (_, entity) => {
    if (entity.startsWith("#x")) return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    if (entity.startsWith("#")) return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[entity.toLowerCase()] ?? _;
  });
}

function tag(entry, name) {
  const match = entry.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`));
  return match ? decodeXml(match[1].trim()) : "";
}

function parseEpisodes(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].flatMap(([, entry]) => {
    const rawTitle = tag(entry, "title");
    const match = rawTitle.match(/#\s*(\d+)\s*\|\s*(A Yarn With .+)/i);
    const videoId = tag(entry, "yt:videoId");
    const published = tag(entry, "published");
    if (!match || !/^[\w-]{11}$/.test(videoId) || !Number.isFinite(Date.parse(published))) return [];
    return [{
      number: String(Number(match[1])).padStart(2, "0"),
      title: match[2].replace(/[.\s]+$/, ""),
      videoId,
      published,
    }];
  });
}

const response = await fetch(feedUrl, { signal: AbortSignal.timeout(20_000) });
if (!response.ok) throw new Error(`YouTube episode feed returned ${response.status}`);
const fresh = parseEpisodes(await response.text());
if (fresh.length === 0) throw new Error("YouTube episode feed had no numbered podcast episodes");

let previous = [];
try {
  previous = JSON.parse(await readFile(outputFile, "utf8")).episodes ?? [];
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const episodes = new Map(previous.map(episode => [episode.videoId, episode]));
for (const episode of fresh) episodes.set(episode.videoId, { ...episodes.get(episode.videoId), ...episode });
const sorted = [...episodes.values()].sort((a, b) => Number(b.number) - Number(a.number));
await writeFile(outputFile, `${JSON.stringify({ channelId, episodes: sorted }, null, 2)}\n`);
console.log(`Synced ${fresh.length} numbered episodes from YouTube; ${sorted.length} retained in the site index.`);
