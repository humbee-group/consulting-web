"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "../../navigation/mobile-menu";
import DrawerContact from "@/components/drawers/drawer-contact";
import { DesktopMenu } from "@/components/navigation/desktop-menu";

const words = ["projets", "idées", "défis"];

export default function HomeHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-0">
      {/* ✅ Dégradé en haut */}
      <div className="absolute top-0 left-0 w-full h-4/5 bg-gradient-to-b from-primary to-transparent opacity-70" />

      {/* ✅ Image de fond pour éviter un écran blanc */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/home-hero-poster.webp')" }}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/home-hero.webp"
        className="absolute top-0 left-0 w-full h-full object-cover object-[70%] md:object-center -z-10"
      >
        <source src="/assets/home-hero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Navbar statique */}
      <div className="absolute top-2 left-0 right-0 bg-transparent z-50">
        <div className="mx-auto max-w-7xl pr-4 h-12 flex justify-between items-center pl-4">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/assets/logos/logo-full-dark.webp"
                alt="Logo Humbee"
                width={96}
                height={48}
                priority
                className="object-contain"
              />
            </Link>
            <div className="hidden md:block pl-4">
              <DesktopMenu />
            </div>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <DrawerContact />
            <button
              className="focus:outline-none"
              aria-label="Ouvrir le menu de navigation"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6 text-primary text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* ✅ Contenu principal immédiatement affiché */}
      <div className="absolute left-6 md:left-24 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-start">
        {/* ✅ Texte immédiatement visible */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Notre ambition
          <br />
          au service de vos{" "}
          <span className="text-white">{words[currentWordIndex]}</span>.
        </h1>

        {/* ✅ Description directement affichée */}
        <p className="mt-6 text-md font-light text-primary max-w-sm md:max-w-lg">
          Basé à Bordeaux, nous aidons les entreprises à se démarquer en construisant des expériences uniques, adaptées aux enjeux de notre ère numérique. Grâce à une approche pragmatique et orientée résultats, nous transformons vos idées en leviers de croissance.
        </p>

        {/* ✅ Bouton avec accessibilité améliorée */}
        <Button
          className="mt-6 border border-primary text-primary bg-transparent hover:bg-primary hover:text-background transition-colors"
          asChild
        >
          <Link href="#expertise" aria-label="Découvrir notre expertise">
            Découvrir notre expertise
          </Link>
        </Button>
      </div>
    </section>
  );
}