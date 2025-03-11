"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function DesktopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Ajoute ici les éléments du menu lorsque nécessaire */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}