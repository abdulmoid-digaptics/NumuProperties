"use client";

import Script from "next/script";

export function ContactForm() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-black/5 bg-white">
      <iframe
        src="https://links.360growthlab.com/widget/form/NjxJcroeN907Nabw7SzO"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
        id="inline-NjxJcroeN907Nabw7SzO"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Prepare Email Moid Form"
        data-height="785"
        data-layout-iframe-id="inline-NjxJcroeN907Nabw7SzO"
        data-form-id="NjxJcroeN907Nabw7SzO"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Prepare Email Moid Form"
        className="min-h-[785px] w-full"
      />
      <Script src="https://links.360growthlab.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
