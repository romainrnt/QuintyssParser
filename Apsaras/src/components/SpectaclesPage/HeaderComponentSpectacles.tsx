import React from 'react';

import Image from 'next/image';

import backgroundImage from '../assets/photo-silvia-dos.png';

const HeaderComponentSpectacles: React.FC = () => {
  return (
    <section className="relative w-full h-[585px] overflow-hidden">
      {/* Background image - desktop */}
      <div className="absolute top-0 right-0 w-[calc(100%-661px)] h-full hidden lg:block">
        <Image src={backgroundImage} alt="Silvia de dos" fill className="object-cover" priority />
      </div>

      {/* Background image - mobile */}
      <div className="absolute top-0 left-0 w-full h-full lg:hidden">
        <Image src={backgroundImage} alt="Silvia de dos" fill className="object-cover" priority />
      </div>

      {/* Red background */}
      <div className="absolute top-0 left-0 w-full lg:w-[661px] h-full bg-[#960F05]" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1920px]">
        {/* Title */}
        <div
          style={{
            font: 'normal normal bold 90px/130px Antonio',
            letterSpacing: '0px',
            color: '#FFFFFF',
            textShadow: '8px 5px 0px #09252D80',
            textAlign: 'left',
            opacity: 1,
          }}
          className="mt-[180px] lg:mt-[170px] lg:ml-[230px] max-w-full lg:max-w-[856px]"
        >
          Spectacles
        </div>

        {/* Description */}
        <div
          style={{
            font: 'normal normal normal 16px/26px Fira Sans',
            letterSpacing: '0.8px',
            color: '#FFFFFF',
            textShadow: '8px 5px 10px #09252D99',
            textAlign: 'left',
            opacity: 1,
          }}
          className="mt-8 lg:mt-[23px] lg:ml-[230px] max-w-full lg:max-w-[650px]"
        >
          Silvia Barreiros a écrit deux spectacles de la Cie Apsara : Dolores… En La Majeure en
          2002, Medea in Spain en 2005 et conçu : Les Papiers de l’Amour en 2009 et Le Temps des
          Sirènes en 2013. En 2015 écriture de Les Fleurs de l’Amertume. En 2019 écriture de Le
          Lémanic - chronique d’un naufrage annoncé et adapte « Qu’est-il arrivé à Baby Jane »
          d’après la pièce de Henry Farrell.
        </div>
      </div>
    </section>
  );
};

export default HeaderComponentSpectacles;
