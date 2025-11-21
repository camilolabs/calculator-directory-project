import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal notice and disclaimer: informational use of calculators and absence of professional advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  const effectiveDate = new Date().toISOString().slice(0, 10);
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Disclaimer</h1>
      <p className="text-sm text-muted-foreground mb-6">Effective date: {effectiveDate}</p>

      <section className="space-y-4">
        <p>
          Calcupik provides tools and calculators for informational purposes. While we
          strive for accuracy, we do not guarantee that results are error-free or
          suitable for all purposes.
        </p>
        <p>
          Nothing on this site constitutes professional advice (financial, medical,
          legal, or otherwise). Consult a qualified professional before making
          important decisions.
        </p>
        <p>
          We do not accept responsibility for any loss or damage arising from the use
          of the site.
        </p>
      </section>
    </main>
  );
}