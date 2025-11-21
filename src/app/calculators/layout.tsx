import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Calculator Categories: Finance, Health, Math",
  description:
    "Explore all calculator categories and find tools for finance, health, math, and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "Browse Calculator Categories: Finance, Health, Math",
    description:
      "Explore all calculator categories and find tools for finance, health, math, and more.",
    url: "/calculators",
    type: "website",
    siteName: "Calcupik",
  },
  twitter: {
    card: "summary",
    title: "Browse Calculator Categories: Finance, Health, Math",
    description:
      "Explore all calculator categories and find tools for finance, health, math, and more.",
  },
};

export default function CalculatorsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
