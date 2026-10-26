"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Script from "next/script";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const QuoteContext = createContext<{ open: () => void }>({ open: () => {} });
export const useQuote = () => useContext(QuoteContext);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const existing = document.querySelector('script[src="https://links.360growthlab.com/js/form_embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://links.360growthlab.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  return (
    <QuoteContext value={{ open }}>
      {children}
      <Script src="https://links.360growthlab.com/js/form_embed.js" strategy="lazyOnload" />
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] w-[92vw] sm:w-[85vw] md:w-[65vw] lg:w-[40%] max-w-none sm:max-w-none gap-0 overflow-hidden rounded-2xl bg-white p-3 sm:p-5">
          <DialogTitle className="sr-only">Prepare Email request Moid Form</DialogTitle>
          <div className="h-[85vh] max-h-[850px] w-full overflow-y-auto">
            <iframe
              src="https://links.360growthlab.com/widget/form/g4tD0RQSy72I44SiRiHu"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px", minHeight: "680px" }}
              id="inline-g4tD0RQSy72I44SiRiHu"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Prepare Email request Moid Form"
              data-height="1283"
              data-layout-iframe-id="inline-g4tD0RQSy72I44SiRiHu"
              data-form-id="g4tD0RQSy72I44SiRiHu"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Prepare Email request Moid Form"
            />
          </div>
        </DialogContent>
      </Dialog>
    </QuoteContext>
  );
}
