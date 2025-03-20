import React from 'react';

import Image from 'next/image';

import icon from '../../assets/SpectaclePage/icontheaterwhite@2x.png';
import underlineImage from '../../assets/SpectaclePage/soulignéblanc.png';

const LeftContent = () => {
  return (
    <div className="lg:col-span-4 space-y-4 text-center lg:text-left lg:-mt-40">
      <div className="relative">
        <div
          className="uppercase lg:mb-8 lg:mt-12"
          style={{
            font: 'normal normal bold 53px/130px Antonio',
            letterSpacing: '0.8px',
            color: '#FFFFFF',
            textShadow: '4px 4px 0px #09252D33',
            textAlign: 'left',
            opacity: 1,
          }}
        >
          SPECTACLES
        </div>

        <div className="absolute left-[-260px] top-[115px]">
          <Image src={underlineImage} alt="Underline" className="w-full" />
        </div>
      </div>
      <div
        style={{
          width: '331px',
          height: '211px',
          font: 'normal normal normal 17px/26px Fira Sans',
          letterSpacing: '0px',
          color: '#FFFFFF',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        Nos spectacles vous content des histoires de femmes dans un contexte social bien précis, et
        ceci à travers le théâtre, la danse et la musique, en s’inspirant de cultures différentes
        pour ses créations.
        <br />
        <br />
        Créée par Silvia Barreiro, la Compagnie Apsara fut créée en 2001 à Genève.
      </div>

      <div className="group inline-flex flex-col pt-8 lg:-mt-4">
        <div className="flex items-end gap-4">
          <Image src={icon} alt="Icon" width={45} height={45} />
          <div
            style={{
              font: 'normal normal 300 26px/18px Fira Sans',
              letterSpacing: '0px',
              color: '#FFFFFF',
              textAlign: 'right',
              opacity: 1,
            }}
          >
            Tous nos spectacles
          </div>
        </div>
        <div className="h-px bg-white w-full mt-2 group-hover:opacity-0 transition-opacity" />
      </div>
    </div>
  );
};

export default LeftContent;
