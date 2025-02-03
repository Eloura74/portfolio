/** @jsxImportSource @emotion/react */
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarteExperience from "../components/Experience/CarteExperience";

type MotionDivProps = HTMLMotionProps<"div">;

interface ExperienceProps {
  titre: string;
  entreprise: string;
  periode: string;
  description: string;
  technologies: string[];
  logo: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: ExperienceProps[] = [
    {
      titre: "Formation Développeur Web & Web Mobile",
      entreprise: "AFPA",
      periode: "2024 - Présent",
      description:
        "Formation intensive en développement web et web mobile. Apprentissage des dernières technologies et frameworks du marché.",
      technologies: ["React", "Node.js", "Tailwind CSS", "JavasScript"],
      logo: "/images/experiences/afpa.svg",
    },
    {
      titre: "Stage Développeur Frontend/Backend",
      entreprise: "Entreprise Tech",
      periode: "2025 - 1 moi et demi",
      description:
        "Développement d'interfaces utilisateur modernes et réactives. Collaboration avec une équipe agile pour la création de nouvelles fonctionnalités.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
      logo: "/images/experiences/entreprise.png",
    },
    {
      titre: "Projet Personnel - Portfolio",
      entreprise: "Freelance",
      periode: "2025",
      description:
        "Conception et développement de mon portfolio personnel en utilisant les meilleures pratiques du développement web moderne.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      logo: "/images/experiences/freelance.svg",
    },
  ];

  return (
    <section id="experience" className="py-20">
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
              Mon <span className="text-primary-400">Parcours</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Un aperçu de mon parcours professionnel et de mes formations dans le
            développement web.
          </p>
        </motion.div>

        {/* Timeline des expériences */}
        <div className="relative max-w-3xl mx-auto pl-8">
          {/* Ligne verticale principale de la timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-500/10"></div>

          {/* Liste des expériences */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.titre}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CarteExperience {...experience} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Télécharger mon CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
