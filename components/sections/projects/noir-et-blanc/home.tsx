"use client";

import { useState } from "react";
import MobileMenu from "../../../navigation/mobile-menu";
import DrawerContact from "@/components/drawers/drawer-contact";
import { DesktopMenu } from "@/components/navigation/desktop-menu";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function NBHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Vidéo en fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/noir-et-blanc.mp4" type="video/mp4" />
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
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </section>
  );
}