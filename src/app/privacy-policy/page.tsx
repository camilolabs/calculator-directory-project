import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Calcupik collects, uses, and protects data. Information about cookies, AdSense, and user rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const effectiveDate = new Date().toISOString().slice(0, 10);
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "example@calcupik.com";
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">Effective date: {effectiveDate}</p>

      <section className="space-y-4">
        <p>
          At Calcupik, we respect your privacy. This policy explains what data we
          collect, how we use it, and your rights.
        </p>

        <h2 className="text-xl font-semibold">Data we collect</h2>
        <p>
          We collect anonymous usage data to analyze site performance and improve our
          calculators. This may include pages visited, device type, and time on site.
          We do not collect personally identifiable information unless you
          voluntarily provide it when contacting us.
        </p>

        <h2 className="text-xl font-semibold">Cookies and similar technologies</h2>
        <p>
          We use essential cookies required for site functionality and, with your
          consent, analytics and advertising cookies to understand usage and show
          relevant ads. You can manage cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold">Google Advertising (AdSense)</h2>
        <p>
          This site uses Google AdSense, which may use cookies and similar
          technologies to display ads based on your prior visits to this or other
          websites. Google uses the advertising cookie to enable ad services and
          measure performance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You can manage ad personalization at
            {" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ads Settings
            </a>
            .
          </li>
          <li>
            Learn more about how Google uses data:
            {" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Google Ads Policies
            </a>
            .
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Legal basis</h2>
        <p>
          We process usage data based on our legitimate interest in maintaining and
          improving the service. Where required, we will ask for your consent for
          non-essential cookies.
        </p>

        <h2 className="text-xl font-semibold">Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, rectify,
          erase, and object to processing of your data. To exercise your rights,
          contact us.
        </p>

        <h2 className="text-xl font-semibold">Retention</h2>
        <p>
          We retain usage data for as long as necessary for the purposes described and
          according to applicable legal requirements.
        </p>

        <h2 className="text-xl font-semibold">Security</h2>
        <p>
          We implement reasonable measures to protect data from unauthorized access
          and disclosure. However, no system is 100% secure.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          If you have questions about this policy, contact us at
          {" "}
          <a href={`mailto:${contactEmail}`} className="underline">
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </main>
  );
}