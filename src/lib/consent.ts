// Client-side helpers to manage cookie consent preferences
// Note: Only use these functions in Client Components.

export type ConsentCategory = "essential" | "analytics" | "ads";

export type ConsentPrefs = {
  essential: true; // always true, essential cookies required for functionality
  analytics: boolean;
  ads: boolean;
  updatedAt: string; // ISO date
  version: number; // for future migrations of consent schema
};

const CONSENT_COOKIE = "consent_prefs";
const ONE_YEAR_SECONDS = 31536000;

function isClient(): boolean {
  return typeof document !== "undefined" && typeof window !== "undefined";
}

export function readConsent(): ConsentPrefs | null {
  if (!isClient()) return null;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  try {
    const json = decodeURIComponent(match.split("=")[1]);
    const parsed = JSON.parse(json) as ConsentPrefs;
    // basic shape validation
    if (typeof parsed.analytics === "boolean" && typeof parsed.ads === "boolean") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(prefs: Omit<ConsentPrefs, "updatedAt">) {
  if (!isClient()) return;
  const payload: ConsentPrefs = {
    ...prefs,
    updatedAt: new Date().toISOString(),
  };
  const value = encodeURIComponent(JSON.stringify(payload));
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
}

export function hasConsent(category: Exclude<ConsentCategory, "essential">): boolean {
  const prefs = readConsent();
  if (!prefs) return false;
  return !!prefs[category];
}

export function clearConsent() {
  if (!isClient()) return;
  document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}