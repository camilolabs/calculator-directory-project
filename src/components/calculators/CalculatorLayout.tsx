"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  icon: string;
  categoryName: string;
  categoryId: string;
  children: ReactNode;
}

export function CalculatorLayout({
  title,
  description,
  icon,
  categoryName,
  categoryId,
  children,
}: CalculatorLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href={`/calculators/${categoryId}`}
            className="inline-flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to {categoryName}
          </Link>
        </div>
      </header>

      {/* Calculator Section */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <Card>
          <CardContent className="pt-6">{children}</CardContent>
        </Card>
      </section>

      {/* Footer handled globally in RootLayout */}
    </div>
  );
}
