import { Metadata } from "next";

export const metadata: Metadata = {
  title: "380+ Free Calculators | Browse All Categories",
  description: "Browse 380+ free online calculators across 20 categories. Finance, health, math, science, conversion, construction, and more. Fast, accurate, easy-to-use calculators.",
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
