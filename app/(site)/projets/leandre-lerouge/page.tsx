'use client';

import Home from "@/components/sections/projects/leandre-lerouge/home";
import IdentityVisual from "@/components/sections/projects/leandre-lerouge/identity";
import ProjectPresentation from "@/components/sections/projects/leandre-lerouge/presentation";


export default function Page() {
  return (
    <>
      <div data-vaul-drawer-wrapper="">
        <Home />
        <ProjectPresentation />
        <IdentityVisual />
      </div>
    </>
  );
}