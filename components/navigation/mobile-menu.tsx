"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({ isMenuOpen, toggleMenu }: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
      <div className="absolute top-5 left-4">
        <Link href="/" onClick={toggleMenu}>
          <Image
            src="/logo-small-light.webp"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>
      <button onClick={toggleMenu} className="absolute top-5 right-4 focus:outline-none" aria-label="Close menu">
        <X className="h-6 w-6 text-black" />
      </button>

      <div className="flex-grow flex flex-col items-center justify-center space-y-4">
        <Link href="/" onClick={toggleMenu}>
          <span className="text-xl font-semibold">Accueil</span>
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          <span className="text-xl font-semibold">À propos</span>
        </Link>
        <Link href="/contact" onClick={toggleMenu}>
          <span className="text-xl font-semibold">Contact</span>
        </Link>
      </div>
    </div>
  );
}