"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isZoomedOut, setIsZoomedOut] = useState<boolean>(false);

  // Nouvel état pour stocker l'échelle de départ (mobile vs desktop)
  const [initialScale, setInitialScale] = useState<number>(1.6);

  // Au montage + quand on redimensionne, on choisit 1.6 (mobile) ou 1.75 (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setInitialScale(1.75);
      } else {
        setInitialScale(1.6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden"; // Bloque le scroll pendant l'animation
    } else {
      document.body.style.overflow = "auto"; // Réactive le scroll après
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAnimating]);

  const handleScroll = (event: WheelEvent): void => {
    const deltaY = event.deltaY;

    if (!isAnimating) {
      if (deltaY > 0 && !isZoomedOut) {
        // Déclenche l'animation de zoom-out
        event.preventDefault();
        setIsAnimating(true);
        setIsZoomedOut(true);
      } else if (deltaY < 0 && isZoomedOut && window.scrollY <= 0) {
        // Déclenche l'animation de zoom-in (retour à l'état initial)
        event.preventDefault();
        setIsAnimating(true);
        setIsZoomedOut(false);
      }
    }
  };

  useEffect(() => {
    const onScroll = (event: WheelEvent): void => handleScroll(event);
    window.addEventListener("wheel", onScroll, { passive: false });
  
    return () => window.removeEventListener("wheel", onScroll);
  }, [isZoomedOut, isAnimating, handleScroll]); // Ajout de `handleScroll`

  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Section principale */}
      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      >
        {/* Nouveau texte qui apparaît pendant l'animation */}
        {(isAnimating || isZoomedOut) && (
          <motion.div
            className="absolute top-20 left-6 text-4xl text-foreground uppercase font-extrabold z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Osez une communication innovante
          </motion.div>
        )}

        {/* Texte en haut à gauche */}
        <motion.div
          className="absolute font-inter font-extrabold text-white text-4xl leading-none md:text-6xl md:top-[20%] md:left-[10%] top-20 left-6"
          animate={{
            opacity: isZoomedOut ? 0 : 1, // Le texte disparaît pendant l'animation
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <div>LE FUTUR DE LA COM.</div>
          {/* --- DESCRIPTION SUR 3 LIGNES --- */}
          <div className="mt-4 max-w-sm text-base font-normal leading-none">
            <p>
              Humbee est la plateforme révolutionnaire qui connecte vos équipes
              et fluidifie chaque échange professionnel.
            </p>
          </div>

          {/* --- BOUTON (SHADCN) --- */}
          <div className="mt-4">
            <Button className="bg-background text-foreground">
              Découvrir Humbee
            </Button>
          </div>
        </motion.div>

        {/* Rectangle blanc qui s'agrandit */}
        {(isAnimating || isZoomedOut) && (
          <motion.div
            className="absolute mt-60 rounded-md bg-white"
            style={{
              width: "384px",
              height: "480px",
              zIndex: 0,
            }}
            initial={{ scale: 1 }}
            animate={{
              scale: isZoomedOut ? 10 : 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        )}

        {/* Carte */}
        <motion.div
          className="relative mt-60 w-[352px] h-[440px] border-4 border-background flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: isZoomedOut ? "var(--tw-color-primary)" : "transparent",
            borderRadius: isZoomedOut ? "1rem" : "0.5rem",
          }}
          animate={{
            scale: isZoomedOut ? 0.6 : 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {(isAnimating || isZoomedOut) && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: "url('/hero.webp')",
                backgroundSize: "cover",
                // Ajout du décalage vertical de 60px
                backgroundPosition: "550px 370px",
                transformOrigin: "center center",
              }}
              initial={{ scale: initialScale }}
              animate={{ scale: isZoomedOut ? 1.3 : initialScale }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Contenu défilable */}
      <div
        className="h-[320vh] bg-gray-100"
        style={{
          pointerEvents: isAnimating ? "none" : "auto", // Bloque uniquement pendant l'animation
        }}
      />
    </div>
  );
}