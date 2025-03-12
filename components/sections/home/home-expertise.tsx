"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const menu = [
  {
    title1: "Imaginer",
    title2: "un branding fort",
    description: "Logo, charte graphique, branding : une identité en accord avec vos valeurs.",
    image: "/assets/highlight-01.webp",
    type: "Identité de marque",
  },
  {
    title1: "Capturer",
    title2: "des visuels engageants",
    description: "Photos, vidéos, contenus créatifs : un storytelling qui valorise votre image de marque.",
    image: "/assets/highlight-02.webp",
    type: "Création de contenu",
  },
  {
    title1: "Concevoir",
    title2: "un site web performant",
    description: "Site vitrine ou e-commerce : une plateforme ergonomique, rapide et optimisée pour la conversion.",
    image: "/assets/highlight-03.webp",
    type: "Développement web",
  },
  {
    title1: "Déployer",
    title2: "une App intuitive",
    description: "Apps mobiles sur-mesure : UX fluide, performance et fonctionnalités adaptées à vos besoins.",
    image: "/assets/highlight-04.webp",
    type: "Développement d'application",
  },
  {
    title1: "Construire",
    title2: "des supports percutants",
    description: "Pitch decks, dossiers investisseurs, plaquettes commerciales : transformez vos idées en outils de conversion.",
    image: "/assets/highlight-05.webp",
    type: "Outils de vente",
  },
  {
    title1: "Gérer",
    title2: "un social media performant",
    description: "Social media sur-mesure : calendrier collaboratif, contenus premium et gestion dédiée.",
    image: "/assets/highlight-06.webp",
    type: "Marketing digital",
  },
  {
    title1: "Lancer",
    title2: "des publicités efficaces",
    description: "Création et gestion de campagnes Meta Ads & Google Ads pour maximiser votre visibilité et votre ROI.",
    image: "/assets/highlight-07.webp",
    type: "Publicité digitale",
  },
];

export function HomeHighlights() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const items = [...carouselRef.current.children] as HTMLElement[];
      let closestIndex = 0;
      let minDiff = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const diff = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="expertise" className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
        >
          Notre expertise
        </motion.p>

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
        <div ref={carouselRef} className="flex overflow-x-scroll no-scrollbar touch-pan-x">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white min-w-[90vw] h-[90vw] sm:min-w-[320px] sm:h-[220px] md:min-w-[400px] md:h-[260px] lg:min-w-[70vw] lg:h-[38vw] flex-shrink-0 overflow-hidden rounded-sm shadow-sm ${
                index === 0 ? "ml-4 lg:ml-[calc((104vw-1150px)/2.2)]" : "ml-6"
              } ${index === menu.length - 1 ? "mr-4" : ""}`}
            >
              {/* ✅ Animations progressives */}
              <motion.div
                className="absolute top-6 left-8 w-full max-w-sm sm:max-w-md z-10 text-left"
              >
                {/* ✅ Pastille "pop rapide" */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={activeIndex === index ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-sm inline-block mt-2"
                >
                  {item.type}
                </motion.div>

                {/* ✅ Titre "slide après la pastille" */}
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-semibold text-2xl sm:text-4xl text-foreground mt-4"
                >
                  {item.title1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-semibold text-2xl sm:text-4xl text-foreground"
                >
                  {item.title2}
                </motion.p>

                {/* ✅ Description "slide en dernier" */}
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-1 text-base text-gray-600"
                >
                  {item.description}
                </motion.p>
              </motion.div>

              {/* ✅ Image centrée en bas */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
                <Image
                  src={item.image}
                  alt={item.title1}
                  width={640}
                  height={360}
                  className="w-full object-cover"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Boutons de navigation */}
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

export default HomeHighlights;