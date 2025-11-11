import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getCategory, getAllCategories } from "@/lib/calculator-data";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategory(params.category);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested calculator category was not found.",
    };
  }

  return {
    title: `${category.name} Calculators - ${category.calculators.length} Free Tools`,
    description: `${category.description}. Access ${category.calculators.length} free ${category.name.toLowerCase()} calculators including ${category.calculators.slice(0, 3).map(c => c.name).join(", ")}, and more.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/calculators" className="inline-flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            Back to All Calculators
          </Link>
        </div>
      </header>

      {/* Category Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {category.name} Calculators
          </h1>
          <p className="text-xl text-muted-foreground">
            {category.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {category.calculators.length} calculators available
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${category.id}/${calculator.id}`}
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

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Calculator Hub. All calculators are free to use.</p>
        </div>
      </footer>
    </div>
  );
}