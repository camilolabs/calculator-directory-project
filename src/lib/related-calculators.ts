import { getCategory, getCalculator } from "./calculator-data";
import { getCalculatorSEO } from "./calculator-seo-content";

export interface RelatedItem {
  id: string;
  name: string;
  icon: string;
  categoryId: string;
  score: number;
}

function overlapScore(a: string[], b: string[]): number {
  if (!a?.length || !b?.length) return 0;
  const setA = new Set(a.map((s) => s.toLowerCase()));
  let score = 0;
  for (const kw of b) {
    if (setA.has(kw.toLowerCase())) score += 1;
  }
  return score;
}

export function getRelatedCalculators(
  categoryId: string,
  calculatorId: string,
  limit = 6
): RelatedItem[] {
  const category = getCategory(categoryId);
  const current = getCalculator(categoryId, calculatorId);
  if (!category || !current) return [];

  const currentSEO = getCalculatorSEO(calculatorId);
  const currentKeywords = currentSEO?.keywords ?? [];

  const scored = category.calculators
    .filter((c) => c.id !== calculatorId)
    .map((c) => {
      const seo = getCalculatorSEO(c.id);
      const score = overlapScore(currentKeywords, seo?.keywords ?? []);
      return { id: c.id, name: c.name, icon: c.icon, categoryId: category.id, score } as RelatedItem;
    })
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  // Fallback: ensure we always return some items even if overlap is zero
  const ensured = scored.length ? scored : category.calculators
    .filter((c) => c.id !== calculatorId)
    .map((c) => ({ id: c.id, name: c.name, icon: c.icon, categoryId: category.id, score: 0 }));

  return ensured.slice(0, limit);
}