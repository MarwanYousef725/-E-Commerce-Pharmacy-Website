"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { testimonials } from "@/lib/data/products";

export function AutoTestimonialSlider() {
  const { t, locale, isRtl } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-black md:text-4xl">{t.testimonials.title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{t.testimonials.subtitle}</p>
      </motion.div>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/55 p-8 backdrop-blur-2xl dark:border-emerald-400/15 dark:bg-slate-900/55 neo-glow md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: isRtl ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 60 : -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative mb-6"
            >
              <div className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-lg" />
              <Image
                src={current.avatar}
                alt=""
                width={96}
                height={96}
                className="relative rounded-full border-4 border-emerald-500/30 object-cover"
              />
            </motion.div>

            <div className="mb-4 flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="size-5 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>

            <p className="max-w-2xl text-lg leading-relaxed md:text-xl">
              &ldquo;{locale === "ar" ? current.textAr : current.text}&rdquo;
            </p>
            <p className="mt-6 text-lg font-black text-emerald-600 dark:text-emerald-400">
              {locale === "ar" ? current.nameAr : current.name}
            </p>
            <p className="text-sm text-slate-500">
              {locale === "ar" ? current.roleAr : current.role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                index === i ? "w-10 bg-emerald-600" : "w-6 bg-slate-300 dark:bg-slate-700"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
