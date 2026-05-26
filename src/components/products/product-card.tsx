"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { buildProductOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t, locale, isRtl } = useLanguage();
  const name = locale === "ar" ? product.nameAr : product.name;
  const description = locale === "ar" ? product.descriptionAr : product.description;
  const categoryLabel = locale === "ar" ? product.categoryLabelAr : product.categoryLabel;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 22 }}
      whileHover={{ y: -14, rotateX: 4, rotateY: isRtl ? -3 : 3 }}
      className="group overflow-hidden rounded-2xl border border-emerald-500/15 bg-white/55 shadow-lg backdrop-blur-2xl dark:border-emerald-400/10 dark:bg-slate-900/55 neo-glow [transform-style:preserve-3d]"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }}>
            <Image
              src={product.image}
              alt={name}
              width={500}
              height={420}
              className="h-48 w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            animate={{ backgroundPositionX: ["0%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(105deg, transparent 40%, rgba(16,185,129,0.25) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="absolute start-3 top-3 flex gap-2">
            {!product.inStock && <Badge>{t.outOfStock}</Badge>}
            {product.bestSeller && (
              <Badge className="bg-amber-500 text-white">{t.bestSeller}</Badge>
            )}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-xs font-semibold text-emerald-600/80">{categoryLabel}</p>
          <h3 className="line-clamp-2 font-bold">{name}</h3>
          <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
          <p className="text-lg font-black text-emerald-600">
            {product.currency} {product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="space-y-2 px-4 pb-4">
        <Link href={`/products/${product.id}`}>
          <Button variant="outline" className="h-9 w-full border-emerald-500/30 font-bold hover:bg-emerald-500/10">
            {t.productDetail.viewDetails}
          </Button>
        </Link>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="h-10 w-full bg-green-600 text-white hover:bg-green-700 neo-glow"
            disabled={!product.inStock}
            onClick={() => openWhatsApp(buildProductOrderMessage(name, 1, locale))}
          >
            <MessageCircle className="me-2" /> {t.orderWhatsApp}
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}
