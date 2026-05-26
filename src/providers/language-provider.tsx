"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Locale } from "@/lib/i18n/translations";

type TranslationValue = (typeof translations)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationValue;
  dir: "ltr" | "rtl";
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "serene-meds-locale";
const COOKIE_KEY = "serene-meds-locale";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${COOKIE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    setLocaleCookie(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    // Sync from localStorage after mount to avoid SSR/client mismatch.
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "ar" || stored === "en") {
      if (stored !== locale) setLocaleState(stored);
      setLocaleCookie(stored);
    } else {
      localStorage.setItem(STORAGE_KEY, locale);
      setLocaleCookie(locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      dir: (locale === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
      isRtl: locale === "ar",
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
