import React from 'react';

import Image from 'next/image';

import CardsActualites from './CardsActualites';
import HeaderActualites from './HeaderActualites';
import pictoNews from '../../assets/picto-news@2x.png';

const ActualitesSection: React.FC = () => {
  return (
    <div className="bg-[#F4F4F8] py-[80px]">
      <HeaderActualites />
      <CardsActualites />
      <div className="mt-8 flex justify-center lg:hidden px-4">
        <button type="button" className="group flex flex-col items-center">
          <div className="flex items-end gap-3 mb-2">
            <Image src={pictoNews} alt="News Icon" width={40} height={40} className="opacity-100" />
            <span className="text-[#960F05] text-[20px] sm:text-[22px] leading-none">
              Toutes nos actualités
            </span>
          </div>
          <div className="h-[1px] bg-[#960F05] w-full group-hover:opacity-0 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default ActualitesSection;
