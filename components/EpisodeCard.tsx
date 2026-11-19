import episodeIndex from "../lib/episodes.generated.json";

export type Episode = { number: string; title: string; videoId: string; published: string; summary?: string; start?: number };

export const episodes: Episode[] = episodeIndex.episodes;

export function EpisodeCard({ episode, featured = false }: { episode: Episode; featured?: boolean }) {
  const watchUrl = `https://www.youtube.com/watch?v=${episode.videoId}${episode.start ? `&t=${episode.start}s` : ""}`;
  const embedUrl = `https://www.youtube.com/embed/${episode.videoId}${episode.start ? `?start=${episode.start}` : ""}`;
  return <article className={`episode-card${featured ? " episode-featured" : ""}`}>
    <div className="episode-video"><iframe src={embedUrl} title={`Episode ${episode.number}: ${episode.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
    <div className="episode-info"><div className="episode-overline">TRUE BLUE YARN PODCAST / EPISODE {episode.number}</div><h3>{episode.title}</h3><time dateTime={episode.published}>{new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "Australia/Brisbane" }).format(new Date(episode.published))}</time>{featured && episode.summary && <p>{episode.summary}</p>}<a className="inline-link" href={watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></div>
  </article>;
}
