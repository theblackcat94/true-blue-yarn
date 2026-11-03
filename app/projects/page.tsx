import type { Metadata } from "next";
import { sitePath } from "../../lib/site-path";

export const metadata: Metadata = { title: "Projects | True Blue Yarn", description: "Explore the Wounded Heroes Story documentary project and other storytelling work from True Blue Yarn." };

export default function ProjectsPage() {
  return <main id="content">
    <section className="interior-hero"><div className="eyebrow light"><i /> OUR PROJECTS</div><h1>Stories worth<br /><em>telling.</em></h1><p>From podcast conversations to documentary storytelling, True Blue Yarn is building a body of work that puts veterans&apos; voices at the centre.</p><span className="interior-index">02 / PROJECTS</span></section>
    <section className="project-feature section-pad"><div className="section-index">FEATURED PROJECT / IN PRODUCTION</div><div className="project-feature-grid"><div className="project-feature-image"><img src={sitePath("/images/original/wounded-heroes.jpg")} alt="Wounded Heroes Story 24 Hour Challenge artwork" /></div><div className="project-feature-copy"><span className="project-status">DOCUMENTARY · IN PRODUCTION</span><h2>Wounded Heroes<br /><em>Story.</em></h2><p className="lead">A film about the people, purpose and community behind Wounded Heroes Australia.</p><p>Set around the 24 Hour Challenge on Castle Hill in Townsville, the documentary brings together the voices of veterans, families, volunteers and supporters.</p><p>It explores what it means to be met with dignity when someone reaches out during a crisis, and who is there to answer. The project is currently in production.</p><a className="inline-link" href="mailto:natasha@trueblueyarn.com.au?subject=Wounded%20Heroes%20Story">Ask about this project <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="manifesto"><div className="manifesto-inner"><span>WHY THESE STORIES MATTER</span><p>Put people at the centre. <em>Let their voices lead.</em></p><div>✳</div></div></section>
    <section className="interior-cta"><div><div className="section-index">WHAT COMES NEXT</div><h2>Be part of<br /><em>the next yarn.</em></h2><p>True Blue Yarn welcomes ideas from veterans, service members, advocates and organisations with a story to tell.</p></div><div className="interior-cta-actions"><a className="button button-dark" href={sitePath("/episodes")}>Explore the podcast <span aria-hidden="true">↗</span></a><a className="inline-link" href={sitePath("/contact")}>Get in touch <span aria-hidden="true">↗</span></a></div></section>
  </main>;
}



