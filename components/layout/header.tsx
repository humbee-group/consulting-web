"use client";

import NavDesktop from "@/components/navigation/desktop-nav";
import NavMobile from "@/components/navigation/mobile-nav";

export default function Header() {
  return (
    <header>
      {/* Visible uniquement sur les écrans md et plus */}
      <div className="hidden md:block">
        <NavDesktop />
      </div>
      
      {/* Visible uniquement sur les écrans plus petits que md */}
      <div className="block md:hidden">
        <NavMobile />
      </div>
    </header>
  );
}