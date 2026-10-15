import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { QuoteProvider } from "@/components/site/quote-dialog";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NUMU Property Management | Technology-Enabled Property Management",
    template: "%s | NUMU Property Management",
  },
  description:
    "Complete property care, transparent reporting, investor services, and project oversight — built for lasting value.",
};

export const viewport: Viewport = {
  themeColor: "#0b1c33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <noscript>
          <style>{"[data-hero]>*,[data-reveal],[data-stagger]>*{visibility:visible!important}"}</style>
        </noscript>
        <QuoteProvider>
          <a href="#main-content" className="sr-only fixed top-3 left-3 z-50 rounded-md bg-white px-4 py-3 text-navy-900 focus:not-sr-only">Skip to content</a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
