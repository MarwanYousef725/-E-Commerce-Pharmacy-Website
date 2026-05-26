"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PharmacyNavbar } from "@/components/layout/pharmacy-navbar";
import { ProductCard } from "@/components/products/product-card";
import { FuturisticBackground } from "@/components/shared/futuristic-background";
import { FloatingPharmacyElements } from "@/components/shared/floating-pharmacy-elements";
import { useLanguage } from "@/providers/language-provider";
import { buildProductOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/lib/data/products";

type ProductDetailViewProps = {
  product: Product;
  related: Product[];
};

export function ProductDetailView({ product, related }: ProductDetailViewProps) {
  const { t, locale } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const name = locale === "ar" ? product.nameAr : product.name;
  const description = locale === "ar" ? product.descriptionAr : product.description;
  const categoryLabel = locale === "ar" ? product.categoryLabelAr : product.categoryLabel;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(16,185,129,0.14),transparent_48%),linear-gradient(180deg,#f7fbff_0%,#ffffff_45%,#f0fdf4_100%)] text-slate-900 dark:bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(16,185,129,0.10),transparent_52%),linear-gradient(180deg,#060b12_0%,#0b1220_55%,#071a16_100%)] dark:text-slate-100">
      <FuturisticBackground />
      <FloatingPharmacyElements />
      <PharmacyNavbar />

      <main className="relative mx-auto max-w-7xl px-4 py-10 md:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-emerald-600 transition hover:bg-emerald-500/10"
          >
            <ArrowLeft className="size-4" />
            {t.productDetail.back}
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/60 p-4 backdrop-blur-2xl dark:bg-slate-900/60 neo-glow"
            >
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
                <Image
                  src={product.image}
                  alt={name}
                  width={700}
                  height={700}
                  className="h-[420px] w-full rounded-2xl object-cover md:h-[500px]"
                  priority
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute -end-4 -top-4 grid size-16 place-content-center rounded-2xl bg-emerald-600 text-white shadow-xl neo-glow"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ShieldCheck className="size-8" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              {!product.inStock && <Badge>{t.outOfStock}</Badge>}
              {product.bestSeller && (
                <Badge className="bg-amber-500 text-white">{t.bestSeller}</Badge>
              )}
              <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                {categoryLabel}
              </Badge>
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-5xl">{name}</h1>

            <motion.p
              className="text-4xl font-black text-emerald-600"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {product.currency} {product.price.toFixed(2)}
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/15 bg-white/50 p-4 backdrop-blur dark:bg-slate-900/50">
                <p className="text-xs font-bold uppercase text-slate-500">{t.productDetail.category}</p>
                <p className="mt-1 font-bold">{categoryLabel}</p>
              </div>
              <div className="rounded-2xl border border-emerald-500/15 bg-white/50 p-4 backdrop-blur dark:bg-slate-900/50">
                <p className="text-xs font-bold uppercase text-slate-500">{t.productDetail.availability}</p>
                <p className={`mt-1 font-bold ${product.inStock ? "text-emerald-600" : "text-red-500"}`}>
                  {product.inStock ? t.products.inStock : t.products.outOfStock}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-bold uppercase text-slate-500">{t.productDetail.description}</p>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-600">
              <Truck className="size-4" />
              <span>{t.services.deliveryDesc}</span>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-white/55 p-5 backdrop-blur-2xl dark:bg-slate-900/55 neo-glow">
              <p className="mb-3 text-sm font-bold">{t.productDetail.quantity}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-white/80 p-1 dark:bg-slate-900/80">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Minus />
                  </Button>
                  <motion.span
                    key={quantity}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-8 text-center text-xl font-black"
                  >
                    {quantity}
                  </motion.span>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <Plus />
                  </Button>
                </div>

                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="h-12 w-full bg-green-600 text-base font-bold text-white hover:bg-green-700 neo-glow sm:min-w-[240px]"
                    disabled={!product.inStock}
                    onClick={() =>
                      openWhatsApp(buildProductOrderMessage(name, quantity, locale))
                    }
                  >
                    <MessageCircle className="me-2" />
                    {t.productDetail.orderNow}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="mb-8 text-2xl font-black md:text-3xl">{t.productDetail.relatedProducts}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
