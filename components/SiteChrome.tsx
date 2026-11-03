import { sitePath } from "../lib/site-path";

export const youtube = "https://www.youtube.com/channel/UC8-lhe8rdOBUjz_X1froPlA";
export const instagram = "https://www.instagram.com/trueblueyarnp";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/episodes", label: "Episodes" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return <>
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="topline"><span>STORIES THAT STAY WITH US</span><span>INDEPENDENT VOICES · AUSTRALIA</span></div>
    <header className="site-header">
      <a className="brand" href={sitePath("/")} aria-label="True Blue Yarn home"><span className="brand-mark">TBY<span>.</span></span><span className="brand-name">TRUE BLUE YARN<small>PODCAST & PRODUCTION</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}</nav>
      <a className="header-cta" href={youtube} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav"><summary aria-label="Open menu"><span></span><span></span></summary><nav aria-label="Mobile navigation">{navigation.map(item=><a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}<a href={youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav></details>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer><div className="footer-brand">TRUE BLUE YARN<span>.</span><small>PODCAST & PRODUCTION</small></div><nav className="footer-links" aria-label="Footer navigation"><a href={sitePath("/")}>Home</a><a href={sitePath("/about")}>About</a><a href={sitePath("/projects")}>Projects</a><a href={sitePath("/episodes")}>Episodes</a><a href={sitePath("/contact")}>Contact</a><a href={youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} TRUE BLUE YARN</span><a href="mailto:natasha@trueblueyarn.com.au">NATASHA@TRUEBLUEYARN.COM.AU</a></div></footer>;
}



