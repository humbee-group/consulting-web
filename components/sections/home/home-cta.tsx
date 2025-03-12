"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
    <section className="bg-white relative pt-24 pb-48 sm:pb-64 py-8 sm:py-16 overflow-x-hidden">
      
      {/* ✅ Gradient en haut */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#F4F4F5] to-white opacity-100"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* ✅ Sous-titre animé (ajout d'une z-index pour éviter qu'il passe sous le gradient) */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm md:text-base uppercase font-bold text-foreground mb-2 relative z-20"
        >
          Votre projet
        </motion.p>

        {/* ✅ Titre principal animé avec gradient (ajout d'une z-index) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-card-foreground bg-clip-text text-transparent relative z-20"
        >
          Passons à l’action.
        </motion.h2>

        {/* ✅ Texte + Bouton aligné en ligne sur desktop, centré en mobile */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between relative z-20">
          <p className="text-lg text-gray-700 max-w-2xl">
            Vous avez un projet, une idée ? <br/>
            Construisons ensemble la solution qui vous correspond.
          </p>
          <div className="mt-6 md:mt-0 md:ml-6">
            <Button variant="default" size="lg" className="bg-foreground text-white hover:bg-primary/90">
              Discutons de votre projet
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}