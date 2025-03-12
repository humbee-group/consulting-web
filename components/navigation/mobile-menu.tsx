"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const projects = [
  {
    name: "Bordeaux Mérignac Volley",
    image: "/assets/clients-03.webp",
    link: "/projets/bordeaux-merignac-volley",
  },
  {
    name: "Leandre Lerouge",
    image: "/assets/clients-02.webp",
    link: "/projets/leandre-lerouge",
  },
  {
    name: "Noir & Blanc",
    image: "/assets/clients-01.webp",
    link: "/projets/noir-et-blanc",
  },
];

export default function MobileMenu({ isMenuOpen, toggleMenu }: MobileMenuProps) {
  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Nettoyage au démontage
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen pt-24 bg-white z-50 flex flex-col">
      
      {/* ✅ Logo */}
      <div className="absolute top-5 left-4">
        <Link href="/" onClick={toggleMenu}>
          <Image
            src="/assets/logos/logo-full-light.webp"
            alt="Logo"
            width={96}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>

      {/* ✅ Bouton de fermeture */}
      <button onClick={toggleMenu} className="absolute top-5 right-4 focus:outline-none" aria-label="Fermer le menu">
        <X className="h-6 w-6 text-black" />
      </button>

      {/* ✅ Sous-titre et Titre */}
      <div className="px-6 pt-20 text-left">
        {/* Sous-titre */}
        <motion.p
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nos réalisations
        </motion.p>

        {/* Titre */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          De plus près
        </motion.h2>
      </div>

      {/* ✅ Présentation des projets */}
      <div className="flex-grow flex flex-col items-start px-6 mt-8 space-y-6">
        <div className="w-full flex flex-col space-y-4">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} onClick={toggleMenu} className="group block">
              <div className="relative w-full h-32 rounded-lg overflow-hidden shadow-md transition-transform transform group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{project.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}