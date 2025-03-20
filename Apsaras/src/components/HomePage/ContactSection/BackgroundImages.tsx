import React from 'react';

import Image from 'next/image';

import blocBleuFonce from '../../assets/ContactPage/Bloc bleu foncé@2x.png';
import coinDroitBas from '../../assets/ContactPage/coin droit bas@2x.png';
import doubleBarres from '../../assets/ContactPage/double barres.png';
import mapPoints from '../../assets/ContactPage/Map points.png';

const BackgroundImages: React.FC = () => {
  return (
    <div className="hidden lg:block">
      <Image
        src={mapPoints}
        alt="Map Points"
        className="absolute top-[82px] left-[235px] right-0"
        style={{
          opacity: 25,
          width: '1338px',
          height: '635px',
        }}
        width={1338}
        height={635}
        priority
      />
      <Image
        src={blocBleuFonce}
        alt="Bloc Bleu Foncé"
        className="absolute top-0 right-0 w-1/2 h-[800px]"
        style={{ mixBlendMode: 'hard-light' }}
        width={751}
        height={799}
        priority
      />
      <Image
        src={doubleBarres}
        alt="Double Barres"
        className="absolute -top-[70px] -right-[420px] w-[785px] h-[346px]"
        width={785}
        height={346}
        priority
      />
      <Image
        src={coinDroitBas}
        alt="Coin Droit Bas"
        className="absolute bottom-0 right-0 w-auto h-auto"
        width={466}
        height={84}
      />
    </div>
  );
};

export default BackgroundImages;
