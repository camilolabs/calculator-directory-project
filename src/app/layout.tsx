import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

export const metadata: Metadata = {
  title: {
    default: "Calcupik",
    template: "%s | Calcupik",
  },
  description:
    "Explore free online calculators across categories. Fast and accurate.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"
  ),
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Calcupik",
    description:
      "Explore free online calculators across categories. Fast and accurate.",
    url: "/",
    type: "website",
    siteName: "Calcupik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcupik",
    description:
      "Explore free online calculators across categories. Fast and accurate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <footer className="border-t py-8 mt-12">
          <div className="container mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-4 text-sm mb-3">
              <a href="/privacy-policy" className="no-underline hover:text-foreground">Privacy</a>
              <a href="/cookies" className="no-underline hover:text-foreground">Cookies</a>
              <a href="/terms" className="no-underline hover:text-foreground">Terms</a>
              <a href="/disclaimer" className="no-underline hover:text-foreground">Disclaimer</a>
              <a href="/contact" className="no-underline hover:text-foreground">Contact</a>
              <CookiePreferencesLink />
            </nav>
            <p className="text-center text-sm text-muted-foreground">
              © {year} Calcupik. All calculators are free to use. Made with ❤️ by <a href="https://snapik.co" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">Snapik</a>
            </p>
          </div>
        </footer>
        <CookieConsent />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
