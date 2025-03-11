// .components/layout/footer.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background text-primary py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec le copyright */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo-small-light.webp"
            alt="Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-sm">© {new Date().getFullYear()} Tous droits réservés.</span>
        </div>

        {/* Made with love */}
        <div className="text-sm flex items-center space-x-2">
          Made with
          <Heart className="w-4 h-4 mx-1 text-red-500" />
          by{" "}
          <a
            href="https://humbee.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-foreground ml-1"
          >
            Humbee
          </a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
