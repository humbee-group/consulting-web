"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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

      {/* ✅ Vidéo de fond */}
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

      {/* ✅ Navbar */}
      <div className="absolute top-2 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl pr-4 h-12 flex justify-between items-center pl-4">
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/assets/logos/logo-full-dark.webp"
              alt="Logo Humbee"
              width={96}
              height={48}
              className="object-contain"
              quality={100}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <div className="hidden md:block">
            <DesktopMenu />
          </div>
          <div className="md:hidden flex items-center space-x-3">
            <DrawerContact />
            <button className="focus:outline-none" aria-label="Ouvrir le menu" onClick={toggleMenu}>
              <Menu className="h-6 w-6 text-background" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* ✅ Contenu principal avec animations */}
      <div className="absolute left-6 md:left-24 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-start">
        
        {/* ✅ Animation du Titre */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Notre ambition <br /> au service de vos{" "}
          <span className="text-white">projets</span>.
        </motion.h1>

        <motion.p
          className="mt-6 text-md font-light text-primary max-w-sm md:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Basé à Bordeaux, nous aidons les entreprises à se démarquer en construisant des expériences uniques, adaptées aux enjeux de notre ère numérique.
        </motion.p>

        {/* ✅ Animation du Bouton */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Button className="mt-6 border border-primary text-primary bg-transparent hover:bg-primary hover:text-background transition-colors" asChild>
            <Link href="#expertise" aria-label="Découvrir notre expertise">
              Découvrir notre expertise
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}