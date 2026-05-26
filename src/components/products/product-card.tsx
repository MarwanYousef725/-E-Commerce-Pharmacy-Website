"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { buildProductOrderMessage, openWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { t, locale } = useLanguage();
  const name = locale === "ar" ? product.nameAr : product.name;
  const description = locale === "ar" ? product.descriptionAr : product.description;
  const categoryLabel = locale === "ar" ? product.categoryLabelAr : product.categoryLabel;

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-500/15 bg-white/75 shadow-md hover-lift dark:border-emerald-400/10 dark:bg-slate-900/75 neo-glow-soft"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={name}
            width={500}
            height={420}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="card-shimmer" aria-hidden="true" />
          <div className="absolute start-3 top-3 flex gap-2">
            {!product.inStock && <Badge>{t.outOfStock}</Badge>}
            {product.bestSeller && (
              <Badge className="pulse-ring bg-amber-500 text-white">{t.bestSeller}</Badge>
            )}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-xs font-semibold text-emerald-600/80">{categoryLabel}</p>
          <h3 className="line-clamp-2 font-bold transition-colors group-hover:text-emerald-600">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
          <p className="text-lg font-black text-emerald-600">
            {product.currency} {product.price.toFixed(2)}
          </p>
        </div>
      </Link>

      <div className="mt-auto flex flex-col gap-4 px-4 pb-5 pt-1">
        <Link href={`/products/${product.id}`}>
          <Button
            variant="outline"
            className="h-9 w-full border-emerald-500/30 font-bold hover:bg-emerald-500/10"
          >
            {t.productDetail.viewDetails}
          </Button>
        </Link>
        <Button
          className="btn-premium h-10 w-full bg-green-600 text-white hover:bg-green-700"
          disabled={!product.inStock}
          onClick={() => openWhatsApp(buildProductOrderMessage(name, 1, locale))}
        >
          <MessageCircle className="me-2" /> {t.orderWhatsApp}
        </Button>
      </div>
    </article>
  );
}
