import React from 'react';

import Image from 'next/image';

import Cards from './Cards';
import Header from './HeaderEvenements';
import eventIcon from '../../assets/Evenements/icon calendar outlined blue events@2x.png';

const Evenements: React.FC = () => {
  return (
    <div
      className="relative w-full mx-auto pb-12 sm:pb-16 lg:pb-20"
      style={{
        background: 'linear-gradient(0deg, #09252D0D 0%, #C5A7A900 100%)',
        opacity: 1,
      }}
    >
      <Header />
      <Cards />

      {/* Mobile/Tablet Button */}
      <div className="mt-8 flex justify-center lg:hidden px-4">
        <button type="button" className="group flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={eventIcon}
              alt="Event Icon"
              width={40}
              height={40}
              className="opacity-100"
            />
            <span className="text-[#FFD6BA] text-[20px] sm:text-[22px]">Tous nos événements</span>
          </div>
          <div className="h-[1px] bg-[#FFD6BA] w-full group-hover:opacity-0 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default Evenements;
