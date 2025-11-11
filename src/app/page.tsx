import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/lib/calculator-data";
import { ArrowRight, Calculator } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator Hub - 380+ Free Online Calculators",
  description: "Access 380+ free calculators for finance, health, math, science, conversion, construction, and more. Fast, accurate calculations for any need. No signup required.",
};

export default function Home() {
  const categories = getAllCategories();
  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              <span className="text-2xl font-bold">Calculator Hub</span>
            </div>
            <Link href="/calculators">
              <Button>Browse All Calculators</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            100+ Free Calculators
            <br />
            <span className="text-primary">All in One Place</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            From financial planning to cooking recipes, health tracking to construction projects — find the perfect calculator for any calculation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/calculators">
              <Button size="lg" className="text-lg px-8 h-12">
                Explore Calculators
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/calculators">
              <Button size="lg" variant="outline" className="text-lg px-8 h-12">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Free Calculators</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular calculator categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredCategories.map((category) => (
            <Link key={category.id} href={`/calculators/${category.id}`}>
              <Card className="h-full hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl">{category.icon}</span>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.calculators.length} calculators
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/calculators">
            <Button size="lg" variant="outline">
              View All {categories.length} Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Calculator Hub?</h2>
              <p className="text-lg text-muted-foreground">
                Fast, accurate, and easy-to-use calculators for everyone
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Instant calculations with no delays or loading times
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-xl font-semibold">100% Accurate</h3>
                <p className="text-muted-foreground">
                  Precise calculations you can trust for any purpose
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="text-xl font-semibold">Mobile Friendly</h3>
                <p className="text-muted-foreground">
                  Works perfectly on all devices, anywhere, anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 rounded-2xl p-12 border">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Access 100+ free calculators instantly. No signup required.
          </p>
          <Link href="/calculators">
            <Button size="lg" className="text-lg px-8 h-12">
              Start Calculating Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="h-6 w-6" />
                  <span className="text-xl font-bold">Calculator Hub</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your one-stop destination for 100+ free calculators across 10 categories. Fast, accurate, and easy to use.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/calculators" className="text-muted-foreground hover:text-foreground transition-colors">
                      All Calculators
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/finance" className="text-muted-foreground hover:text-foreground transition-colors">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/health" className="text-muted-foreground hover:text-foreground transition-colors">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/math" className="text-muted-foreground hover:text-foreground transition-colors">
                      Math
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/calculators/conversion" className="text-muted-foreground hover:text-foreground transition-colors">
                      Conversion
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/construction" className="text-muted-foreground hover:text-foreground transition-colors">
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/business" className="text-muted-foreground hover:text-foreground transition-colors">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/cooking" className="text-muted-foreground hover:text-foreground transition-colors">
                      Cooking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t text-center text-muted-foreground">
              <p>© 2024 Calculator Hub. All calculators are free to use.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}