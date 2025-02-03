import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  useEffect(() => {
    emailjs.init("pO_nru5Svjg1rmOlf");
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    sending: false,
    error: null as string | null,
    success: false,
  });

  // Effet pour faire disparaître les messages de statut
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (status.success || status.error) {
      timer = setTimeout(() => {
        setStatus(prevStatus => ({
          ...prevStatus,
          success: false,
          error: null
        }));
      }, 3000); // Disparaît après 3 secondes
    }

    // Nettoyage du timer quand le composant est démonté ou le statut change
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [status.success, status.error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ sending: true, error: null, success: false });

    try {
      await emailjs.send(
        "service_r267uva", // À remplacer par votre Service ID
        "template_6udmywz", // À remplacer par votre Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: "faber.quentin@gmail.com",
        }
      );

      setStatus({ sending: false, error: null, success: true });
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error: any) {
      console.error("Erreur EmailJS:", error);
      let errorMessage = "Une erreur est survenue lors de l'envoi du message. ";

      // Gestion des erreurs spécifiques
      if (error?.text?.includes("template ID not found")) {
        errorMessage +=
          "Erreur de configuration du template EmailJS. Veuillez contacter l'administrateur.";
      } else {
        errorMessage += "Veuillez réessayer.";
      }

      setStatus({
        sending: false,
        error: errorMessage,
        success: false,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reseauxSociaux = [
    {
      nom: "GitHub",
      lien: "https://github.com/Eloura74",
      icone: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
        </svg>
      ),
    },
    {
      nom: "LinkedIn",
      lien: "https://linkedin.com/in/quentin-faber-906308255",
      icone: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 inline-block relative group">
              <span className="relative inline-block">
                Me <span className="text-primary-400">Contacter</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h2>
            <p className="text-gray-300">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
              discuter !
            </p>
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-28">
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-8 w-full">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-300 mb-3"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-900 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white text-lg"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium text-gray-300 mb-3"
                  >
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-900 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white text-lg"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-secondary-900 border border-secondary-700 rounded-lg focus:outline-none focus:border-primary-500 text-white resize-none text-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-lg font-medium"
                  disabled={status.sending}
                >
                  {status.sending ? "Envoi en cours..." : "Envoyer le message"}
                </button>
                {status.error && (
                  <p className="text-red-500 mt-4">{status.error}</p>
                )}
                {status.success && (
                  <p className="text-green-500 mt-4 mx-auto text-center">
                    Message envoyé avec succès !
                  </p>
                )}
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Coordonnées
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-gray-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    faber.quentin@gmail.com
                  </p>
                  <p className="flex items-center gap-3 text-gray-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Istres, France
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Réseaux Sociaux
                </h3>
                <div className="flex gap-4">
                  {reseauxSociaux.map((reseau) => (
                    <a
                      key={reseau.nom}
                      href={reseau.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary-900 rounded-lg text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {reseau.icone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
