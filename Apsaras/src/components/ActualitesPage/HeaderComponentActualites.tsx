import React from 'react';

import Image from 'next/image';

import backgroundImage from '../assets/photo-silvia-dos.png';

const HeaderComponentActualites: React.FC = () => {
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
        {/* Titre */}
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
          Actualités
        </div>

        {/* Texte descriptif */}
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
          Retrouver ci-dessous les actualités, rencontres et manifestations précédemment vécues par
          la Compagnie théâtrale APSARA Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>
    </section>
  );
};

export default HeaderComponentActualites;
