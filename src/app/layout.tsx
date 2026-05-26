import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";
import { cookies } from "next/headers";
import type { Locale } from "@/lib/i18n/translations";

const cairo = Cairo({
  variable: "--font-sans",
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SereneMeds - Premium Pharmacy",
  description:
    "Premium pharmacy website with WhatsApp ordering, Arabic/English support, dark mode, and fast delivery.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("serene-meds-locale")?.value;
  const initialLocale: Locale = cookieLocale === "ar" ? "ar" : "en";
  const dir = initialLocale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={initialLocale}
      dir={dir}
      className={`${cairo.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AppProviders initialLocale={initialLocale}>{children}</AppProviders>
      </body>
    </html>
  );
}
