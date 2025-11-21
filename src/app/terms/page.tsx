import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Conditions of use for Calcupik: acceptance, permitted use, limitations, disclaimer, and contact.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const effectiveDate = new Date().toISOString().slice(0, 10);
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-6">Effective date: {effectiveDate}</p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
        <p>
          By accessing and using Calcupik, you agree to these Terms of Service. If you
          do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-semibold">Permitted Use</h2>
        <p>
          You may use our calculators for personal or informational professional
          purposes. You may not use the service for illegal activities, to infringe the
          rights of others, or to interfere with site operation.
        </p>

        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p>
          Calculator results are estimates for informational purposes. They do not
          constitute professional advice (financial, medical, legal, etc.). Verify
          information before making decisions.
        </p>

        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Calcupik will not be liable for
          direct, indirect, incidental, or consequential damages arising from the use or
          inability to use the site.
        </p>

        <h2 className="text-xl font-semibold">Changes</h2>
        <p>
          We may update these terms at any time. The current version will be the one
          published on this page.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          For questions about these terms, contact us via the contact page.
        </p>
      </section>
    </main>
  );
}