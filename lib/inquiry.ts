import { contact } from "./site";

/** Prepare an email without claiming that a backend received the inquiry. */
export function inquiryEmail(form: HTMLFormElement, subject: string) {
  const body = Array.from(new FormData(form).entries())
    .filter(([name]) => name !== "consent")
    .map(([name, value]) => {
      const label = name.replace(/([A-Z])/g, " $1");
      return `${label.charAt(0).toUpperCase()}${label.slice(1)}: ${String(value)}`;
    });
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join("\n"))}`;
}
