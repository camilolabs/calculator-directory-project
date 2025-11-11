"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAllCategories, searchCalculators } from "@/lib/calculator-data";
import { Search } from "lucide-react";

export default function CalculatorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getAllCategories();
  const searchResults = searchQuery ? searchCalculators(searchQuery) : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            Calculator Hub
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            380+ Free Calculators
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect calculator for any calculation. From finance to health, math to cooking.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search calculators (e.g., 'loan', 'BMI', 'percentage')..."
              className="pl-10 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold mb-6">
            Search Results ({searchResults.length})
          </h2>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((calculator) => (
                <Link
                  key={`${calculator.category}-${calculator.id}`}
                  href={`/calculators/${calculator.category}/${calculator.id}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{calculator.icon}</span>
                        <div>
                          <CardTitle className="text-lg">{calculator.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {calculator.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No calculators found matching "{searchQuery}"
              </p>
            </div>
          )}
        </section>
      )}

      {/* Categories Grid */}
      {!searchQuery && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/calculators/${category.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{category.icon}</span>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {category.calculators.length} calculators
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Calculator Hub. All calculators are free to use. Made with ❤️ by Snapik</p>
        </div>
      </footer>
    </div>
  );
}