"use client";

import { Clapperboard } from "lucide-react";
import { useTranslations } from "next-intl";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { siteConfig } from "@/config/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("Nav");
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-300",
        scrolled ? "glass-strong" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Clapperboard className="size-5 text-gold-400" aria-hidden />
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
