import React from "react";
import { motion } from "framer-motion";

interface PropsCarteExperience {
  titre: string;
  entreprise: string;
  periode: string;
  description: string;
  technologies: string[];
  logo?: string;
}

const CarteExperience: React.FC<PropsCarteExperience> = ({
  titre,
  entreprise,
  periode,
  description,
  technologies,
  logo,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-secondary-800 rounded-xl p-6 shadow-xl"
    >
      {/* Ligne verticale de la timeline */}
      <div className="absolute top-0 -bottom-8 -left-3 w-0.5 bg-primary-500/30"></div>

      {/* Point sur la timeline */}
      <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full border-4 border-secondary-900 bg-primary-500"></div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        {/* Logo de l'entreprise */}
        {logo && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center p-2">
              <img
                src={logo}
                alt={entreprise}
                className={`w-full h-full object-contain ${
                  logo.includes("afpa") ? "brightness-150 contrast-75" : ""
                }`}
              />
            </div>
          </div>
        )}

        <div className="flex-1">
          {/* Titre et entreprise */}
          <h3 className="text-xl font-display font-bold text-white">{titre}</h3>
          <p className="text-primary-400 font-medium">{entreprise}</p>

          {/* Période */}
          <p className="text-sm text-gray-400 mt-1">{periode}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Technologies utilisées */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-secondary-700 text-primary-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CarteExperience;
