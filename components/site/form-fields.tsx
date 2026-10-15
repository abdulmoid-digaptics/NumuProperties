"use client";

import { useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const controlClass =
  "h-11 w-full rounded-md border-input bg-white px-3 text-sm text-ink shadow-none placeholder:text-slate-400 focus-visible:border-gold-500 focus-visible:ring-gold-400/30";

function FieldLabel({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label id={`${htmlFor}-label`} htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-ink">
      {label}
      {required && <span className="text-gold-600"> *</span>}
    </label>
  );
}

export function TextField({
  name,
  label,
  required,
  type = "text",
  placeholder,
  autoComplete,
  className,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <Input id={id} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} className={controlClass} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
  className,
}: {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <Select name={name} required={required}>
        <SelectTrigger id={id} aria-labelledby={`${id}-label`} className={cn(controlClass, "w-full data-[size=default]:h-11")}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  placeholder,
  required,
  maxLength,
  className,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  className?: string;
}) {
  const id = useId();
  const [count, setCount] = useState(0);
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <Textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => setCount(e.target.value.length)}
        className={cn(controlClass, "h-auto min-h-24 py-2.5")}
      />
      {maxLength && (
        <p className="mt-1 text-right text-xs text-slate-500">
          {count}/{maxLength}
        </p>
      )}
    </div>
  );
}

export const propertyTypes = ["Single Family", "Multifamily", "Commercial", "Mixed-Use", "Short Term Rental", "Portfolio"];
