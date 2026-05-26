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
import { useLanguage } from "@/providers/language-provider";
import { products, categoryFilters, stats } from "@/lib/data/products";
import { buildProductOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import { fadeInUp } from "@/lib/animations";
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
          <motion.p
            className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300"
            animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 22px rgba(16,185,129,0.35)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            {t.downloadApp}
          </motion.p>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            <motion.span className="block" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              {t.hero.line1}
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
          <motion.p
            className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <motion.a href="#products" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button className="h-11 bg-emerald-600 px-6 font-bold text-white hover:bg-emerald-700 neo-glow">
                {t.hero.viewProducts}
              </Button>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                className="h-11 bg-green-600 px-6 font-bold text-white hover:bg-green-700 neo-glow"
                onClick={() => openWhatsApp(buildProductOrderMessage("Panadol Extra", 2, locale))}
              >
                <MessageCircle className="me-2" /> {t.hero.orderWhatsApp}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0], rotateZ: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-cyan-500/20 blur-2xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-white/65 p-4 shadow-2xl backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/60 neo-glow"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 8, repeat: Infinity }}>
              <Image
                src="https://picsum.photos/seed/serenemeds-hero/1400/1000"
                alt="Pharmacy"
                width={900}
                height={700}
                className="h-[380px] w-full rounded-2xl object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.30),transparent_60%)]"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Moving product images */}
      <MovingImagesMarquee />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 rounded-3xl border border-emerald-500/15 bg-white/55 p-5 backdrop-blur-2xl md:grid-cols-3 dark:border-emerald-400/10 dark:bg-slate-900/55 neo-glow"
        >
          {[t.categories.nutrition, t.categories.beauty, t.categories.sports].map((c) => (
            <motion.div
              key={c}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/70 to-emerald-50/60 p-5 dark:from-slate-900/70 dark:to-emerald-950/35"
            >
              <motion.div
                className="absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.18),rgba(99,102,241,0.10),rgba(20,184,166,0.14),rgba(16,185,129,0.18))] blur-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative">
                <Pill className="mb-2 size-5 text-emerald-600" />
                <h3 className="text-xl font-bold">{c}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black md:text-4xl">{t.services.title}</h2>
          <p className="mb-8 mt-2 text-slate-600 dark:text-slate-300">{t.services.subtitle}</p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              <motion.article
                key={title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-2xl border border-emerald-500/15 bg-white/60 p-6 shadow-lg backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/60 neo-glow"
              >
                <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}>
                  <Icon className="mb-3 size-8 text-emerald-600" />
                </motion.div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Products / Medicines */}
      <section id="products" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 md:px-6">
        <span id="medicines" className="sr-only" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-3xl font-black md:text-4xl">{t.products.title}</h2>
            <p className="text-slate-600 dark:text-slate-300">{t.products.subtitle}</p>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.products.search}
                className="h-11 rounded-xl bg-white/80 ps-9 dark:bg-slate-900/80"
              />
            </div>
            <select
              className="h-11 rounded-xl border border-emerald-500/20 bg-white/80 px-3 dark:border-emerald-400/15 dark:bg-slate-900/80"
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
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-black md:text-4xl"
        >
          {t.whyChooseUs.title}
        </motion.h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-emerald-500/15 bg-white/60 p-5 text-center backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/60 neo-glow"
            >
              <p className="text-3xl font-black text-emerald-600">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t.whyChooseUs[s.labelKey]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Auto testimonials - centered */}
      <AutoTestimonialSlider />

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-7xl scroll-mt-24 gap-6 px-4 py-14 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 rounded-3xl border border-emerald-500/15 bg-white/60 p-6 backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/60 neo-glow"
        >
          <h2 className="text-3xl font-black">{t.contact.title}</h2>
          <p className="text-slate-600 dark:text-slate-300">{t.contact.subtitle}</p>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 font-semibold">
            <Phone className="size-4 text-emerald-600" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 font-semibold">
            <Mail className="size-4 text-emerald-600" /> {siteConfig.email}
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex items-center gap-2 font-semibold">
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
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-3 rounded-3xl border border-emerald-500/15 bg-white/60 p-6 backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/60 neo-glow"
        >
          <Input className="h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.name} />
          <Input className="h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.email} />
          <Input className="h-11 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.phone} />
          <Textarea className="min-h-32 rounded-xl bg-white/80 dark:bg-slate-900/80" placeholder={t.contact.form.message} />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="button" className="h-11 w-full bg-emerald-600 font-bold text-white hover:bg-emerald-700 neo-glow">
              {t.contact.form.send}
            </Button>
          </motion.div>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-emerald-500/20 bg-slate-950 px-4 py-12 text-slate-300 md:px-6">
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
              <li>{t.footer.about}</li>
              <li>{t.footer.contact}</li>
              <li>{t.footer.news}</li>
              <li>{t.footer.storeLocator}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t.footer.policies}</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>{t.footer.refund}</li>
              <li>{t.footer.shipping}</li>
              <li>{t.footer.privacy}</li>
              <li>{t.footer.terms}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t.newsletter.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{t.newsletter.subtitle}</p>
            <div className="mt-3 flex gap-2">
              <Input placeholder={t.newsletter.placeholder} className="h-10 rounded-xl border-slate-700 bg-slate-900 text-slate-100" />
              <Button className="h-10 bg-emerald-600 font-bold text-white hover:bg-emerald-700">
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
