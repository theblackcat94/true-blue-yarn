export type Episode = { number: string; title: string; videoId: string; date?: string; summary?: string; start?: number };

export const episodes: Episode[] = [
  { number: "04", title: "A Yarn With Luke Armstrong, KSC Law", videoId: "m2qxDnDoS9s", start: 29, date: "2 September 2026", summary: "Natasha sits down with Luke Armstrong from KSC Law to discuss veteran claims, who veterans can trust, and how to navigate the legal landscape after service." },
  { number: "03", title: "A Yarn With Jarryd Goundrey", videoId: "35ZP0D_MmJQ" },
  { number: "02", title: "A Yarn With Yvonne Sillett", videoId: "eRvC14WVlZg" },
];

export function EpisodeCard({ episode, featured = false }: { episode: Episode; featured?: boolean }) {
  const watchUrl = `https://www.youtube.com/watch?v=${episode.videoId}${episode.start ? `&t=${episode.start}s` : ""}`;
  const embedUrl = `https://www.youtube.com/embed/${episode.videoId}${episode.start ? `?start=${episode.start}` : ""}`;
  return <article className={`episode-card${featured ? " episode-featured" : ""}`}>
    <div className="episode-video"><iframe src={embedUrl} title={`Episode ${episode.number}: ${episode.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
    <div className="episode-info"><div className="episode-overline">TRUE BLUE YARN PODCAST / EPISODE {episode.number}</div><h3>{episode.title}</h3>{episode.date && <time>{episode.date}</time>}{episode.summary && <p>{episode.summary}</p>}<a className="inline-link" href={watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></div>
  </article>;
}
