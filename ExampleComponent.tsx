// HeroSection
import React from 'react';
import Image from 'next/image';
import heroImage from '../assets/hero-image.jpg';
import logoImage from '../assets/logo.svg';

/**
 * Composant Hero avec différents éléments à transformer :
 * - Images -> WidgetMedia
 * - Boutons -> WidgetButton
 * - Textes -> WidgetText
 */
const HeroComponent = () => {
  const handleClick = () => {
    console.log('Bouton cliqué!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-indigo-700">
      {/* En-tête avec logo */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="w-36 h-12">
          <Image
            src={logoImage}
            alt="Logo de l'entreprise"
            className="w-full h-full object-contain"
          />
        </div>
        <button
          className="hidden md:inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-medium"
          onClick={handleClick}
        >
          Contactez-nous
        </button>
      </header>

      {/* Section principale */}
      <div className="container mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center">
        {/* Textes */}
        <div className="md:w-1/2 text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformez vos idées en réalité
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe d'experts est prête à vous accompagner dans tous vos projets digitaux.
            Découvrez nos services et nos réalisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg"
              onClick={handleClick}
            >
              Nos services
            </button>
            <button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg"
              onClick={handleClick}
            >
              Nos réalisations
            </button>
          </div>
        </div>

        {/* Image principale */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Image de héros"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Section de statistiques */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-700">+500</span>
              <p className="text-gray-600 mt-2">Projets réalisés</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-700">98%</span>
              <p className="text-gray-600 mt-2">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-700">24/7</span>
              <p className="text-gray-600 mt-2">Support client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
