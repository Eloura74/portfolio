import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarteCompetence from "../components/Skills/CarteCompetence";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiDocker,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
type NiveauCompetence = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

type Competence = {
  nom: string;
  niveau: NiveauCompetence;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  couleur: string;
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Définition des compétences par catégorie
  const competences: Record<string, Competence[]> = {
    frontend: [
      {
        nom: "React.js",
        niveau: "Débutant",
        icone: FaReact,
        couleur: "bg-blue-500/10",
      },
      // {
      //   nom: "TypeScript",
      //   niveau: "Intermédiaire",
      //   icone: SiTypescript,
      //   couleur: "bg-blue-600/10",
      // },
      {
        nom: "Tailwind CSS",
        niveau: "Débutant",
        icone: SiTailwindcss,
        couleur: "bg-teal-500/10",
      },
      {
        nom: "Html",
        niveau: "Débutant",
        icone: SiHtml5,
        couleur: "bg-yellow-500/10",
      },
      {
        nom: "JavaScript",
        niveau: "Débutant",
        icone: SiJavascript,
        couleur: "bg-orange-500/10",
      },
    ],
    backend: [
      {
        nom: "Node.js",
        niveau: "Débutant",
        icone: SiNodedotjs,
        couleur: "bg-green-500/10",
      },

      {
        nom: "Python",
        niveau: "Intermédiaire",
        icone: SiPython,
        couleur: "bg-yellow-500/10",
      },
      {
        nom: "MongoDB",
        niveau: "Débutant",
        icone: SiMongodb,
        couleur: "bg-emerald-500/10",
      },
    ],
    outils: [
      {
        nom: "Git",
        niveau: "Intermédiaire",
        icone: SiGit,
        couleur: "bg-orange-500/10",
      },
      {
        nom: "Docker",
        niveau: "Débutant",
        icone: SiDocker,
        couleur: "bg-blue-400/10",
      },
      {
        nom: "VsCode",
        niveau: "Intermédiaire",
        icone: VscVscodeInsiders,
        couleur: "bg-blue-400/10",
      },
      // {
      //   nom: "VS Code",
      //   niveau: "Expert",
      //   icone: SiVscode,
      //   couleur: "bg-blue-500/10",
      // },
    ],
  };

  return (
    <section id="competences" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 inline-block relative group">
            <span className="relative inline-block">
              Mes <span className="text-primary-400">Compétences</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h2>

          <p className="text-gray-400">
            Un aperçu des technologies et outils que je maîtrise, constamment
            mis à jour pour rester à la pointe des dernières innovations.
          </p>
        </motion.div>

        {/* Section Frontend */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 relative inline-block">
            <span className="relative">
              Développement Frontend
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400/50"></div>
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competences.frontend.map((competence, index) => (
              <motion.div
                key={competence.nom}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CarteCompetence {...competence} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Backend */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 relative inline-block">
            <span className="relative">
              Développement Backend
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400/50"></div>
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competences.backend.map((competence, index) => (
              <motion.div
                key={competence.nom}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CarteCompetence {...competence} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Outils */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 relative inline-block">
            <span className="relative">
              Outils et Environnement
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400/50"></div>
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competences.outils.map((competence, index) => (
              <motion.div
                key={competence.nom}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CarteCompetence {...competence} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
