"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const menu = [
  {
    title: "Une image de marque forte et impactante",
    description:
      "Logo, charte graphique, branding : créez une identité unique et mémorable, en accord avec vos valeurs.",
    image: "/assets/highlight-01.webp",
  },
  {
    title: "Des visuels qui captivent et engagent",
    description:
      "Photos, vidéos, contenus créatifs : valorisez votre marque avec un storytelling percutant.",
    image: "/assets/highlight-02.webp",
  },
  {
    title: "Un site web performant et sur-mesure",
    description:
      "Site vitrine ou e-commerce : une plateforme ergonomique, rapide et optimisée pour la conversion.",
    image: "/assets/highlight-03.webp",
  },
  {
    title: "Une application intuitive et puissante",
    description:
      "Apps mobiles sur-mesure : UX fluide, performance et fonctionnalités adaptées à vos besoins.",
    image: "/assets/highlight-04.webp",
  },
  {
    title: "Des supports commerciaux percutants",
    description:
      "Pitch decks, dossiers investisseurs, plaquettes commerciales : transformez vos idées en outils de conversion.",
    image: "/assets/highlight-05.webp",
  },
  {
    title: "Une présence digitale performante",
    description:
      "Social media sur-mesure : calendrier collaboratif, contenus premium et gestion dédiée.",
    image: "/assets/highlight-06.webp",
  },
  {
    title: "Des publicités optimisées et efficaces",
    description:
      "Création et gestion de campagnes Meta Ads & Google Ads pour maximiser votre visibilité et votre ROI.",
    image: "/assets/highlight-07.webp",
  },
];

export function HomeHighlights() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="expertise"  className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
        >
          Notre expertise
        </motion.p>

        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold text-foreground -ml-1"
        >
          Nos points forts.
        </motion.h2>
      </div>

      <div className="relative mt-12">
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar touch-pan-x"
          drag="x"
          dragConstraints={{ right: 0, left: -((menu.length - 1) * 320) }}
        >
          {menu.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white min-w-[90vw] h-[100vw] sm:min-w-[320px] sm:h-[220px] md:min-w-[400px] md:h-[260px] lg:min-w-[70vw] lg:h-[38vw] flex-shrink-0 overflow-hidden shadow-none rounded-sm relative ${
                index === 0 ? "ml-4 lg:ml-[calc((104vw-1280px)/2.2)]" : "ml-6"
              } ${index === menu.length - 1 ? "mr-4" : ""}`}
            >
              {/* Titre et description */}
              <div className="absolute top-8 left-8 w-full max-w-xs z-10 text-left">
                <p className="font-semibold text-2xl text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-base text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons de navigation */}
        <div className="flex justify-end mt-6 pr-4 relative z-10">
          <div className="flex space-x-2">
            <Button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: -490,
                    behavior: "smooth",
                  });
                }
              }}
              variant="ghost"
              size="icon"
              className="bg-gray-200 rounded-sm hover:bg-gray-300"
            >
              <ChevronLeft className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </Button>
            <Button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: 490,
                    behavior: "smooth",
                  });
                }
              }}
              variant="ghost"
              size="icon"
              className="bg-gray-200 rounded-sm hover:bg-gray-300"
            >
              <ChevronRight className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHighlights;