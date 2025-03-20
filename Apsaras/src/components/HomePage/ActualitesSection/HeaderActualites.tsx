import React from 'react';

import Image from 'next/image';

import pictoNews from '../../assets/picto-news@2x.png';
import titleUnderline from '../../assets/soulignérouge.svg';

const HeaderActualites: React.FC = () => {
  return (
    <div className="relative w-full lg:grid lg:grid-cols-2 px-4 sm:px-8 lg:px-16">
      {/* Conteneur du titre "ACTUALITÉS" */}
      <div className="relative z-20">
        <div
          className="absolute left-[120px] top-0"
          style={{
            font: 'normal normal bold 53px/130px Antonio',
            letterSpacing: '0.8px',
            color: '#960F05',
            textShadow: '4px 4px 0px #FFFFFF',
            textAlign: 'left',
            textTransform: 'uppercase',
            opacity: 1,
          }}
        >
          ACTUALITÉS
        </div>

        {/* Ligne soulignée sous le titre */}
        <div className="absolute left-[-64px] top-[112px] h-[6px] w-[438px]">
          <Image src={titleUnderline} alt="Souligné Rouge" className="w-full object-contain" />
        </div>
      </div>

      {/* Bouton "Toutes nos actualités" pour desktop */}
      <div className="hidden lg:flex items-start justify-end mt-[60px] mr-[110px]">
        <div className="group">
          <div className="flex items-baseline gap-3">
            <Image src={pictoNews} alt="News Icon" width={45} height={44} className="opacity-100" />
            <div
              style={{
                width: '250px',
                height: '34px',
                font: 'normal normal 300 26px/18px Fira Sans',
                letterSpacing: '0px',
                color: '#960F05',
                textAlign: 'right',
                opacity: 1,
              }}
            >
              Toutes nos actualités
            </div>
          </div>
          <div className="h-[1px] bg-[#960F05] w-full group-hover:opacity-0 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default HeaderActualites;
