import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for Calcupik. Send us your questions or requests about privacy, cookies, or the site.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "example@calcupik.com";
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>

      <section className="space-y-4">
        <p>
          Have questions, suggestions, or want to exercise your privacy rights?
          Write to us at:
        </p>
        <p>
          <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
        </p>
        <p>
          When you contact us, include as many details as possible to help us assist
          you better (for example, the page URL and calculator name).
        </p>
      </section>
    </main>
  );
}