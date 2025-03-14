"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type DesktopNavbarProps = {
  children?: React.ReactNode;
};

export function DesktopNavbar({ children }: DesktopNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 15);
      setIsVisible(scrollY > 500);
    };

    // Vérification initiale au cas où l'utilisateur ne commence pas en haut de la page.
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white  border-b border-gray-300" : "bg-gra-100"
      )}
    >
      <div className="px-4 h-16 flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-2">
          <Link href="/">
            <Image src="/assets/logos/logo-small-light.webp"
              alt="Logo"
              className="h-6 w-auto"
              width={32}
              height={32}
            />
          </Link>
        </div>
        {/* Affichage du contenu (par exemple, le menu) */}
        {children}
      </div>
    </nav>
  );
}