"use client";

import { hasConsent } from "@/lib/consent";

export default function ConsentGate({ category, children }: { category: "analytics" | "ads"; children: React.ReactNode }) {
  // Render children only if user has granted consent for the given category
  if (typeof window === "undefined") return null;
  const allowed = hasConsent(category);
  if (!allowed) return null;
  return <>{children}</>;
}