import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Information about essential, analytics, and advertising cookies used by Calcupik (including Google AdSense).",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPolicyPage() {
  const effectiveDate = new Date().toISOString().slice(0, 10);
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Cookies Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">Effective date: {effectiveDate}</p>

      <section className="space-y-4">
        <p>
          This policy describes what cookies are, how we use them, and how you can
          manage them.
        </p>

        <h2 className="text-xl font-semibold">What are cookies?</h2>
        <p>
          Cookies are small files a website places on your device to remember
          information about your visit. They can be first-party or third-party.
        </p>

        <h2 className="text-xl font-semibold">Types of cookies we use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Essential:</strong> required for site functionality and service
            delivery.
          </li>
          <li>
            <strong>Analytics:</strong> help us understand site usage to improve the
            experience.
          </li>
          <li>
            <strong>Advertising:</strong> used by providers like Google AdSense to show
            relevant ads and measure performance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Google AdSense cookies</h2>
        <p>
          AdSense may use cookies to show ads based on your prior visits to this or
          other sites. You can manage personalization at
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            Ads Settings
          </a>
          . Learn more at
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            Google Ads Policies
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold">Managing cookies</h2>
        <p>
          You can configure or block cookies in your browser settings. Disabling
          essential cookies may affect site functionality.
        </p>

        <h2 className="text-xl font-semibold">Changes to this policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or legal
          requirements. We recommend reviewing it periodically.
        </p>
      </section>
    </main>
  );
}