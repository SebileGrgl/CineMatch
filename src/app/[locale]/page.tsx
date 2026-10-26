import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/config";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:py-36">
      <span className="animate-fade-up rounded-full glass px-4 py-1 text-xs font-medium tracking-widest text-gold-300 uppercase">
        {t("badge")}
      </span>
      <h1 className="animate-fade-up text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
        {t("titleLead")} <span className="text-gradient-gold">{t("titleAccent")}</span>
      </h1>
      <p className="max-w-xl text-lg text-pretty text-muted-foreground">{t("description")}</p>
    </section>
  );
}
