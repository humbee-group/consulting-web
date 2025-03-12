"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Target, Users, Sparkles, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Approche 360°",
    description: "Nous maîtrisons toute la chaîne, de la stratégie à l’exécution, pour des résultats optimaux.",
    icon: Briefcase,
  },
  {
    title: "Solutions sur mesure",
    description: "Chaque projet est pensé en fonction de vos objectifs spécifiques, sans solutions préformatées.",
    icon: Target,
  },
  {
    title: "Expertise multi-sectorielle",
    description: "Nous accompagnons startups et entreprises établies en nous adaptant à chaque marché.",
    icon: Users,
  },
  {
    title: "Précision et innovation",
    description: "Un équilibre parfait entre créativité et data-driven strategy.",
    icon: Sparkles,
  },
  {
    title: "Relation client privilégiée",
    description: "Un interlocuteur dédié, une gestion fluide et une transparence totale.",
    icon: Handshake,
  },
];

export function HomeEngagement() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      {/* Dégradé en haut */}
      <div className="absolute top-0 left-0 w-full h-2/4 bg-gradient-to-b from-white to-[#F4F4F5] opacity-100" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
        >
          Notre engagement
        </motion.p>

        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold text-foreground -ml-1"
        >
          Pensé pour vous.
        </motion.h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-12">
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar touch-pan-x"
          drag="x"
          dragConstraints={{ right: 0, left: -((features.length - 1) * 350) }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white w-[300px] h-[260px] flex-shrink-0 overflow-hidden shadow-none rounded-sm p-6 relative ${
                index === 0 ? "ml-4 lg:ml-[calc((104vw-1150px)/2.2)]" : "ml-6"
              } ${index === features.length - 1 ? "mr-4" : ""}`}
            >
              {/* Icône */}
              <feature.icon className="w-10 h-10 text-foreground" />

              {/* Texte */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons de navigation */}
        <div className="flex justify-end mt-6 pr-4 relative z-10">
          <div className="flex space-x-2">
            <Button onClick={() => carouselRef.current?.scrollBy({ left: -470, behavior: "smooth" })} variant="ghost" size="icon" className="border border-black text-black bg-transparent hover:bg-black hover:text-background transition-colors" aria-label="Défiler à gauche">
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button onClick={() => carouselRef.current?.scrollBy({ left: 470, behavior: "smooth" })} variant="ghost" size="icon" className="border border-black text-black bg-transparent hover:bg-black hover:text-background transition-colors" aria-label="Défiler à droite">
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEngagement;