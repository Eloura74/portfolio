import { motion } from 'framer-motion';
import CarteProjet from '../components/Projets/CarteProjet';

const Projets = () => {
  const projets = [
    {
      titre: "Application E-commerce",
      description: "Une plateforme de commerce électronique moderne avec panier d'achat, paiement sécurisé et gestion des commandes.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/projets/ecommerce.jpg",
      lienGithub: "https://github.com/votrecompte/ecommerce",
      lienDemo: "https://ecommerce-demo.com"
    },
    {
      titre: "Dashboard Analytics",
      description: "Interface d'administration avec visualisation de données en temps réel et rapports personnalisables.",
      technologies: ["React", "TypeScript", "D3.js", "Firebase"],
      image: "/images/projets/dashboard.jpg",
      lienGithub: "https://github.com/votrecompte/dashboard",
      lienDemo: "https://dashboard-demo.com"
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <div className="min-h-screen bg-secondary-900 py-20">
      <div className="container mx-auto px-4">
        {/* En-tête de la section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Mes <span className="text-primary-400">Projets</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents, démontrant mes compétences
            en développement web et ma capacité à créer des solutions innovantes.
          </p>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarteProjet {...projet} />
            </motion.div>
          ))}
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Vous souhaitez voir plus de projets ou discuter d'une collaboration ?
          </p>
          <a
            href="mailto:contact@votremail.com"
            className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors"
          >
            Contactez-moi
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projets;
