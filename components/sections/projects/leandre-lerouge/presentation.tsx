"use client";

import { motion } from "framer-motion";
import { Target, AlertTriangle, CheckCircle } from "lucide-react";

const projectDetails = {
  name: "Leandre Lerouge",
  objective: "Créer une marque distinctive qui s'impose sur son marché.",
  challenge:
    "Développer une identité forte tout en restant accessible à un large public.",
  result:
    "Une image de marque impactante, un site performant et une stratégie digitale cohérente.",
};

const sections = [
  {
    title: "Objectif",
    text: projectDetails.objective,
    icon: Target,
  },
  {
    title: "Challenge",
    text: projectDetails.challenge,
    icon: AlertTriangle,
  },
  {
    title: "Résultat",
    text: projectDetails.result,
    icon: CheckCircle,
  },
];

export default function ProjectPresentation() {
  return (
    <section id="presentation" className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-2"
        >
          Le renouveau du luxe
        </motion.p>

        {/* Titre principal animé */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold text-foreground"
        >
          {projectDetails.name}
        </motion.h2>
      </div>

      {/* Contenu détaillé en trois points */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4 md:px-8">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-white p-6 shadow-none rounded-sm flex flex-col items-start"
            >
              {/* Icône centrée à gauche */}
              <IconComponent className="w-8 h-8 text-foreground mb-4" />

              {/* Titre */}
              <h3 className="text-xl font-semibold text-foreground mb-2">{section.title}</h3>

              {/* Texte */}
              <p className="text-muted-foreground">{section.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}