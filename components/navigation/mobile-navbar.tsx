"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileNavbar({ isMenuOpen, toggleMenu }: MobileNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 640);
      setIsVisible(scrollPosition > 640);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navState = isMenuOpen ? 3 : isScrolled ? 2 : 1;
  const containerBg = navState === 1 ? "bg-transparent" : "bg-white";

  const logoSrc = navState === 1 ? "/assets/logos/logo-small-dark.webp" : "/assets/logos/logo-small-light.webp";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={clsx("fixed top-0 left-0 w-full z-50 transition-colors duration-300", containerBg)}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between border-b border-gray-300">

            <div className="flex items-center">
              <Link href="/">
                <Image src={logoSrc} alt="Logo" width={32} height={32} className="object-contain" />
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <button className="focus:outline-none" aria-label="Menu" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className={clsx("h-6 w-6", navState === 1 ? "text-white" : "text-foreground")} />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}