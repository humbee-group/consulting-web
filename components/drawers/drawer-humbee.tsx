"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { LayoutGrid } from "lucide-react";
import clsx from "clsx";

const CenteredContent = () => (
  <div className="max-w-md mx-auto">
    <Drawer.Title className="font-medium mb-4">Menu utilisateur</Drawer.Title>
    <ul>
      <li>
        <a href="#profile" className="underline">Profil</a>
      </li>
      <li>
        <a href="#settings" className="underline">Paramètres</a>
      </li>
      <li>
        <a href="#logout" className="underline">Déconnexion</a>
      </li>
    </ul>
  </div>
);

const DrawerContent = () => (
  <Drawer.Content
    data-testid="content"
    className={clsx(
      "bg-zinc-100 flex fixed p-6",
      "rounded-t-[10px] flex-col h-[30%] bottom-0 left-0 right-0"
    )}
  >
    <div className="w-full h-full flex flex-col gap-8">
      <div className="rounded-full bg-primary mx-auto w-12 h-1.5" />
      <div className="grid place-content-center w-full h-full">
        <CenteredContent />
      </div>
    </div>
  </Drawer.Content>
);

export default function DrawerHumbee({
  onDrawerToggle,
}: {
  onDrawerToggle?: (isOpen: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root
      shouldScaleBackground
      direction="bottom"
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        onDrawerToggle?.(open);
      }}
    >
      <Drawer.Trigger asChild>
        <button
          className="absolute top-3 right-14 focus:outline-none"
          aria-label="Menu"
        >
          <LayoutGrid className="h-6 w-6 text-black" />
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerContent />
      </Drawer.Portal>
    </Drawer.Root>
  );
}