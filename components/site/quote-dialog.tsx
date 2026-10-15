"use client";

import { createContext, useCallback, useContext, useState } from "react";
import Image from "next/image";
import { ArrowRight, Building2, ChartNoAxesColumnIncreasing, CircleCheck, Settings, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "./logo";
import { ctaClass } from "./styles";
import { SelectField, TextAreaField, TextField, propertyTypes } from "./form-fields";
import { Gold } from "./primitives";
import { inquiryEmail } from "@/lib/inquiry";

const QuoteContext = createContext<{ open: () => void }>({ open: () => {} });
export const useQuote = () => useContext(QuoteContext);

const states = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");

const perks = [
  { icon: Building2, label: "Personalized Management Plan" },
  { icon: ChartNoAxesColumnIncreasing, label: "Transparent Pricing" },
  { icon: Settings, label: "Technology-Enabled Solutions" },
  { icon: ShieldCheck, label: "Expert Support From Day One" },
];

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [emailHref, setEmailHref] = useState("");
  const open = useCallback(() => {
    setEmailHref("");
    setOpen(true);
  }, []);

  return (
    <QuoteContext value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[1040px] gap-0 overflow-y-auto rounded-xl bg-white p-0 sm:max-w-[1040px] lg:grid-cols-[minmax(0,36%)_1fr] lg:overflow-hidden">
          {/* Left brand panel */}
          <aside className="relative isolate hidden overflow-hidden bg-navy-900 text-white lg:flex lg:flex-col">
            <div className="p-8 xl:p-10">
              <Logo />
              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-gold-400">GET A QUOTE</p>
              <p className="mt-3 font-serif text-[2rem] leading-[1.12]">
                Let’s Find the Right Solution for <Gold>Your Property.</Gold>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Share a few details about your property and goals, and our team will create a customized proposal
                tailored to your needs.
              </p>
              <ul className="mt-7 space-y-4">
                {perks.map((p) => (
                  <li key={p.label} className="flex items-center gap-4 text-sm">
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-gold-400/80 text-gold-400">
                      <p.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-auto h-56">
              <Image src="/img/quote-panel.jpg" alt="" fill sizes="380px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-transparent to-transparent" />
            </div>
          </aside>

          {/* Form */}
          <div className="p-5 sm:p-8 lg:max-h-[calc(100dvh-1.5rem)] lg:overflow-y-auto xl:p-10">
            {emailHref ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CircleCheck className="size-14 text-gold-500" strokeWidth={1.4} />
                <DialogTitle className="mt-5 font-serif text-3xl font-medium text-navy-900">Your request is ready</DialogTitle>
                <DialogDescription className="mt-3 max-w-sm text-sm text-slate-600">
                  Open your email app to review and send your request. Nothing has been sent yet.
                </DialogDescription>
                <a href={emailHref} className={ctaClass("gold", "mt-6")}>Open Email App <ArrowRight /></a>
                <button type="button" onClick={() => setOpen(false)} className={ctaClass("gold", "mt-8")}>
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmailHref(inquiryEmail(e.currentTarget, "NUMU property consultation request"));
                }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-gold-500">REQUEST A QUOTE</p>
                <DialogTitle className="mt-2 pr-8 font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-tight font-medium text-navy-900">
                  Tell Us About Your Property
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm text-slate-600">
                  Fill out the form below to prepare an email request. You’ll review and send it from your email app.
                </DialogDescription>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <SelectField name="propertyType" label="Property Type" placeholder="Select property type" options={propertyTypes} required />
                  <SelectField name="units" label="Number of Units" placeholder="Select range" options={["1", "2 – 4", "5 – 20", "21 – 50", "51 – 100", "100+"]} required />
                  <TextField name="address" label="Property Address" placeholder="Enter full address or city, state" autoComplete="street-address" required />
                  <div className="grid grid-cols-[1fr_0.9fr] gap-3">
                    <TextField name="city" label="City" placeholder="City" autoComplete="address-level2" required />
                    <SelectField name="state" label="State" placeholder="Select state" options={states} required />
                  </div>
                  <SelectField name="ownership" label="Ownership Type" placeholder="Select ownership type" options={["Individual Owner", "Family Office", "Investment Group / LLC", "Institutional Investor", "Developer"]} required />
                  <SelectField name="timeline" label="When are you looking to start?" placeholder="Select timeline" options={["Immediately", "Within 30 days", "1 – 3 months", "3 – 6 months", "Just exploring"]} required />
                  <TextAreaField
                    name="goals"
                    label="What are your goals?"
                    placeholder="Tell us about your property, current challenges, and what you’re looking to achieve…"
                    maxLength={500}
                    required
                    className="sm:col-span-2"
                  />
                </div>

                <fieldset className="mt-4 rounded-lg bg-cream p-4 sm:p-5">
                  <legend className="float-left mb-3 font-serif text-lg text-navy-900">Your Information</legend>
                  <div className="clear-both grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <TextField name="fullName" label="Full Name" placeholder="Your name" autoComplete="name" required />
                    <TextField name="email" type="email" label="Email Address" placeholder="you@company.com" autoComplete="email" required />
                    <TextField name="phone" type="tel" label="Phone Number" placeholder="(123) 456-7890" autoComplete="tel" required />
                    <TextField name="company" label="Company (Optional)" placeholder="Company name" autoComplete="organization" className="md:col-span-1" />
                    <SelectField name="source" label="How did you hear about us?" placeholder="Select an option" options={["Google Search", "Referral", "Social Media", "Partner", "Event", "Other"]} className="sm:col-span-1 md:col-span-2" />
                  </div>
                  <label className="mt-4 flex items-start gap-3 text-[13px] text-ink">
                    <Checkbox name="consent" required className="mt-0.5 border-gold-500 data-checked:border-gold-500 data-checked:bg-gold-500" />
                    <span>
                      I agree to be contacted by NUMU Property Management regarding my inquiry.<span className="text-gold-600"> *</span>
                    </span>
                  </label>
                </fieldset>

                <button type="submit" className={ctaClass("gold", "mt-6 w-full text-sm")}>
                  Prepare Email Request <ArrowRight />
                </button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </QuoteContext>
  );
}
