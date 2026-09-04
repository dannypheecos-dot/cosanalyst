import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Source_Sans_3 } from "next/font/google";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: asset("/brand/fox-mark-arrow.png"),
    apple: asset("/brand/fox-mark-arrow.png"),
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "CosAnalyst research desk — book fact, not a ticket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.handle,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og/home.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
