"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import MobileMenu from "../../navigation/mobile-menu";
import DrawerContact from "@/components/drawers/drawer-contact";
import { DesktopMenu } from "@/components/navigation/desktop-menu";

export default function HomeHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-0">
      {/* ✅ Dégradé en haut */}
      <div className="absolute top-0 left-0 w-full h-4/5 bg-gradient-to-b from-primary to-transparent opacity-70" />

      {/* ✅ Image de fond optimisée */}
      <Image
        src="/assets/home-hero.webp"
        alt="Fond Hero"
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
      />

      {/* ✅ Vidéo en fond chargée après LCP */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/home-hero.webp"
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10 opacity-0 transition-opacity duration-700"
        onLoadedData={(e) => e.currentTarget.classList.add("opacity-100")}
      >
        <source src="/assets/home-hero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Navbar statique optimisée */}
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
                style={{ width: "auto", height: "auto" }}
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
      
    </section>
  );
}