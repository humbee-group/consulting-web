'use client';

import HomeAbout from "@/components/sections/home/home-philosophy";
import HomeHero from "@/components/sections/home/home-hero";
import HomeHighlights from "@/components/sections/home/home-expertise";
import HomeClients from "@/components/sections/home/home-projects";
import HomeEngagement from "@/components/sections/home/home-engagement";
import HomeCTA from "@/components/sections/home/home-cta";

export default function Page() {
  return (
    <>
      <div data-vaul-drawer-wrapper="">
        <HomeHero />
        <HomeAbout />
        <HomeHighlights/>
        <HomeClients />
        <HomeEngagement />
        <HomeCTA />
      </div>
    </>
  );
}