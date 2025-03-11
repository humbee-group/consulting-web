"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Search, Image as ImageIcon, PenTool, Palette, Layers, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    title: "Analyse & Stratégie",
    description: "Étude approfondie du marché, des tendances et des attentes d’une nouvelle génération pour repenser les codes du luxe.",
    icon: Search,
  },
  {
    title: "Territoire Visuel",
    description: "Définition d’un univers graphique unique, moderne et fédérateur à travers des moodboards et inspirations.",
    icon: ImageIcon,
  },
  {
    title: "Création du Logo",
    description: "Conception d’un emblème fort et distinctif qui incarne l’essence de Leandre Lerouge.",
    icon: PenTool,
  },
  {
    title: "Système Graphique",
    description: "Élaboration d’un langage visuel complet : couleurs, typographies et éléments graphiques pour une identité cohérente.",
    icon: Palette,
  },
  {
    title: "Expérience Visuelle",
    description: "Déclinaison de l’univers sur tous les supports : digital, packaging, retail, print, pour une immersion totale.",
    icon: Layers,
  },
  {
    title: "Manuel de Marque",
    description: "Création d’un document de référence structurant l’univers de Leandre Lerouge et guidant son déploiement.",
    icon: BookOpen,
  }
];

export function IdentityVisual() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      {/* Dégradé en haut */}
      <div className="absolute top-0 left-0 w-full h-2/4 bg-gradient-to-b from-white to-[#F4F4F5] opacity-100" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
        >
          Construire une identité forte
        </motion.p>

        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold text-foreground -ml-1"
        >
          Identité visuelle.
        </motion.h2>

        {/* Image + Texte */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Image
              src="/projects/leandre-lerouge/presentation.webp"
              alt="Processus de création d'identité"
              className="w-full rounded-sm shadow-none"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="text-gray-700"
          >
            <p className="text-md">
              S’imposer dans un marché du luxe saturé, dominé par les grandes maisons internationales, nécessitait bien plus qu’une simple charte graphique. 
              Leandre Lerouge devait incarner un univers, une vision, une rupture. Loin des codes figés du luxe traditionnel, la marque a été pensée comme 
              une nouvelle expression du prestige, où modernité, unisexe et influence streetwear redéfinissent les standards.
            </p>
            <p className="text-md mt-4">
              L’objectif n’était pas seulement de créer un logo ou une palette de couleurs, mais d’imaginer un véritable écosystème visuel fédérateur, 
              capable de parler à une génération qui ne se reconnaît plus dans le luxe actuel. Leandre Lerouge ne suit pas les règles, il les réécrit.
            </p>
          </motion.div>
        </div>
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
                index === 0 ? "ml-4 lg:ml-[calc((104vw-1280px)/2.2)]" : "ml-6"
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
            <Button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({ left: -490, behavior: "smooth" });
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
                  carouselRef.current.scrollBy({ left: 490, behavior: "smooth" });
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

export default IdentityVisual;