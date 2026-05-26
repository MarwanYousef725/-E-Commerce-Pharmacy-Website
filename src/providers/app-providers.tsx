"use client";

import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Locale } from "@/lib/i18n/translations";

export function AppProviders({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
