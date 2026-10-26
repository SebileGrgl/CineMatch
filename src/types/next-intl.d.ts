import type { Locale } from "@/i18n/config";
import type { Messages } from "@/messages/types";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
