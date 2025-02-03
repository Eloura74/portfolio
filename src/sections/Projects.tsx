/** @jsxImportSource @emotion/react */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Technology {
  nom: string;
  couleur: string;
}

interface ProjectProps {
  titre: string;
  description: string;
  technologies: Technology[];
  image: string;
  lienGithub: string;
  lienDemo: string;
  problemes: string[];
  solutions: string[];
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projets: ProjectProps[] = [
    {
      titre: "Let's Cook Simple",
      description:
        "Application de recettes de cuisine développée avec React et Tailwind CSS. Interface intuitive pour découvrir et partager des recettes.",
      technologies: [
        { nom: "React", couleur: "bg-blue-500/20 text-blue-400" },
        { nom: "Tailwind CSS", couleur: "bg-teal-500/20 text-teal-400" },
        { nom: "Vite", couleur: "bg-purple-500/20 text-purple-400" },
      ],
      image: "/images/letscook.png",
      lienGithub: "https://github.com/Eloura74/Lets_Cook_Simple",
      lienDemo: "#",
      problemes: [
        "Gestion des unités de mesure internationales",
        "Organisation des étapes de préparation",
      ],
      solutions: [
        "Système de conversion automatique des unités",
        "Interface drag & drop pour la réorganisation des étapes",
      ],
    },
    {
      titre: "KlipperVoiceMainsail",
      description:
        "Interface vocale innovante pour contrôler Mainsail (Klipper) pour imprimantes 3D.",
      technologies: [
        { nom: "Python", couleur: "bg-blue-500/20 text-blue-400" },
        {
          nom: "Speech Recognition",
          couleur: "bg-purple-500/20 text-purple-400",
        },
        { nom: "Klipper", couleur: "bg-teal-500/20 text-teal-400" },
      ],
      image: "/images/voiceKlipper.webp",
      lienGithub: "https://github.com/Eloura74/KlipperVoiceMainsail",
      lienDemo: "#",
      problemes: [
        "Précision de la reconnaissance vocale",
        "Intégration avec le système Klipper",
      ],
      solutions: [
        "Algorithmes de filtrage audio avancés",
        "API personnalisée pour Mainsail",
      ],
    },
    {
      titre: "Project Gestion Computer GPT",
      description:
        "Système intelligent de gestion d'ordinateur utilisant l'IA pour une administration simplifiée.",
      technologies: [
        { nom: "Python", couleur: "bg-blue-500/20 text-blue-400" },
        { nom: "OpenAI", couleur: "bg-teal-500/20 text-teal-400" },
        { nom: "GPT", couleur: "bg-purple-500/20 text-purple-400" },
      ],
      image: "/images/gptPc.webp",
      lienGithub: "https://github.com/Eloura74/Project_Gestion_Computer_Gpt",
      lienDemo: "#",
      problemes: [
        "Gestion de la mémoire des conversations",
        "Intégration système transparente",
      ],
      solutions: ["Système de cache intelligent", "API système native"],
    },
    {
      titre: "Face Recognition Win10",
      description:
        "Système de reconnaissance faciale avancé pour Windows 10 avec interface moderne.",
      technologies: [
        { nom: "Python", couleur: "bg-blue-500/20 text-blue-400" },
        { nom: "OpenCV", couleur: "bg-teal-500/20 text-teal-400" },
        {
          nom: "Face Recognition",
          couleur: "bg-purple-500/20 text-purple-400",
        },
      ],
      image: "/images/visionWindows.webp",
      lienGithub: "https://github.com/Eloura74/faceRegognitionWin10",
      lienDemo: "#",
      problemes: [
        "Optimisation des performances de traitement",
        "Précision de la détection faciale",
      ],
      solutions: [
        "Utilisation du GPU pour l'accélération",
        "Algorithmes de détection améliorés",
      ],
    },
  ];

  return (
    <section
      id="projets"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
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
              Mes <span className="text-primary-400">Projets</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents, démontrant
            mes compétences en développement web et ma capacité à résoudre des
            problèmes complexes.
          </p>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="bg-secondary-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 shadow-xl h-full flex flex-col group hover:border-primary-500/20 transition-all duration-300 hover:shadow-primary-500/5 hover:shadow-2xl hover:-translate-y-1">
                {/* Container de l'image avec un ratio 16:9 */}
                <div className="relative w-full pt-[56.25%] overflow-hidden bg-secondary-900">
                  {/* Image avec positionnement absolu pour maintenir le ratio */}
                  <img
                    src={projet.image}
                    alt={`Aperçu de ${projet.titre}`}
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                  {/* Overlay complexe avec plusieurs gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent opacity-60 group-hover:opacity-75 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-300 mix-blend-overlay"></div>

                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex-1 flex flex-col relative">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* En-tête avec animation de soulignement */}
                  <div className="mb-4 relative">
                    <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                      {projet.titre}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </h3>
                    <p className="text-gray-300 text-sm transform transition-all duration-300 group-hover:text-gray-200">
                      {projet.description}
                    </p>
                  </div>

                  {/* Technologies avec effet de survol */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary-400 mb-2 transform transition-all duration-300 group-hover:text-primary-300">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {projet.technologies.map((tech) => (
                        <span
                          key={tech.nom}
                          className={`px-2 py-0.5 rounded-full text-xs ${tech.couleur} transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                        >
                          {tech.nom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Points clés avec animation d'apparition */}
                  <div className="mb-4 flex-1">
                    <h4 className="text-xs font-semibold text-primary-400 mb-2 transform transition-all duration-300 group-hover:text-primary-300">
                      Points clés
                    </h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {projet.problemes.map((probleme, i) => (
                        <motion.li
                          key={`p${i}`}
                          className="flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-primary-400 transition-colors duration-300 group-hover/item:text-primary-300">
                            •
                          </span>
                          <span className="transition-colors duration-300 group-hover/item:text-gray-200">
                            {probleme}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Liens avec animations */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={projet.lienGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-all duration-300 text-xs flex-1 text-center hover:shadow-lg hover:shadow-primary-500/20 transform hover:-translate-y-0.5"
                    >
                      Voir le code
                    </a>
                    <a
                      href={projet.lienDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-full transition-all duration-300 text-xs flex-1 text-center hover:border-primary-400 hover:text-primary-300 transform hover:-translate-y-0.5"
                    >
                      Démo en direct
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
