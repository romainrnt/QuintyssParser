import React from 'react';

import Image from 'next/image';

import spectacleApsara from '../../assets/ActuPage/spectacleapsara.png';

const FourthArrow: React.FC = () => {
  return (
    <div className="relative mb-5">
      <div
        style={{
          font: 'normal normal bold 90px/130px Antonio',
          letterSpacing: '0px',
          color: '#CBA6A8',
          textAlign: 'left',
          textShadow: '8px 5px 0px #CBA6A833',
          opacity: 1,
        }}
        className="absolute left-[234px] top-[-20px]"
      >
        2013
      </div>
      <div
        style={{
          font: 'normal normal 300 14px/21px Fira Sans',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute w-[630px] h-[195px] left-[448px] top-[35px]"
      >
        En 2013 « Le Temps des Sirènes » au Théâtre du Galpon à Genève, met en scène 2 soeurs
        passionnées de danse et de chanson, elles forment un duo flamboyant – un tantinet désuet –
        Les Sirènes des Caraïbes. Un huis clos tragicomique qui expose un quotidien difficile :
        l’angoisse perpétuelle de déjouer les pièges de l’immigration féminine, un univers où le
        contrat « d’artiste de cabaret » – porte ouverte à la prostitution – n’est jamais loin. Car
        nul n’émigre en toute impunité. Surtout lorsque l’on est une femme. Tournée en automne 2013
        en Suisse, à Cuba, en Algérie, en France et en Tunisie. En 2014 tournée en Suisse romande,
        au Pérou et en Bolivie. En 2015 au Sénégal et aux Caraïbes.
      </div>

      <div className="absolute left-[1118px] top-[5px]">
        <div className="relative">
          <div className="absolute -top-[30px] -right-[25px] w-[70px] h-[70px] bg-[#CBA6A8] rounded z-0" />
          <Image
            src={spectacleApsara}
            alt="Spectacle de danse Apsara en 2013"
            width={170}
            height={260}
            className="rounded relative z-10"
            style={{ boxShadow: '8px 8px 0px #CBA6A833' }}
          />
        </div>
      </div>
      <div className="relative ml-[130px] w-11">
        <div
          className="relative w-11 h-[220px] bg-[#CBA6A8] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[37px]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute bottom-[87px] left-3 w-5 h-5 bg-white rounded-full" />
        </div>
        <div className="absolute left-11 top-[123px] w-[250px] border-t-4 border-[#CBA6A8]" />
        <div className="absolute top-[220px] left-0 w-11 h-[27px] border-l-[22px] border-r-[22px] border-t-[27px] border-l-transparent border-r-transparent border-t-[#CBA6A8]" />
      </div>
    </div>
  );
};

export default FourthArrow;
