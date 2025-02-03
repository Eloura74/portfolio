import React from "react";
import { motion } from "framer-motion";

type NiveauCompetence = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

interface PropsCarteCompetence {
  nom: string;
  niveau: NiveauCompetence;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  couleur: string;
}

const CarteCompetence: React.FC<PropsCarteCompetence> = ({
  nom,
  niveau,
  icone: IconComponent,
  couleur,
}) => {
  // Fonction pour déterminer la largeur de la barre de progression
  const obtenirPourcentageNiveau = (niveau: NiveauCompetence): number => {
    switch (niveau) {
      case "Débutant":
        return 25;
      case "Intermédiaire":
        return 50;
      case "Avancé":
        return 75;
      case "Expert":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-md ${couleur} border border-white/10 shadow-lg`}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {/* Icône avec fond lumineux */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
          </div>

          <div className="flex-1">
            {/* Nom de la compétence */}
            <h3 className="text-lg font-semibold text-white mb-1">{nom}</h3>
            {/* Niveau de maîtrise */}
            <p className="text-sm text-white/70">{niveau}</p>
          </div>
        </div>

        {/* Barre de progression avec animation */}
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${obtenirPourcentageNiveau(niveau)}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full bg-white/80 rounded-full"
          />
        </div>
      </div>

      {/* Effet de brillance en arrière-plan */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default CarteCompetence;
