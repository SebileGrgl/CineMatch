import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:justify-between">
        <p>{t("copyright", { year: new Date().getFullYear(), name: siteConfig.name })}</p>
        <p>{t("tmdb")}</p>
      </div>
    </footer>
  );
}
