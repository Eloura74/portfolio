import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="a-propos" className="py-20 bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* titre avec soulignement avec effet d'apparition */}
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 inline-block relative group">
            <span className="relative inline-block">
              À Propos de <span className="text-primary-400">Moi</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h2>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              Passionné par le développement web depuis de nombreuses années, je
              suis actuellement en formation{" "}
              <span className="text-primary-400">
                Développeur Web et Web Mobile
              </span>
              . Mon objectif est de me perfectionner en tant que développeur
              <span className="text-primary-400"> frontend</span> et{" "}
              <span className="text-primary-400">backend</span> en utilisant les
              derniers outils et technologies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Parcours */}
              <div className="bg-secondary-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-display font-bold text-primary-400 mb-4">
                  Mon Parcours
                </h3>
                <p>
                  Après une formation intensive en développement web, j'ai
                  participé à plusieurs projets qui m'ont permis de maîtriser
                  les technologies modernes du web. Je suis particulièrement
                  intéressé par le développement frontend et l'expérience
                  utilisateur.
                </p>
              </div>

              {/* Ce que je recherche */}
              <div className="bg-secondary-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-display font-bold text-primary-400 mb-4">
                  Ce que je recherche
                </h3>
                <p>
                  Je suis à la recherche d'opportunités en tant que développeur
                  frontend/fullstack où je pourrai contribuer à des projets
                  innovants tout en continuant à développer mes compétences.
                  Disponible pour des missions freelance ou un poste en CDI.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold text-primary-400 mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Travail en équipe",
                  "Communication",
                  "Résolution de problèmes",
                  "Autonomie",
                  "Adaptabilité",
                  "Curiosité",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary-700/50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
