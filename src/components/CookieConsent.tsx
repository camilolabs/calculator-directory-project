"use client";

import { useEffect, useState } from "react";
import { readConsent, writeConsent } from "@/lib/consent";

type Mode = "banner" | "preferences";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("banner");
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    // Initialize visibility based on existing consent
    const prefs = readConsent();
    if (!prefs) {
      setVisible(true);
      setMode("banner");
    }

    // Listen for global event to open preferences manager
    const handler = () => {
      setVisible(true);
      setMode("preferences");
      const existing = readConsent();
      setAnalytics(!!existing?.analytics);
      setAds(!!existing?.ads);
    };
    window.addEventListener("openConsentPreferences", handler as EventListener);
    return () => window.removeEventListener("openConsentPreferences", handler as EventListener);
  }, []);

  function acceptAll() {
    writeConsent({ essential: true, analytics: true, ads: true, version: 1 });
    setVisible(false);
  }

  function rejectNonEssential() {
    writeConsent({ essential: true, analytics: false, ads: false, version: 1 });
    setVisible(false);
  }

  function savePreferences() {
    writeConsent({ essential: true, analytics, ads, version: 1 });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto px-4 py-4 bg-background border-t shadow-lg">
        {mode === "banner" ? (
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm">
              We use essential cookies and, with your consent, analytics and advertising
              (Google AdSense) cookies to improve your experience. See our
              <a href="/cookies" className="underline ml-1">Cookies Policy</a>
              {" "}and
              <a href="/privacy-policy" className="underline ml-1">Privacy Policy</a>.
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 border rounded" onClick={rejectNonEssential}>
                Reject
              </button>
              <button className="px-3 py-2 border rounded" onClick={() => setMode("preferences")}>Customize</button>
              <button className="px-3 py-2 bg-foreground text-background rounded" onClick={acceptAll}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-base font-semibold">Cookie preferences</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Essential</div>
                  <div className="text-sm text-muted-foreground">
                    Required for site functionality. Always on.
                  </div>
                </div>
                <span className="text-sm">On</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Analytics</div>
                  <div className="text-sm text-muted-foreground">
                    Help us understand usage and improve the service.
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className="text-sm">Allow</span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Advertising</div>
                  <div className="text-sm text-muted-foreground">
                    Cookies used to show relevant ads (e.g., AdSense).
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
                  <span className="text-sm">Allow</span>
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 border rounded" onClick={rejectNonEssential}>Reject</button>
              <button className="px-3 py-2 bg-foreground text-background rounded" onClick={savePreferences}>Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}