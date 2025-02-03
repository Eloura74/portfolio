import React from "react";
import { motion } from "framer-motion";

interface Technology {
  nom: string;
  couleur: string;
}

interface ProjectCardProps {
  titre: string;
  description: string;
  technologies: Technology[];
  image: string;
  lienGithub: string;
  lienDemo: string;
  problemes?: string[];
  solutions?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titre,
  description,
  technologies,
  image,
  lienGithub,
  lienDemo,
  problemes,
  solutions,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700/50"
    >
      {/* Image du projet */}
      <div className="relative aspect-video overflow-hidden group">
        <img
          src={image}
          alt={`Aperçu du projet ${titre}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {titre}
        </h3>
        <p className="text-slate-300 mb-4">{description}</p>

        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech.nom}
              className={`px-3 py-1 text-sm rounded-full ${tech.couleur} backdrop-blur-sm`}
            >
              {tech.nom}
            </span>
          ))}
        </div>

        {/* Problèmes et Solutions */}
        {(problemes || solutions) && (
          <div className="mb-6 space-y-4">
            {problemes && problemes.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  Défis Rencontrés
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-300">
                  {problemes.map((probleme, index) => (
                    <li key={index} className="hover:text-white transition-colors">{probleme}</li>
                  ))}
                </ul>
              </div>
            )}
            {solutions && solutions.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  Solutions Apportées
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-300">
                  {solutions.map((solution, index) => (
                    <li key={index} className="hover:text-white transition-colors">{solution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Liens */}
        <div className="flex gap-4">
          <a
            href={lienGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            Code Source
          </a>
          <a
            href={lienDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Voir le Projet
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
