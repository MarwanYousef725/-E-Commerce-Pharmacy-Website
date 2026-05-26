"use client";

import Link from "next/link";
import { Cross, Menu, Moon, Sun, Pill } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/config/site";

const navItems = [
  { id: "medicines", href: "/#medicines", labelKey: "menuMedicines" as const },
  { id: "services", href: "/#services", labelKey: "menuServices" as const },
  { id: "products", href: "/#products", labelKey: "menuProducts" as const },
  { id: "contact", href: "/#contact", labelKey: "menuContact" as const },
];

export function PharmacyNavbar() {
  const { t, locale, setLocale, isRtl } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-white/92 shadow-sm dark:border-emerald-400/15 dark:bg-slate-950/92">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="logo-float relative grid size-11 place-content-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md transition-shadow group-hover:shadow-emerald-500/30 neo-glow-soft">
            <Cross className="size-5 transition-transform group-hover:rotate-12" strokeWidth={2.5} />
            <div className="absolute -end-1 -top-1 grid size-4 place-content-center rounded-full bg-white text-emerald-600 shadow">
              <Pill className="size-2.5" />
            </div>
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-emerald-700 transition-colors group-hover:text-emerald-600 dark:text-emerald-300">
              {siteConfig.name}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600/80 dark:text-emerald-400/80">
              {t.nav.licensedPharmacy}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link-animated rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {t.nav[item.labelKey]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            variant="outline"
            className="btn-premium border-emerald-500/30 px-3 font-bold"
          >
            {locale === "en" ? "AR" : "EN"}
          </Button>
          <Button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            variant="outline"
            className="btn-premium border-emerald-500/30 px-3"
          >
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" className="lg:hidden">
                  <Menu />
                </Button>
              }
            />
            <SheetContent side={isRtl ? "left" : "right"} className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="logo-float grid size-10 place-content-center rounded-xl bg-emerald-600 text-white">
                  <Cross className="size-4" />
                </div>
                <p className="font-black text-emerald-700">{siteConfig.name}</p>
              </div>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-lg font-bold transition hover:bg-emerald-500/10 hover:translate-x-1"
                  >
                    {t.nav[item.labelKey]}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
