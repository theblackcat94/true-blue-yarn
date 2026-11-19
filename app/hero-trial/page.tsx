import type { Metadata } from "next";
import { EpisodeCard, episodes } from "../../components/EpisodeCard";
import { sitePath } from "../../lib/site-path";

export const metadata: Metadata = {
  title: "Podcast image hero preview | True Blue Yarn",
  description: "A second homepage hero concept using an image from a True Blue Yarn episode.",
  robots: { index: false, follow: false },
};

export default function HeroTrialPage() {
  return <main id="content">
    <section className="trial-hero" aria-labelledby="trial-title">
      <div className="trial-hero-copy">
        <div className="trial-kicker">TRUE BLUE YARN <span>·</span> HERO CONCEPT 02</div>
        <h1 id="trial-title">Come for the story.<br /><em>Stay for the yarn.</em></h1>
        <p>Conversations with veterans and the people around them, told with care and curiosity. Hosted by Australian Army veteran Natasha Elford.</p>
        <div className="trial-hero-actions"><a className="button button-dark" href="#trial-latest">Watch the latest episode <span aria-hidden="true">↗</span></a><a className="inline-link" href={sitePath("/about")}>Meet Natasha <span aria-hidden="true">↗</span></a></div>
        <a className="trial-back" href={sitePath("/")}>← View the current homepage hero</a>
      </div>
      <div className="trial-hero-media"><img src={sitePath("/images/episodes/luke-armstrong.jpg")} alt="True Blue Yarn episode thumbnail featuring Natasha Elford and Luke Armstrong" /><div><span>IMAGE FROM THE PODCAST</span><a href="https://www.youtube.com/watch?v=m2qxDnDoS9s" target="_blank" rel="noopener noreferrer">Episode 04 · Luke Armstrong <span aria-hidden="true">↗</span></a></div></div>
    </section>
    <section className="trial-latest section-pad" id="trial-latest"><div className="calm-section-heading"><div><span className="section-index">01 / THE PODCAST</span><h2>The latest yarn.</h2></div><p>See how the new opening flows into the existing episode section.</p></div><EpisodeCard episode={episodes[0]} featured /></section>
  </main>;
}
