import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "@/i18n/config";
import type { Messages } from "@/messages/types";

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  tr: () => import("@/messages/tr"),
  en: () => import("@/messages/en"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await loaders[locale]()).default,
  };
});
