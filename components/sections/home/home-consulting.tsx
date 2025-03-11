"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MobileMenu from "../../navigation/mobile-menu";
import DrawerContact from "@/components/drawers/drawer-contact";
import { DesktopMenu } from "@/components/navigation/desktop-menu";

export default function HomeHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const words = ["projets", "idées", "défis"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-0">
      {/* Dégradé en haut */}
      <div className="absolute top-0 left-0 w-full h-4/5 bg-gradient-to-b from-primary to-transparent opacity-70" />

      {/* Vidéo en fond avec décalage vers la droite */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[70%] md:object-center -z-10"
      >
        <source src="/assets/home-hero.mp4" type="video/mp4" />
      </video>

      {/* Navbar statique */}
      <div className="absolute top-2 left-0 right-0 bg-transparent z-50">
        <div className="mx-auto max-w-7xl pr-4 h-12 flex justify-between items-center pl-4">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/logo-small-dark.webp"
                alt="Logo"
                width={32}
                height={32}
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
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6 text-primary text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Contenu principal (BIEN ALIGNÉ À GAUCHE) */}
      <div className="absolute left-6 md:left-24 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-start">

        {/* Animation du titre (apparition du bas vers le haut) */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Notre ambition
          <br />
          au service de vos <span className="text-white">{words[currentWordIndex]}</span>.
        </motion.h1>

        {/* Animation de la description (apparition du bas vers le haut) */}
        <motion.p
          className="mt-6 text-md font-light text-primary max-w-sm md:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Basé à Bordeaux, nous aidons les entreprises à se démarquer en construisant des expériences uniques, adaptées aux enjeux de notre ère numérique. Grâce à une approche pragmatique et orientée résultats, nous transformons vos idées en leviers de croissance.
        </motion.p>

        {/* Animation du bouton (fade-in avec léger zoom) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Button className="mt-6 border border-primary text-primary bg-transparent hover:bg-primary hover:text-background transition-colors">
            <Link href="#expertise">Découvrir notre expertise</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}