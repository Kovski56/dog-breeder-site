import type { Metadata } from "next";
import { Shantell_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";

// Site-wide font: a hand-drawn marker face with true lowercase — keeps the
// friendly, made-by-a-person feel while staying easy to read.
const shantell = Shantell_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-shantell",
});

// Bouncy handwritten marker font used for the hero slogan so it stands out.
const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shantell.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
