import type { Metadata } from "next";
import { instagram } from "../../components/SiteChrome";
import { sitePath } from "../../lib/site-path";

export const metadata: Metadata = { title: "About | True Blue Yarn", description: "Meet Natasha Elford and learn why True Blue Yarn gives veterans and service members space to share their stories." };

const values = [
  { number: "01", title: "Authenticity", text: "We show up, listen closely, and let the story unfold in the guest's own words." },
  { number: "02", title: "Dignity", text: "Personal experience deserves care, respect, and room to be shared without sensationalism." },
  { number: "03", title: "Connection", text: "Stories can build understanding between veterans, families, and the wider community." },
  { number: "04", title: "Action", text: "A meaningful conversation can point people toward information, support, and a next step." },
];

export default function AboutPage() {
  return <main id="content">
    <section className="interior-hero"><div className="eyebrow light"><i /> ABOUT TRUE BLUE YARN</div><h1>Giving veterans<br /><em>a voice.</em></h1><p>True Blue Yarn is an Australian storytelling platform dedicated to sharing the experiences of veterans and service members: the good, the hard, and everything in between.</p><span className="interior-index">01 / OUR STORY</span></section>
    <section className="about-mission section-pad"><div className="about-mission-image"><img src={sitePath("/images/original/army-photo.jpg")} alt="Framed veteran artwork on a blue wall" /></div><div className="about-mission-copy"><div className="section-index">WHY WE EXIST</div><h2>There&apos;s more to every<br /><em>story of service.</em></h2><p>We believe every person who has served deserves to have their story heard with dignity and respect. Too often, the experiences of veterans go untold, or are told by people who weren&apos;t there.</p><p>True Blue Yarn sits down with veterans, service members and the people who support them. The conversations explore service, identity, transition, family, mental health, purpose and life after the uniform.</p><a className="inline-link" href={sitePath("/episodes")}>Hear the conversations <span aria-hidden="true">↗</span></a></div></section>
    <section className="values-section section-pad"><div className="section-heading"><div><div className="section-index">WHAT GUIDES THE WORK</div><h2>What we<br /><em>stand for.</em></h2></div><p>Good storytelling starts with trust and continues with care for the people whose experiences are being shared.</p></div><div className="values-grid">{values.map(value=><article key={value.number} className="value-card"><span>{value.number} / 04</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></section>
    <section className="about-host"><div className="about-host-copy"><div className="eyebrow light"><i /> FOUNDER & HOST</div><h2>Meet<br /><em>Natasha.</em></h2><p>Natasha Elford is an Australian Army veteran and the founder of True Blue Yarn. She brings personal understanding of the Defence community and genuine curiosity to every conversation.</p><p>Her approach is warm, direct and unhurried, creating space for guests to share what they choose, at their own pace.</p><a className="button button-coral" href={instagram} target="_blank" rel="noopener noreferrer">Connect on Instagram <span aria-hidden="true">↗</span></a></div><div className="about-host-image"><img src={sitePath("/images/original/natasha-portrait.jpg")} alt="Natasha Elford in Australian Army uniform" /></div></section>
    <section className="interior-cta"><div><div className="section-index">JOIN THE CONVERSATION</div><h2>Have a story<br /><em>to share?</em></h2><p>If you&apos;re a veteran, a service member, or part of an organisation that supports them, we&apos;d love to hear from you.</p></div><a className="button button-dark" href={sitePath("/contact")}>Get in touch <span aria-hidden="true">↗</span></a></section>
  </main>;
}



