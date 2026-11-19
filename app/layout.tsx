import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { sitePath } from "../lib/site-path";
import "./globals.css";
import "./revision.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_REPOSITORY
    ? `https://${process.env.GITHUB_REPOSITORY.split("/")[0]}.github.io`
    : "http://127.0.0.1:5173"),
  title: "True Blue Yarn | Stories with purpose",
  description: "True Blue Yarn is an independent Australian podcast and production platform sharing stories of service, transition, identity and connection.",
  openGraph: { title: "True Blue Yarn | Stories that stay with us", description: "Real conversations about service, identity and connection.", images: [sitePath("/images/original/natasha-portrait.jpg")] },
  icons: { icon: sitePath("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
