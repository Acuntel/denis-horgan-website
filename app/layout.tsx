import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PageLoader from "@/components/PageLoader";
import { DENIS } from "@/lib/denis-data";
import {
  JsonLd,
  canonical,
  realEstateAgentSchema,
  webSiteSchema,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://denishorgan.com",
  ),
  title: {
    default: `${DENIS.name} | Top-Producing Redfin Agent in ${DENIS.market}`,
    template: `%s | ${DENIS.name}`,
  },
  description:
    "Denis Horgan, top-producing Redfin Principal Agent serving Downers Grove and the western Chicago suburbs. 359 homes sold. $144M in transactions. 4.9★ from 185 clients.",
  alternates: { canonical: canonical("/") },
  robots: { index: true, follow: true },
  keywords: [
    "Denis Horgan",
    "Redfin agent Downers Grove",
    "Naperville realtor",
    "Wheaton homes for sale",
    "western Chicago suburbs realtor",
    "DuPage County real estate",
  ],
  openGraph: {
    title: `${DENIS.name} | ${DENIS.tagline}`,
    description:
      "Top-producing Redfin agent in the western Chicago suburbs. 359 homes sold. 4.9★ across 185 reviews.",
    type: "website",
    images: [DENIS.headshot],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DENIS.name} | ${DENIS.tagline}`,
    description: "Top-producing Redfin agent in the western Chicago suburbs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd data={realEstateAgentSchema()} />
        <JsonLd data={webSiteSchema()} />
        <PageLoader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
