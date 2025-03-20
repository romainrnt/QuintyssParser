// NavigationArrow.tsx
import React from 'react';

import Image from 'next/image';

import iconleftred from '../../assets/SpectaclePage/iconleftred.png';
import iconleftwhite from '../../assets/SpectaclePage/iconleftwhite.png';
import iconrightred from '../../assets/SpectaclePage/iconrightred.png';
import iconrightwhite from '../../assets/SpectaclePage/iconrightwhite.png';

interface NavigationArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, onClick }) => {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      className="w-[60px] h-[60px] bg-white rounded flex items-center justify-center hover:bg-[#960F05] transition-colors group cursor-pointer z-50"
      type="button"
    >
      <Image
        src={isLeft ? iconleftred : iconrightred}
        alt={`Flèche ${isLeft ? 'gauche' : 'droite'}`}
        width={43}
        height={35}
        className="group-hover:hidden"
        priority
      />
      <Image
        src={isLeft ? iconleftwhite : iconrightwhite}
        alt={`Flèche ${isLeft ? 'gauche' : 'droite'} blanche`}
        width={43}
        height={35}
        className="hidden group-hover:block"
        priority
      />
    </button>
  );
};

export default NavigationArrow;
