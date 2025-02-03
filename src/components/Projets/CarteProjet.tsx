import { motion } from "framer-motion";

interface ProjetProps {
  titre: string;
  description: string;
  technologies: string[];
  image: string;
  lienGithub: string;
  lienDemo: string;
}

const CarteProjet = ({
  titre,
  description,
  technologies,
  image,
  lienGithub,
  lienDemo,
}: ProjetProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-secondary-800 rounded-xl overflow-hidden"
    >
      {/* Image du projet avec overlay au survol */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={`Aperçu du projet ${titre}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-4xl font-display font-bold text-white mb-2 text-center">
          {titre}
        </h3>
        <p className="text-gray-300 mb-4 text-center">{description}</p>

        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-secondary-700 text-primary-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4 justify-center">
          <a
            href={lienGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors text-sm"
          >
            Voir le code
          </a>
          <a
            href={lienDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-full transition-colors text-sm"
          >
            Démo en direct
          </a>
        </div>
      </div>

      {/* Effet de bordure animée */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 rounded-xl transition-colors duration-300"></div>
    </motion.div>
  );
};

export default CarteProjet;
