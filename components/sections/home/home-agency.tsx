"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeAgency() {
  return (
    <>
      {/* ✅ Section Humbee Agency */}
      <section className="bg-white relative pt-32 sm:pt-48 py-8 sm:py-16 overflow-hidden min-h-screen">
        
        {/* ✅ Image en background à droite en mode bureau */}
        <div className="absolute inset-0 right-0 flex justify-end">
          <div
            className="hidden md:block w-[50vw] h-full"
            style={{
              backgroundImage: "url('/assets/humbee-agency.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>

        {/* ✅ Contenu centré verticalement en mode bureau */}
        <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:h-full text-center md:text-left">
          
          {/* ✅ Texte centré verticalement */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start z-10">
            
            {/* ✅ Sous-titre spécifique à Humbee Agency */}
            <motion.p
              className="text-xl font-semibold bg-gradient-to-r from-primary to-[#007AFF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Humbee Agency
            </motion.p>

            {/* ✅ Titre impactant qui apparaît mot par mot */}
            <motion.h2 className="text-5xl md:text-7xl font-bold text-foreground mt-2 text-center md:text-left">
              {["Simple.", "Rapide.", "Efficace."].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        </div>

        {/* ✅ Image en dessous en mode mobile (centrée à droite) */}
        <div className="relative mt-12 w-full flex justify-end md:hidden">
          <div className="w-3/4 sm:w-2/3">
            <Image
              src="/assets/humbee-agency.jpg"
              alt="Humbee Agency"
              width={800}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ✅ Nouvelle section de présentation */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
          
          {/* ✅ Animation progressive du texte */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Avec <span className="font-semibold text-primary">Humbee Agency</span>, bénéficiez d'une solution 
            simple et efficace pour gérer la communication de votre entreprise.
            Contrairement à <span className="font-semibold text-secondary">Humbee Consulting</span>, 
            ici, pas de sur-mesure : vous avez accès à une **application innovante** qui centralise 
            tous vos besoins en communication. Une approche moderne, **inspirée des néo-banques**.
          </motion.p>
          
          {/* ✅ Call-to-action en bas */}
          <div className="mt-8">
            <motion.a
              href="#"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold text-lg rounded-md shadow-md hover:bg-primary/90 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Découvrir Humbee Agency
            </motion.a>
          </div>

        </div>
      </section>
    </>
  );
}