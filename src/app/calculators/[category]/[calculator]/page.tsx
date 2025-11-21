"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getCalculator, getCategory } from "@/lib/calculator-data";
import { calculatorConfigs } from "@/lib/calculator-configs";
import { getCalculatorSEO, getSEOOrFallback } from "@/lib/calculator-seo-content";
import { getRelatedCalculators } from "@/lib/related-calculators";
import { getFallbackConfig } from "@/lib/calculator-config-fallback";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { GenericCalculator } from "@/components/calculators/GenericCalculator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, Lightbulb, Target, Zap } from "lucide-react";
import SEOJsonLd from "@/components/SEOJsonLd";

export default function CalculatorPage({
  params,
}: {
  params: Promise<{ category: string; calculator: string }>;
}) {
  const { category: categoryId, calculator: calculatorId } = use(params);
  const category = getCategory(categoryId);
  const calculator = getCalculator(categoryId, calculatorId);

  if (!category || !calculator) {
    notFound();
  }

  const seoContent = getSEOOrFallback(
    calculator.id,
    calculator.name,
    category.id,
    category.name
  );

  const config = calculatorConfigs[calculatorId] ?? getFallbackConfig(
    calculatorId,
    calculator.name,
    category.name
  );
  const related = getRelatedCalculators(category.id, calculator.id, 6);
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const pagePath = `/calculators/${category.id}/${calculator.id}`;
  const pageUrl = `${origin}${pagePath}`;

  // No "coming soon" branch — fallback config ensures usability

  return (
    <CalculatorLayout
      title={calculator.name}
      description={calculator.description}
      icon={calculator.icon}
      categoryName={category.name}
      categoryId={category.id}
    >
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6 text-muted-foreground">
        <a href="/" className="hover:text-foreground">Home</a>
        <span className="mx-2">›</span>
        <a href="/calculators" className="hover:text-foreground">Calculators</a>
        <span className="mx-2">›</span>
        <a href={`/calculators/${category.id}`} className="hover:text-foreground">{category.name}</a>
        <span className="mx-2">›</span>
        <span className="text-foreground font-medium">{calculator.name}</span>
      </nav>

      <GenericCalculator config={config} />

      {/* SEO Content Section */}
      {seoContent && (
        <div className="mt-12 space-y-8">
          {/* Main Description */}
          <section className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">
              About This {calculator.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {seoContent.description}
            </p>
          </section>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                How This Calculator Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{seoContent.howItWorks}</p>
            </CardContent>
          </Card>

          {/* Use Cases & Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Common Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {seoContent.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {seoContent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Expert Tips & Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {seoContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-semibold flex-shrink-0">
                      •
                    </span>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Keywords Section (hidden, for SEO) */}
          <div className="hidden" aria-hidden="true">
            <p>
              Related searches: {seoContent.keywords.join(", ")}
            </p>
          </div>

          {/* Related Calculators */}
          {related.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold mt-8 mb-4">Related Calculators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((item) => (
                  <a
                    key={item.id}
                    href={`/calculators/${item.categoryId}/${item.id}`}
                    className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* JSON-LD: Breadcrumbs */}
          <SEOJsonLd
            json={{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
                { "@type": "ListItem", position: 2, name: "Calculators", item: `${origin}/calculators` },
                { "@type": "ListItem", position: 3, name: category.name, item: `${origin}/calculators/${category.id}` },
                { "@type": "ListItem", position: 4, name: calculator.name, item: pageUrl },
              ],
            }}
          />

          {/* JSON-LD: WebApplication (Calculator) */}
          <SEOJsonLd
            json={{
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: calculator.name,
              description: seoContent?.description ?? calculator.description,
              applicationCategory: "Calculator",
              operatingSystem: "Web",
              url: pageUrl,
            }}
          />

          {/* JSON-LD: ItemList (Related) */}
          {related.length > 0 && (
            <SEOJsonLd
              json={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: related.map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.name,
                  url: `${origin}/calculators/${item.categoryId}/${item.id}`,
                })),
              }}
            />
          )}
        </div>
      )}
    </CalculatorLayout>
  );
}