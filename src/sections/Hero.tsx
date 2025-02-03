/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  // Fonction de scroll vers une section donnée
  const scrollVersSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Référence du conteneur de l'image de profil
  const containerRef = useRef<HTMLDivElement>(null);
  // Motion values pour la position de la souris
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transformation de la position de la souris en rotation
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  // Transformation pour un ombrage dynamique plus prononcé
  const dropShadowX = useTransform(mouseX, [-150, 150], [30, -30]);
  const dropShadowY = useTransform(mouseY, [-150, 150], [30, -30]);
  const dynamicDropShadow = useTransform(
    [dropShadowX, dropShadowY],
    ([x, y]) =>
      `drop-shadow(${x}px ${y}px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(59, 130, 246, 0.6))`
  );

  // Transformation pour l'intensité de l'ombre bleue
  const shadowIntensity = useTransform(
    [mouseX, mouseY],
    ([x, y]) => Math.min(Math.abs(x) + Math.abs(y), 300) / 300
  );

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-gray-700/20 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gray-400">Développeur Web</span> Frontend
              <span className="block mt-2">Passionné d'UI/UX</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Je crée des expériences web modernes et intuitives, en utilisant
              les dernières technologies pour donner vie à vos projets.
              Spécialisé en React et TypeScript.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollVersSection("projets")}
                className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollVersSection("contact")}
                className="px-8 py-3 border border-gray-500 text-gray-400 hover:bg-gray-500/10 rounded-full transition-colors"
              >
                Me contacter
              </button>
            </div>
          </motion.div>

          {/* Zone de l'image de profil avec effet 3D dynamique et ombre */}
          <motion.div
            ref={containerRef}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto perspective-[1000px]"
            onMouseMove={(e) => {
              const rect = containerRef.current?.getBoundingClientRect();
              if (rect) {
                // Calcul de la position relative par rapport au centre du conteneur
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);
                mouseX.set(x);
                mouseY.set(y);
              }
            }}
            onMouseLeave={() => {
              // Réinitialisation lorsque la souris quitte la zone
              mouseX.set(0);
              mouseY.set(0);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                transformStyle: "preserve-3d", // Conserver l'environnement 3D pour ses enfants
                rotateX: rotateX, // Rotation dynamique sur l'axe X
                rotateY: rotateY, // Rotation dynamique sur l'axe Y
                scale: 1.05, // Légère augmentation pour renforcer l'effet
              }}
            >
              {/* Fond avec dégradé et ombre */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-500/80 to-gray-700/20 shadow-xl shadow-blue-500/50 transition-all duration-300"
                style={{
                  boxShadow: `0 10px 30px -5px rgba(59, 130, 246, ${
                    shadowIntensity.get() * 0.5
                  })`,
                }}
              />

              {/* Image de profil avec translation sur l'axe Z et ombre dynamique */}
              <motion.img
                src="/images/profil.png"
                alt="Portrait professionnel"
                className="absolute w-[120%] h-[120%] object-cover -top-[20%] left-1/6 -translate-x-1/2 rounded-b-full"
                style={{
                  filter: dynamicDropShadow,
                  translateZ: "150px",
                  transition: "all 0.3s ease-out",
                }}
              />

              {/* Effet de brillance amélioré */}
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300"
                style={{
                  background: `linear-gradient(
                    ${rotateY.get() + 90}deg, 
                    transparent 0%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 100%
                  )`,
                  opacity: shadowIntensity.get() * 0.8,
                }}
              />

              {/* Effet de halo amélioré */}
              <div
                className="absolute -inset-2 rounded-full blur-2xl transition-opacity duration-300"
                style={{
                  background: `radial-gradient(
                    circle at ${50 + mouseX.get() / 6}% ${
                    50 + mouseY.get() / 6
                  }%,
                    rgba(59, 130, 246, 0.3) 0%,
                    transparent 70%
                  )`,
                  opacity: shadowIntensity.get() * 0.6,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
