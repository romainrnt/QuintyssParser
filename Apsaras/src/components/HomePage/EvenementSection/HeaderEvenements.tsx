import React from 'react';

import Image from 'next/image';

import eventIcon from '../../assets/Evenements/icon calendar outlined blue events@2x.png';
import soulignéBleu from '../../assets/Evenements/soulignébleu.png';

const Header: React.FC = () => {
  return (
    <div className="relative w-full lg:grid lg:grid-cols-2 lg:items-center mt-[80px]">
      {' '}
      {/* Réduit de 90px à 80px */}
      {/* Conteneur gauche : Titre et ligne soulignée */}
      <div>
        <div
          className="pl-[180px] mb-[10px] uppercase" // Changé de mb-[-20px] à mb-[10px]
          style={{
            font: 'normal normal bold 53px/60px Antonio',
            letterSpacing: '0.8px',
            color: '#59BDBB',
            textShadow: '4px 4px 0px #FFFFFFB3',
            textAlign: 'left',
            opacity: 1,
          }}
        >
          ÉVÈNEMENTS
        </div>

        <Image
          src={soulignéBleu}
          alt="Souligné Bleu"
          className="w-[490px] h-[6px] object-contain"
        />
      </div>
      <div className="hidden lg:flex items-start justify-end mr-[150px]">
        <div className="group">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={eventIcon}
              alt="Event Icon"
              width={45}
              height={44}
              className="opacity-100"
            />
            <div
              className="text-[#FFD6BA] mt-4"
              style={{
                font: 'normal normal 300 26px/18px Fira Sans',
                letterSpacing: '0px',
                color: '#FFD6BA',
                textAlign: 'right',
                opacity: 1,
              }}
            >
              Tous nos événements
            </div>
          </div>
          <div className="h-[1px] bg-[#FFD6BA] w-full group-hover:opacity-0 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default Header;
