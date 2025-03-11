"use client";

import { useState } from "react";
import MobileNavbar from "./mobile-navbar";
import MobileMenu from "./mobile-menu";

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <MobileNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}