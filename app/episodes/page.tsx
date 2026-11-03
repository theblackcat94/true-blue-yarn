import type { Metadata } from "next";
import { EpisodeCard, episodes } from "../../components/EpisodeCard";
import { instagram, youtube } from "../../components/SiteChrome";

export const metadata: Metadata = { title: "Episodes | True Blue Yarn", description: "Watch True Blue Yarn podcast conversations with Luke Armstrong, Jarryd Goundrey and Yvonne Sillett." };

export default function EpisodesPage() {
  return <main id="content">
    <section className="interior-hero"><div className="eyebrow light"><i /> TRUE BLUE YARN PODCAST</div><h1>Come in.<br /><em>Have a yarn.</em></h1><p>Watch the conversations featured on True Blue Yarn. Each story offers another way to understand service, transition and the people around us.</p><span className="interior-index">03 / EPISODES</span></section>
    <section className="episodes-section section-pad"><div className="section-heading"><div><div className="section-index">WATCH THE SHOW</div><h2>Start with the<br /><em>latest episode.</em></h2></div><p>Videos are hosted on YouTube. If an embedded player is unavailable, use its direct watch link.</p></div><EpisodeCard episode={episodes[0]} featured /><div className="episode-subheading"><h3>More episodes</h3><a href={youtube} target="_blank" rel="noopener noreferrer">See the channel <span aria-hidden="true">↗</span></a></div><div className="episode-grid">{episodes.slice(1).map(episode=><EpisodeCard key={episode.number} episode={episode} />)}</div></section>
    <section className="interior-cta"><div><div className="section-index">KEEP LISTENING</div><h2>The conversation<br /><em>continues.</em></h2><p>Follow True Blue Yarn for future episodes, documentary updates and stories from the community.</p></div><div className="interior-cta-actions"><a className="button button-dark" href={youtube} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a><a className="inline-link" href={instagram} target="_blank" rel="noopener noreferrer">Follow on Instagram <span aria-hidden="true">↗</span></a></div></section>
  </main>;
}
