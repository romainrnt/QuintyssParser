import React from 'react';

import Image from 'next/image';

import silviaBarreiros from '../../assets/Description/SilviaBarreiros.png';

const DescriptionContent: React.FC = () => {
  return (
    <div className="relative flex flex-col xl:block h-full pt-8 xl:pt-[100px]">
      {/* Titre principal */}
      <div
        style={{
          font: 'normal normal bold 94px/106px Antonio',
          letterSpacing: '0px',
          color: '#09252D',
          textShadow: '8px 5px 0px #CBA6A880',
          textAlign: 'left',
          textTransform: 'uppercase',
          opacity: 1,
        }}
        className="w-full xl:absolute xl:top-[135px] xl:left-[200px] xl:w-[472px] min-h-[80px] xl:min-h-[180px] mb-2 xl:mb-0 text-center xl:text-left"
      >
        SILVIA BARREIROS
      </div>

      {/* Sous-titre */}
      <div
        style={{
          font: 'normal normal 600 18px/24px Fira Sans',
          letterSpacing: '0px',
          color: '#960F05',
          textAlign: 'left',
          opacity: 1,
        }}
        className="xl:absolute xl:top-[375px] xl:left-[206px] xl:right-[791px] min-h-[45px] xl:min-h-[61px] mb-4 xl:mb-0"
      >
        Fondatrice et directrice artistique de la Compagnie Apsara, auteure, comédienne et metteuse
        en scène
      </div>

      {/* Texte principal */}
      <div
        style={{
          font: 'normal normal normal 15px/25px Fira Sans',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
        className="mt-4 xl:mt-0 xl:absolute xl:top-[436px] xl:left-[206px] xl:right-[791px]"
      >
        Diplômée de l’Ecole de Théâtre Serge Martin. Pendant dix ans, elle a évolué à la fois en
        Espagne, Italie, France et en Inde, collaborant notamment avec les directeurs de compagnies
        Gabriel Alvarez, Walter Pfaff, Renzo Vescovo et en Suisse, Jacques Gardel. Au fur et à
        mesure de son parcours professionnel, elle choisit de développer un travail corporel et
        vocal dans la direction théâtrale de Meyerhold, Grotowski, Barba en puisant son inspiration
        dans les danses indiennes, mais aussi le Flamenco.
      </div>

      {/* Image */}
      <div className="mt-8 xl:mt-0 xl:absolute xl:top-[100px] xl:left-[758px] w-full xl:w-[560px] aspect-square xl:h-[560px]">
        <Image
          src={silviaBarreiros}
          alt="Silvia Barreiros"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default DescriptionContent;
