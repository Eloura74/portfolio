// Import des bibliothèques nécessaires
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Accueil = () => {
  // Configuration des hooks useInView
  const [refCompetences, enVueCompetences] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refProjets, enVueProjets] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Liste des compétences
  const competences = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
  ];

  // Liste des projets
  const projets = [
    {
      titre: "Let's Cook",
      description:
        "Application de recettes de cuisine avec gestion des ingrédients et des étapes",
      image: "public/images/letscook.png",
      github: "https://github.com/votre-compte/lets-cook",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      titre: "Vision Windows",
      description: "Application de reconnaissance d'images pour Windows",
      image: "/images/visionWindows.webp",
      github: "https://github.com/votre-compte/vision-windows",
      technologies: ["Python", "OpenCV"],
    },
    {
      titre: "Voice Klipper",
      description: "Assistant vocal pour la gestion du presse-papiers",
      image: "/images/voiceKlipper.webp",
      github: "https://github.com/votre-compte/voice-klipper",
      technologies: ["Python", "Speech Recognition"],
    },
    {
      titre: "GPT PC",
      description: "Interface de chat GPT pour ordinateur",
      image: "/images/gptPc.webp",
      github: "https://github.com/votre-compte/gpt-pc",
      technologies: ["React", "OpenAI API"],
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Section Héro */}
      <section className="relative h-screen flex items-center">
        {/* Effets de fond avec des cercles flous */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-[500px] h-[500px] bg-gray-700/20 rounded-full blur-3xl bottom-0 right-0"></div>
        </div>
        Contenu principal de la section héro
      </section>

      {/* Section Compétences avec animation au défilement */}
      <motion.section
        ref={refCompetences} // Référence pour détecter la visibilité
        initial={{ opacity: 0, y: 50 }} // État initial: invisible et décalé vers le bas
        animate={enVueCompetences ? { opacity: 1, y: 0 } : {}} // Animation quand visible
        transition={{ duration: 0.8 }}
        className="py-20 bg-secondary-800/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Technologies Maîtrisées
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {competences.map((competence, index) => (
              <motion.div
                key={competence}
                initial={{ opacity: 0, scale: 0.8 }} // État initial: invisible et réduit
                animate={enVueCompetences ? { opacity: 1, scale: 1 } : {}} // Animation quand visible
                transition={{ duration: 0.5, delay: index * 0.1 }} // Durée et délai pour chaque élément
                className="px-6 py-3 bg-secondary-700/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-gray-300 transition-colors"
              >
                {competence}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Projets */}
      <motion.section
        ref={refProjets}
        initial={{ opacity: 0, y: 50 }}
        animate={enVueProjets ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20"
        id="projets"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projets.map((projet, index) => (
              <motion.div
                key={projet.titre}
                initial={{ opacity: 0, y: 20 }}
                animate={enVueProjets ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <div className="relative group">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gray-500/0 group-hover:bg-gray-500/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a
                      href={projet.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-gray-500 rounded-full font-medium hover:bg-gray-50 transition-colors"
                    >
                      Voir sur GitHub
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-300 mb-4">{projet.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Accueil;
