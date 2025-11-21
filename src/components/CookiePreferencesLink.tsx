"use client";

export default function CookiePreferencesLink() {
  function openPreferences() {
    window.dispatchEvent(new CustomEvent("openConsentPreferences"));
  }
  return (
    <button className="no-underline hover:text-foreground" onClick={openPreferences}>
      Cookie Preferences
    </button>
  );
}