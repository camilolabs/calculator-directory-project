import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getCategory, getAllCategories } from "@/lib/calculator-data";
import { ArrowLeft } from "lucide-react";
import SEOJsonLd from "@/components/SEOJsonLd";

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.id,
  }));
}

function trimTo(input: string, max: number): string {
  if (input.length <= max) return input;
  const cut = input.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
}

function ensureRange(input: string, min: number, max: number, padSuffix: string): string {
  let out = input.trim();
  if (out.length < min) {
    const padded = `${out}${padSuffix}`;
    out = padded.length <= max ? padded : trimTo(padded, max);
  }
  if (out.length > max) out = trimTo(out, max);
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    return {
      title: "Calculators",
      description: "Browse free online calculators. Fast, accurate, and easy to use.",
    };
  }

  const count = cat.calculators.length;
  const primaryKeyword = `${cat.name} calculators`;
  const baseTitle = `${primaryKeyword}: Free online tools`;
  const title = ensureRange(baseTitle, 50, 60, " | Free calculators");

  const baseDescription = `${cat.description} Explore ${count} free ${cat.name.toLowerCase()} calculators — fast, accurate, and easy to use.`;
  const descCandidate = baseDescription.replace(/\s+/g, " ").trim();
  const description = ensureRange(descCandidate, 150, 160, " Compare, calculate, and visualize results instantly.");

  const url = `/calculators/${cat.id}`;

  return {
    title,
    description,
    keywords: [primaryKeyword],
    alternates: {
      canonical: url,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Calcupik",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);

  if (!cat) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" prefetch={false} className="hover:text-foreground">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/calculators" prefetch={false} className="hover:text-foreground">Calculators</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">{cat.name}</span>
          </nav>
        </div>
      </header>

      {/* Category Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-6xl mb-4">{cat.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {cat.name} calculators
          </h1>
          <p className="text-xl text-muted-foreground">
            {cat.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {cat.calculators.length} calculators available
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${cat.id}/${calculator.id}`}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{calculator.icon}</span>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {calculator.name}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {calculator.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* JSON-LD: Breadcrumbs & ItemList */}
      <div className="sr-only" aria-hidden="true">
            <SEOJsonLd
              json={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/` },
                  { "@type": "ListItem", position: 2, name: "Calculators", item: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/calculators` },
                  { "@type": "ListItem", position: 3, name: cat.name, item: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/calculators/${cat.id}` },
                ],
              }}
            />
            <SEOJsonLd
              json={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: cat.calculators.map((c, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: c.name,
                  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/calculators/${cat.id}/${c.id}`,
                })),
              }}
            />
      </div>

      {/* Footer handled globally in RootLayout */}
    </div>
  );
}
