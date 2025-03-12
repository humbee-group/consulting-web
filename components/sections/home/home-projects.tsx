"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Bordeaux Mérignac Volley",
    description:
      "Nous accompagnons le club dans sa transition vers la ligue professionnelle en structurant son image et en renforçant son impact digital.",
    image: "/assets/clients-03.webp",
    link: "/projets/bordeaux-merignac-volley",
    tags: ["Identité de marque", "Développement web", "Marketing digital"],
  },
  {
    name: "Leandre Lerouge",
    description:
      "Une marque pensée pour captiver et innover, alliant une identité forte à une stratégie ambitieuse pour s’imposer sur son marché du luxe.",
    image: "/assets/clients-02.webp",
    link: "/projets/leandre-lerouge",
    tags: ["Développement web", "Développement d'app", "Outils de vente"],
  },
  {
    name: "Noir & Blanc",
    description:
      "Une identité visuelle percutante et une présence digitale immersive pour ancrer Noir & Blanc comme une référence de la scène underground techno.",
    image: "/assets/clients-01.webp",
    link: "/projets/noir-et-blanc",
    tags: ["Identité de marque", "Marketing digital", "Publicité digitale"],
  },
];

export default function HomeClients() {
  return (
    <section className="bg-white relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      {/* Gradient en haut */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#F4F4F5] to-white opacity-100" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase text-foreground font-bold mb-2"
        >
          Nos réalisations
        </motion.p>

        {/* Titre animé avec gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent -ml-1"
        >
          De plus près.
        </motion.h2>
      </div>

      {/* Grid des projets */}
      <div className="mt-12 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto px-4 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-start mb-8">
            {/* ✅ Image redimensionnée en 16:9 (640x360) */}
            <div className="w-full aspect-[16/9] relative">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>

            {/* Nom du projet */}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              {project.name}
            </h3>

            {/* Pastilles sous le nom du client */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4">{project.description}</p>

            {/* Bouton en savoir plus sous la description */}
            <div className="mt-6">
              <Button variant="outline" className="border border-black text-black bg-transparent hover:bg-foreground hover:text-background transition-colors" asChild>
                <Link href={project.link}>Voir le projet</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}