import type { Metadata } from "next";
import { getCategory, getCalculator } from "@/lib/calculator-data";
import { getSEOOrFallback } from "@/lib/calculator-seo-content";

function trimTo(input: string, max: number): string {
  if (input.length <= max) return input;
  const cut = input.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; calculator: string }>;
}): Promise<Metadata> {
  const { category: categoryId, calculator: calculatorId } = await params;
  const category = getCategory(categoryId);
  const calculator = getCalculator(categoryId, calculatorId);

  if (!category || !calculator) {
    return {
      title: "Calculator Not Found",
      robots: { index: false, follow: false },
    };
  }

  const baseTitle = `${calculator.name} Calculator`;
  const title = trimTo(baseTitle, 60);
  const seo = getSEOOrFallback(
    calculator.id,
    calculator.name,
    category.id,
    category.name
  );
  const descCandidate = (seo?.description ?? calculator.description).replace(/\s+/g, " ").trim();
  const description = trimTo(descCandidate, 160);
  const url = `/calculators/${category.id}/${calculator.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, type: "article", siteName: "Calcupik" },
    twitter: { card: "summary", title, description },
  };
}

export default function CalculatorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}