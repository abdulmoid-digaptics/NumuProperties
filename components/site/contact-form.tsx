"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { SelectField, TextAreaField, TextField, propertyTypes } from "./form-fields";
import { ctaClass } from "./styles";
import { inquiryEmail } from "@/lib/inquiry";

export function ContactForm() {
  const [emailHref, setEmailHref] = useState("");

  return (
    <>
      {emailHref && (
      <div role="status" className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <CircleCheck className="size-12 text-gold-500" strokeWidth={1.4} />
        <p className="mt-4 font-serif text-2xl text-navy-900">Your message is ready</p>
        <p className="mt-2 max-w-sm text-sm text-slate-600">Open your email app to review and send your message. Nothing has been sent yet.</p>
        <a href={emailHref} className={ctaClass("gold", "mt-6")}>Open Email App <ArrowRight /></a>
        <button type="button" onClick={() => setEmailHref("")} className="mt-4 text-sm underline underline-offset-4">Back to form</button>
      </div>
      )}
    <form
      hidden={Boolean(emailHref)}
      onSubmit={(e) => {
        e.preventDefault();
        setEmailHref(inquiryEmail(e.currentTarget, "NUMU website inquiry"));
      }}
      className={emailHref ? "hidden" : "mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"}
    >
      <TextField name="fullName" label="Full Name" placeholder="Your name" autoComplete="name" required />
      <TextField name="email" type="email" label="Email Address" placeholder="you@company.com" autoComplete="email" required />
      <TextField name="phone" type="tel" label="Phone Number" placeholder="(123) 456-7890" autoComplete="tel" className="sm:col-span-2 md:col-span-1" />
      <SelectField
        name="interest"
        label="I’m Interested In"
        placeholder="Select an option"
        options={["Property Management", "Investor Services", "Short Term Rentals", "Renting a Home", "Partnerships", "Other"]}
        required
        className="md:col-span-1 lg:col-span-1"
      />
      <SelectField name="propertyType" label="Property Type" placeholder="Select property type" options={propertyTypes} className="md:col-span-2 lg:col-span-2" />
      <TextAreaField
        name="message"
        label="Message"
        placeholder="Tell us about your property, goals, or how we can help…"
        required
        className="sm:col-span-2 md:col-span-3"
      />
      <div className="sm:col-span-2 md:col-span-3">
        <button type="submit" className={ctaClass("gold", "px-7")}>
          Prepare Email <ArrowRight />
        </button>
      </div>
    </form>
    </>
  );
}
