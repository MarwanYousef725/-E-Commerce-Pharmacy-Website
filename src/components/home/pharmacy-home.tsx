"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Phone, Mail, MapPin, MessageCircle, Pill, HeartPulse, Truck, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PharmacyNavbar } from "@/components/layout/pharmacy-navbar";
import { ProductCard } from "@/components/products/product-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { AutoTestimonialSlider } from "@/components/shared/auto-testimonial-slider";
import { FloatingPharmacyElements } from "@/components/shared/floating-pharmacy-elements";
import { FuturisticBackground } from "@/components/shared/futuristic-background";
import { MovingImagesMarquee } from "@/components/shared/moving-images-marquee";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { useLanguage } from "@/providers/language-provider";
import { products, categoryFilters, stats } from "@/lib/data/products";
import { buildProductOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

const categoryIcons = [Pill, Sparkles, HeartPulse, Truck, ShieldCheck, Stethoscope];

export default function PharmacyHome() {
  const { t, locale } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const text = locale === "ar" ? `${p.nameAr} ${p.descriptionAr}` : `${p.name} ${p.description}`;
      const matchesSearch = text.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [query, category, locale]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(16,185,129,0.14),transparent_48%),radial-gradient(900px_circle_at_90%_20%,rgba(99,102,241,0.12),transparent_52%),linear-gradient(180deg,#f7fbff_0%,#ffffff_45%,#f0fdf4_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(16,185,129,0.10),transparent_52%),radial-gradient(900px_circle_at_90%_20%,rgba(99,102,241,0.10),transparent_58%),linear-gradient(180deg,#060b12_0%,#0b1220_55%,#071a16_100%)] dark:text-slate-100">
      <ScrollProgress />
      <FuturisticBackground />
      <FloatingPharmacyElements />
      <PharmacyNavbar />

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-12 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-badge-pulse pulse-ring mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            {t.downloadApp}
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {t.hero.line1}
            </motion.span>
            <motion.span
              className="text-gradient-flow block bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t.hero.line2}
            </motion.span>
            <motion.span
              className="block text-2xl font-bold text-slate-600 md:text-3xl dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {t.hero.line3}
            </motion.span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products">
              <Button className="btn-premium h-11 bg-emerald-600 px-6 font-bold text-white hover:bg-emerald-700 neo-glow-soft">
                {t.hero.viewProducts}
              </Button>
            </a>
            <Button
              className="btn-premium h-11 bg-green-600 px-6 font-bold text-white hover:bg-green-700 neo-glow-soft"
              onClick={() => openWhatsApp(buildProductOrderMessage("Panadol Extra", 2, locale))}
            >
              <MessageCircle className="me-2" /> {t.hero.orderWhatsApp}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="hero-orbit" aria-hidden="true">
            <span className="hero-orbit-dot" />
          </div>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-500/25 via-teal-500/18 to-cyan-500/18 opacity-80 blur-xl" />
          <div className="border-beam hero-media-float relative overflow-hidden rounded-[2rem] border border-emerald-500/25 bg-white/80 p-4 shadow-xl neo-glow-soft dark:border-emerald-400/15 dark:bg-slate-900/80">
            <Image
              src="https://picsum.photos/seed/serenemeds-hero/1400/1000"
              alt="Pharmacy"
              width={900}
              height={700}
              priority
              className="h-[380px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.05]"
            />
          </div>
        </motion.div>
      </section>

      <MovingImagesMarquee />

      <div className="section-divider mx-auto max-w-7xl px-4 md:px-6" aria-hidden="true" />

      {/* Categories */}
      <section className="section-lazy mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6">
        <ScrollReveal className="grid gap-4 rounded-3xl border border-emerald-500/15 bg-white/80 p-5 md:grid-cols-3 dark:border-emerald-400/10 dark:bg-slate-900/80">
          {[t.categories.nutrition, t.categories.beauty, t.categories.sports].map((c) => (
            <div
              key={c}
              className="category-card-aurora hover-lift rounded-2xl bg-gradient-to-br from-white to-emerald-50/60 p-5 dark:from-slate-900 dark:to-emerald-950/35"
            >
              <Pill className="icon-bounce-hover mb-2 size-5 text-emerald-600" />
              <h3 className="text-xl font-bold">{c}</h3>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Services */}
      <section id="services" className="section-lazy mx-auto max-w-7xl px-4 py-14 md:px-6">
        <ScrollReveal variant="up" className="mb-8">
          <h2 className="section-title-glow text-3xl font-black md:text-4xl">{t.services.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{t.services.subtitle}</p>
        </ScrollReveal>
        <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [t.services.prescription, t.services.prescriptionDesc],
            [t.services.skincare, t.services.skincareDesc],
            [t.services.medical, t.services.medicalDesc],
            [t.services.supplements, t.services.supplementsDesc],
            [t.services.delivery, t.services.deliveryDesc],
            [t.services.consultation, t.services.consultationDesc],
          ].map(([title, desc], i) => {
            const Icon = categoryIcons[i];
            return (
              <article
                key={title}
                className="group hover-lift rounded-2xl border border-emerald-500/15 bg-white/80 p-6 shadow-md transition-shadow hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-400/10 dark:bg-slate-900/80 neo-glow-soft"
              >
                <Icon className="icon-bounce-hover mb-3 size-8 text-emerald-600" />
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              </article>
            );
          })}
        </StaggerReveal>
      </section>

      <div className="section-divider mx-auto max-w-7xl px-4 md:px-6" aria-hidden="true" />

      {/* Products */}
      <section id="products" className="section-lazy mx-auto max-w-7xl scroll-mt-24 px-4 py-14 md:px-6">
        <span id="medicines" className="sr-only" aria-hidden="true" />
        <ScrollReveal className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="section-title-glow text-3xl font-black md:text-4xl">{t.products.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{t.products.subtitle}</p>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.products.search}
                className="input-glow h-11 rounded-xl bg-white/80 ps-9 dark:bg-slate-900/80"
              />
            </div>
            <select
              className="input-glow h-11 rounded-xl border border-emerald-500/20 bg-white/80 px-3 dark:border-emerald-400/15 dark:bg-slate-900/80"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryFilters.map((c) => (
                <option key={c.value} value={c.value}>
                  {locale === "ar" ? c.labelAr : c.labelEn}
                </option>
              ))}
            </select>
          </div>
        </ScrollReveal>
        <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" key={`${query}-${category}`}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </StaggerReveal>
      </section>

      {/* Stats */}
      <section className="section-lazy mx-auto max-w-7xl px-4 py-14 md:px-6">
        <ScrollReveal variant="fade" className="text-center">
          <h2 className="section-title-glow text-3xl font-black md:text-4xl">{t.whyChooseUs.title}</h2>
        </ScrollReveal>
        <StaggerReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.labelKey}
              className="hover-lift rounded-2xl border border-emerald-500/15 bg-white/80 p-5 text-center shadow-md dark:border-emerald-400/10 dark:bg-slate-900/80 neo-glow-soft"
            >
              <p className="text-3xl font-black text-emerald-600">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t.whyChooseUs[s.labelKey]}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </section>

      <AutoTestimonialSlider />

      {/* Contact */}
      <section id="contact" className="section-lazy mx-auto grid max-w-7xl scroll-mt-24 gap-6 px-4 py-14 md:grid-cols-2 md:px-6">
        <ScrollReveal variant="left" className="hover-lift space-y-4 rounded-3xl border border-emerald-500/15 bg-white/80 p-6 shadow-md dark:border-emerald-400/10 dark:bg-slate-900/80">
          <h2 className="section-title-glow text-3xl font-black">{t.contact.title}</h2>
          <p className="text-slate-600 dark:text-slate-300">{t.contact.subtitle}</p>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 font-semibold transition hover:text-emerald-600">
            <Phone className="size-4 text-emerald-600" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 font-semibold transition hover:text-emerald-600">
            <Mail className="size-4 text-emerald-600" /> {siteConfig.email}
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex items-center gap-2 font-semibold transition hover:text-emerald-600">
            <MessageCircle className="size-4 text-emerald-600" /> WhatsApp
          </a>
          <p className="flex items-start gap-2 font-semibold">
            <MapPin className="mt-1 size-4 text-emerald-600" />
            {locale === "ar" ? siteConfig.addressAr : siteConfig.address}
          </p>
          <iframe
            src={siteConfig.mapEmbedUrl}
            loading="lazy"
            className="h-52 w-full rounded-xl border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ScrollReveal>
        <ScrollReveal variant="right" delay={100} as="form" className="hover-lift space-y-3 rounded-3xl border border-emerald-500/15 bg-white/80 p-6 shadow-md dark:border-emerald-400/10 dark:bg-slate-900/80">
          <Input className="input-glow h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.name} />
          <Input className="input-glow h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.email} />
          <Input className="input-glow h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.phone} />
          <Textarea className="input-glow min-h-32 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.message} />
          <Button type="button" className="btn-premium h-11 w-full bg-emerald-600 font-bold text-white hover:bg-emerald-700 neo-glow-soft">
            {t.contact.form.send}
          </Button>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-emerald-500/20 bg-slate-950 px-4 py-12 text-slate-300 md:px-6">
        <div className="footer-glow-line mx-auto mb-10 max-w-7xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-black text-emerald-400">{siteConfig.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{t.footer.corporate}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-emerald-500/70">
              {t.nav.licensedPharmacy}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t.footer.whoWeAre}</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="transition hover:text-emerald-400">{t.footer.about}</li>
              <li className="transition hover:text-emerald-400">{t.footer.contact}</li>
              <li className="transition hover:text-emerald-400">{t.footer.news}</li>
              <li className="transition hover:text-emerald-400">{t.footer.storeLocator}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t.footer.policies}</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="transition hover:text-emerald-400">{t.footer.refund}</li>
              <li className="transition hover:text-emerald-400">{t.footer.shipping}</li>
              <li className="transition hover:text-emerald-400">{t.footer.privacy}</li>
              <li className="transition hover:text-emerald-400">{t.footer.terms}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t.newsletter.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{t.newsletter.subtitle}</p>
            <div className="mt-3 flex gap-2">
              <Input placeholder={t.newsletter.placeholder} className="input-glow h-10 rounded-xl border-slate-700 bg-slate-900 text-slate-100" />
              <Button className="btn-premium h-10 bg-emerald-600 font-bold text-white hover:bg-emerald-700">
                {t.newsletter.subscribe}
              </Button>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          {t.footer.copyright}
        </p>
      </footer>
    </div>
  );
}
