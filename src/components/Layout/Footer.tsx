import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const scrollVersHaut = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-800 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div></div>
          {/* Copyright et mentions légales */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
            <p>
              © {new Date().getFullYear()} Faber Quentin. Tous droits réservés.
            </p>
            <p className="mt-1">Développé avec React & Tailwind CSS</p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Eloura74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/quentin-faber-906308255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Bouton retour en haut */}
          <motion.button
            onClick={scrollVersHaut}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
