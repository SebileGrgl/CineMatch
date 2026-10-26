export const localeConfig = {
  tr: { label: "Türkçe", tmdbLanguage: "tr-TR" },
  en: { label: "English", tmdbLanguage: "en-US" },
} as const;

export type Locale = keyof typeof localeConfig;

export const locales = Object.keys(localeConfig) as Locale[];
export const defaultLocale: Locale = "tr";
