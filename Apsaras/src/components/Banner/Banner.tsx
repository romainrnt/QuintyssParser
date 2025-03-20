import React from 'react';

import Image from 'next/image';

import arrowImage from '../assets/ContactPage/icon arrow outlined right white mini@2x.png';

type PageType = 'Contact' | 'Actualités' | 'Événements' | 'Spectacles' | 'La Compagnie';

interface BannerProps {
  page: PageType;
}

const Banner: React.FC<BannerProps> = ({ page }) => {
  return (
    <div
      className="bg-[#09252D] h-[50px] opacity-100 flex items-center absolute left-0"
      style={{
        width: 'calc(100% - 200px)',
        maxWidth: '1248px',
        top: '559px',
        zIndex: 10,
      }}
    >
      <div className="flex items-center w-full px-4">
        {/* Accueil */}
        <div
          style={{
            font: 'normal normal 300 15px/28px Fira Sans',
            letterSpacing: '0.3px',
            color: '#FFFFFF',
            textAlign: 'left',
            opacity: 1,
          }}
          className="ml-0 lg:ml-[230px]"
        >
          Accueil
        </div>

        <Image src={arrowImage} alt="Arrow" width={10} height={8} className="mx-2" />

        {/* Page */}
        <div
          style={{
            font: 'normal normal bold 15px/28px Fira Sans',
            letterSpacing: '0.3px',
            color: '#FFFFFF',
            textAlign: 'left',
            opacity: 1,
          }}
        >
          {page}
        </div>
      </div>
    </div>
  );
};

export default Banner;
