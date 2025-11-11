"use client";

import { notFound } from "next/navigation";
import { getCalculator, getCategory } from "@/lib/calculator-data";
import { calculatorConfigs } from "@/lib/calculator-configs";
import { getCalculatorSEO } from "@/lib/calculator-seo-content";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { GenericCalculator } from "@/components/calculators/GenericCalculator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, Lightbulb, Target, Zap } from "lucide-react";
import { useEffect } from "react";

export default function CalculatorPage({
  params,
}: {
  params: { category: string; calculator: string };
}) {
  const calculator = getCalculator(params.category, params.calculator);
  const category = getCategory(params.category);
  const seoContent = getCalculatorSEO(params.calculator);

  // Set document metadata dynamically
  useEffect(() => {
    if (calculator && seoContent) {
      const title = `${calculator.name} - Free Online Calculator Tool`;
      const description = seoContent.description.slice(0, 160);
      
      document.title = title;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [calculator, seoContent]);

  if (!calculator || !category) {
    notFound();
  }

  const config = calculatorConfigs[params.calculator];

  if (!config) {
    return (
      <CalculatorLayout
        title={calculator.name}
        description={calculator.description}
        icon={calculator.icon}
        categoryName={category.name}
        categoryId={category.id}
      >
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            This calculator is coming soon!
          </p>
        </div>
      </CalculatorLayout>
    );
  }

  return (
    <CalculatorLayout
      title={calculator.name}
      description={calculator.description}
      icon={calculator.icon}
      categoryName={category.name}
      categoryId={category.id}
    >
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
        </div>
      )}
    </CalculatorLayout>
  );
}