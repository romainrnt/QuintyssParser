import React from 'react';

import Image from 'next/image';

import babyjane from '../../assets/ActuPage/babyjane.png';

const SixthArrow: React.FC = () => {
  return (
    <div className="relative mb-5">
      <div
        style={{
          font: 'normal normal bold 90px/130px Antonio',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          textShadow: '8px 5px 0px #09252D33',
          opacity: 1,
        }}
        className="absolute left-[234px] bottom-[30px]"
      >
        2019
      </div>
      <div
        style={{
          font: 'normal normal 300 14px/21px Fira Sans',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute w-[532px] h-[97px] left-[448px] top-[35px]"
      >
        En 2019 “Qu’est-il arrivé à Baby Jane ? » au Théâtre Alchimic à Genève. Une adaptation de la
        pièce de Henry Farrell et du film portant le même titre de Robert Aldrich. Elle raconte la
        terrible jalousie entre deux sœurs actrices, victimes du star-system dans la jungle du
        vedettariat d’Hollywood.
      </div>
      <div className="absolute left-[1020px] top-[5px]">
        <div className="relative">
          <div className="absolute -top-[30px] -right-[25px] w-[70px] h-[70px] bg-[#09252D] rounded z-0" />
          <Image
            src={babyjane}
            alt="Portrait de Baby Jane sur scène"
            width={268}
            height={175}
            className="rounded relative z-10"
            style={{ boxShadow: '8px 8px 0px #09252D33' }}
          />
        </div>
      </div>
      <div className="relative ml-[130px] w-11">
        <div
          className="relative w-11 h-[180px] bg-[#09252D] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[37px]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute bottom-[11px] left-3 w-5 h-5 bg-white rounded-full" />
        </div>
        <div className="absolute left-11 top-[159px] w-[250px] border-t-4 border-[#09252D]" />
        <div className="absolute top-[180px] left-0 w-11 h-[27px] border-l-[22px] border-r-[22px] border-t-[27px] border-l-transparent border-r-transparent border-t-[#09252D]" />
      </div>
    </div>
  );
};

export default SixthArrow;
