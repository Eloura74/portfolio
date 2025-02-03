import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [estScrollé, setEstScrollé] = useState(false);

  useEffect(() => {
    const gestionScroll = () => {
      setEstScrollé(window.scrollY > 10);
    };

    window.addEventListener("scroll", gestionScroll);
    return () => window.removeEventListener("scroll", gestionScroll);
  }, []);

  const scrollVersSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "accueil", nom: "Accueil" },
    { id: "a-propos", nom: "À Propos" },
    { id: "projets", nom: "Projets" },
    { id: "competences", nom: "Compétences" },
    { id: "experience", nom: "Expérience" },
    { id: "contact", nom: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        estScrollé ? "py-2 bg-secondary-900/80 backdrop-blur-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Nom */}
          <button
            onClick={() => scrollVersSection("accueil")}
            className="text-2xl font-display font-bold text-white"
          >
            <span className="text-primary-400">Quentin</span>FABER
          </button>

          {/* Navigation principale */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ id, nom }) => (
              <button
                key={id}
                onClick={() => scrollVersSection(id)}
                className="relative text-gray-300 hover:text-white transition-colors group"
              >
                <span>{nom}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Bouton Contact Rapide */}
          <button
            onClick={() => scrollVersSection("contact")}
            className="relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 text-white font-medium group"
          >
            <span className="relative z-10">Me Contacter</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
