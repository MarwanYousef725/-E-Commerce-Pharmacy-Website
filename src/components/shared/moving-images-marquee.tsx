"use client";

import Image from "next/image";
import { products } from "@/lib/data/products";
import { useLanguage } from "@/providers/language-provider";

export function MovingImagesMarquee() {
  const { isRtl } = useLanguage();
  const images = products.slice(0, 6).map((p) => p.image);
  const track = [...images, ...images];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-[#f7fbff] to-transparent dark:from-[#060b12]" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-[#f7fbff] to-transparent dark:from-[#060b12]" />
      <div className={`marquee-track ${isRtl ? "marquee-track-rtl" : "marquee-track-ltr"}`}>
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="marquee-item-float relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-emerald-500/20 shadow-md transition-transform duration-300 hover:scale-110 md:h-32 md:w-32"
            style={{ animationDelay: `${(i % 6) * 0.4}s` }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="128px" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
