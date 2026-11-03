import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { instagram, youtube } from "../../components/SiteChrome";

export const metadata: Metadata = { title: "Get in touch | True Blue Yarn", description: "Pitch yourself as a guest, share a story idea, collaborate, or enquire about supporting True Blue Yarn." };

export default function ContactPage() {
  return <main id="content"><section className="interior-hero contact-hero"><div className="eyebrow light"><i /> CONTACT TRUE BLUE YARN</div><h1>Let&apos;s have<br /><em>a yarn.</em></h1><p>Have a story to share, a guest to suggest, or a project in mind? We&apos;d love to hear from you.</p><span className="interior-index">04 / GET IN TOUCH</span></section>
    <section className="contact-section section-pad"><div className="contact-heading"><div><div className="section-index">START A CONVERSATION</div><h2>What brings<br /><em>you here?</em></h2></div><p>Choose the reason that fits best, then tell us a little about it. We&apos;ll prepare an email to Natasha for you to send.</p></div><ContactForm /></section>
    <section className="contact-other"><div><div className="section-index">PREFER TO REACH OUT DIRECTLY?</div><h2>Find us where<br /><em>the stories are.</em></h2></div><div className="contact-other-links"><a href="mailto:natasha@trueblueyarn.com.au"><span>EMAIL NATASHA</span><strong>natasha@trueblueyarn.com.au</strong><span aria-hidden="true">↗</span></a><a href={instagram} target="_blank" rel="noopener noreferrer"><span>FOLLOW & MESSAGE</span><strong>Instagram</strong><span aria-hidden="true">↗</span></a><a href={youtube} target="_blank" rel="noopener noreferrer"><span>WATCH THE SHOW</span><strong>YouTube</strong><span aria-hidden="true">↗</span></a></div></section>
    <section className="contact-support"><div className="section-index">NEED SUPPORT NOW?</div><p>True Blue Yarn is a storytelling platform, not a crisis service. For free and confidential 24/7 support for Australian veterans and families, contact <a href="https://www.openarms.gov.au/" target="_blank" rel="noopener noreferrer">Open Arms ↗</a> or call <a href="tel:1800011046">1800 011 046</a>.</p></section>
  </main>;
}
