import React from 'react';

import Image from 'next/image';

import soulignéPurple from '../../assets/GalerieMediaPage/soulignépurple.png';

const GalerieHeader: React.FC = () => {
  return (
    <div className="relative text-center lg:text-left mb-8 lg:mb-10">
      <div
        className="uppercase lg:absolute lg:top-[10px] lg:right-[6%]"
        style={{
          font: 'normal normal bold 53px/130px Antonio',
          letterSpacing: '0.8px',
          color: '#AA3E98',
          textShadow: '4px 4px 0px #FFFFFFB3',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        GALERIE MÉDIAS
      </div>
      <div className="hidden lg:block absolute top-[120px] right-0 w-[490px] h-[6px] translate-x-[10%]">
        <Image
          src={soulignéPurple}
          alt="Souligné Purple"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default GalerieHeader;
