import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollVersSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* Image de profil */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="shadow-lg shadow-blue-500/50 absolute inset-0 rounded-full bg-gradient-to-b from-gray-500/80 to-gray-700/20"></div>
              <img
                src="/images/profil.png"
                alt="Portrait professionnel"
                className="absolute w-[120%] h-[120%] object-cover -top-[20%] left-1/2 -translate-x-1/2 rounded-b-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
