"use client";

import { useState } from "react";
import MobileMenu from "../../../navigation/mobile-menu";
import DrawerContact from "@/components/drawers/drawer-contact";
import { DesktopMenu } from "@/components/navigation/desktop-menu";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* ✅ Image de fond pour éviter un écran noir en attendant la vidéo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/projects/leandre-lerouge/lerouge-hero.webp')" }}
      />

      {/* ✅ Vidéo en fond optimisée */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/projects/leandre-lerouge/lerouge-hero.webp"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/projects/leandre-lerouge/hero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Navbar optimisée */}
      <div className="absolute top-2 left-0 right-0 bg-transparent z-50">
        <div className="mx-auto max-w-7xl pr-4 h-12 flex justify-between items-center pl-4">
          <div className="flex items-center space-x-2">
            <Link href="/" aria-label="Retour à l'accueil">
              <Image
                src="/assets/logos/logo-small-dark.webp"
                alt="Logo"
                width={32}
                height={32}
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
              aria-label="Ouvrir le menu"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* ✅ Conteneur Bouton + Chevron optimisé */}
      <div className="absolute bottom-10 flex flex-col items-center space-y-4">
        
        {/* ✅ Bouton animé (sans impacter le LCP) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button 
            asChild 
            variant="outline" 
            className="text-white bg-transparent border-white hover:bg-white hover:text-black transition-colors"
          >
            <Link href="#presentation" aria-label="Découvrir le projet">
              <span className="sr-only">Aller à la section présentation</span>
              Découvrir le projet
            </Link>
          </Button>
        </motion.div>

        {/* ✅ Chevron animé avec meilleure transition */}
        <motion.div
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white opacity-80" />
        </motion.div>
      </div>

    </section>
  );
}