"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/data/products";

export function MovingImagesMarquee() {
  const images = products.slice(0, 8).map((p) => p.image);
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-24 bg-gradient-to-r from-white/90 to-transparent dark:from-slate-950/90" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-24 bg-gradient-to-l from-white/90 to-transparent dark:from-slate-950/90" />
      <motion.div
        className="flex gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-emerald-500/20 shadow-lg neo-glow md:h-36 md:w-36"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="144px" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
