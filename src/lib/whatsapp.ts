import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function buildProductOrderMessage(
  productName: string,
  quantity: number = 1,
  locale: "en" | "ar" = "en"
): string {
  if (locale === "ar") {
    return `مرحباً، أريد طلب:\nالمنتج: ${productName}\nالكمية: ${quantity}`;
  }
  return `Hello, I want to order:\nProduct: ${productName}\nQuantity: ${quantity}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
