import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Noto_Nastaliq_Urdu, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { JsonLd } from "@/components/json-ld";
import { hospital } from "@/lib/hospital";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hospital.name} · Nespak, Lahore`,
    template: `%s · ${hospital.name}`,
  },
  description: hospital.description,
  keywords: [
    "Ruqayya Medical Center",
    "hospital Nespak Lahore",
    "emergency Ghazi Chowk",
    "laparoscopic surgeon Lahore",
    "gynecologist Nespak",
    "24/7 hospital Lahore",
    "Chughtai Lab Nespak",
    "Chughtai Lab collection centre Lahore",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: hospital.name,
    title: hospital.name,
    description: hospital.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${urdu.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
