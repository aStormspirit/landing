import { enMessages, type SiteMessages } from "@/messages/en";
import { ruMessages } from "@/messages/ru";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale): SiteMessages {
  return locale === "ru" ? ruMessages : enMessages;
}

export function detectLocaleFromAcceptLanguage(headerValue: string | null): Locale {
  if (!headerValue) {
    return defaultLocale;
  }

  const normalized = headerValue.toLowerCase();
  if (normalized.includes("ru")) {
    return "ru";
  }

  return "en";
}
