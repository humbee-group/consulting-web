// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./../globals.css";
import BackToTopButton from "@/components/layout/backtotop";

const primary = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-primary",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Humbee Consulting | Agence de Communication à Bordeaux – Stratégie & Digital",
  description:
    "Humbee Consulting, votre agence de communication à Bordeaux, accompagne startups & entreprises avec des stratégies sur mesure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${primary.variable}`}>
      <head>
        {/* ✅ Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />

        {/* ✅ Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Open Graph & Twitter Cards */}
        <meta property="og:title" content="Humbee Consulting | Agence de Communication à Bordeaux" />
        <meta property="og:description" content="Nous accompagnons startups & entreprises avec des stratégies digitales sur mesure." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://humbee.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Humbee Consulting | Agence de Communication à Bordeaux" />
        <meta name="twitter:description" content="Stratégies digitales sur mesure pour startups et entreprises." />
        <meta name="twitter:image" content="/assets/og-image.jpg" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://humbee.consulting" />

        {/* ✅ Font Preload */}
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}