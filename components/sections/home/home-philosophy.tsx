"use client";

import { Ear, Lightbulb, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Écouter",
    text: "Nous prenons le temps d’échanger pour saisir précisément vos enjeux et identifier clairement vos besoins.",
    icon: Ear,
  },
  {
    label: "Comprendre",
    text: "Nous analysons vos besoins en profondeur pour proposer des solutions pertinentes, adaptées à votre réalité.",
    icon: Lightbulb,
  },
  {
    label: "Accompagner",
    text: "Nous restons présents à vos côtés pour mettre en œuvre les solutions concrètes qui assurent votre croissance.",
    icon: Handshake,
  },
];

export default function HomeAbout() {
  return (
    <section className="relative pt-24 py-8 sm:py-16 overflow-x-hidden">
      {/* Gradient en fond */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-[#F4F4F5] opacity-100" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Texte introductif avec animation vers le bas */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-sm md:text-base font-secondary uppercase text-foreground font-bold mb-2"
        >
          Notre philosophie
        </motion.p>

        {/* Titre principal avec gradient et animation vers le haut */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent -ml-1"
        >
          Ce qui compte.
        </motion.h2>

        {/* Container des cartes */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="bg-white p-6 shadow-none rounded-sm relative"
              >
                <IconComponent className="w-8 h-8 text-foreground mb-4" />
                <div className="text-xl font-bold text-foreground mt-6">
                  {card.label}
                </div>
                <p className="mt-2 text-muted-foreground">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}