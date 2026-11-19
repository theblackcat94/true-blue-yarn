import { sitePath } from "../lib/site-path";

export const youtube = "https://www.youtube.com/channel/UC8-lhe8rdOBUjz_X1froPlA";
export const instagram = "https://www.instagram.com/trueblueyarnp";
export const spotify = "https://open.spotify.com/show/033nFwWltbhAAgbqzcWkss";

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
    <header className="site-header">
      <a className="brand" href={sitePath("/")} aria-label="True Blue Yarn home"><span className="brand-name">TRUE BLUE YARN<small>PODCAST & PRODUCTION</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}</nav>
      <a className="header-cta" href={`${sitePath("/")}#updates`}>Get updates <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav"><summary aria-label="Open menu"><span></span><span></span></summary><nav aria-label="Mobile navigation">{navigation.map(item => <a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}<a href={youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={spotify} target="_blank" rel="noopener noreferrer">Spotify ↗</a></nav></details>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-support"><div><span className="footer-kicker">SUPPORT IS HERE</span><h2>You do not have to carry it alone.</h2><p>True Blue Yarn shares stories and information. It is not a counselling or crisis service. If you need support, speak with a qualified service.</p></div><div className="footer-support-actions"><a className="footer-phone" href="tel:1800011046">Open Arms · 1800 011 046 <span>24/7 ↗</span></a><div><a href="https://www.woundedheroes.org.au/" target="_blank" rel="noopener noreferrer">Wounded Heroes ↗</a><a href="https://www.rslaustralia.org/" target="_blank" rel="noopener noreferrer">RSL Australia ↗</a></div></div></div>
    <div className="footer-main"><div className="footer-brand">TRUE BLUE YARN<small>PODCAST & PRODUCTION</small><p>Stories of service, identity and connection.</p></div><nav className="footer-links" aria-label="Footer navigation">{navigation.map(item => <a key={item.href} href={sitePath(item.href)}>{item.label}</a>)}<a href={youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={spotify} target="_blank" rel="noopener noreferrer">Spotify ↗</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} TRUE BLUE YARN</span><a href="mailto:natasha@trueblueyarn.com.au">NATASHA@TRUEBLUEYARN.COM.AU</a></div>
  </footer>;
}
