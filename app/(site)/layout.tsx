// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./../globals.css";
import BackToTopButton from "@/components/layout/backtotop";

const primary = localFont({
  src: "./../fonts/primary.woff2",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${primary.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}