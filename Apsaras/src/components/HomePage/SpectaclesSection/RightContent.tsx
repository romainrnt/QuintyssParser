// RightContent.tsx
import React from 'react';

import Image from 'next/image';

import NavigationArrow from './NavigationArrow';
import { SpectacleData } from './types/types';
import arrowIcon from '../../assets/SpectaclePage/icon arrow right outlined white@2x.png';

interface RightContentProps {
  spectaclesData: SpectacleData[];
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const RightContent: React.FC<RightContentProps> = ({
  spectaclesData,
  currentIndex,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div className="lg:col-span-6 flex justify-start items-center mt-20 lg:mt-0">
      {/* Mobile View */}
      <div className="block lg:hidden w-full">
        <div className="text-white text-center mb-8">
          <h3 className="text-xl font-bold">{spectaclesData[currentIndex].title}</h3>
          <p className="text-sm mt-4 px-4">{spectaclesData[currentIndex].description}</p>
        </div>

        <div className="flex justify-center items-center relative px-[60px]">
          <div className="relative w-[240px]">
            <Image
              src={spectaclesData[currentIndex].image}
              alt={spectaclesData[currentIndex].title}
              width={240}
              height={370}
              className="rounded-lg"
            />
            <button
              type="button"
              className="absolute bottom-4 right-4 bg-[#59bdbb] text-white px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#4a9e9c] transition-colors"
            >
              <Image src={arrowIcon} alt="Arrow" width={21} height={16} />
              <span>Voir le spectacle</span>
            </button>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <NavigationArrow direction="left" onClick={handlePrevious} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <NavigationArrow direction="right" onClick={handleNext} />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="relative min-w-[850px]">
          <div className="flex gap-[30px] relative">
            {[-1, 0, 1, 2].map((offset) => {
              const displayIndex =
                (currentIndex + offset + spectaclesData.length) % spectaclesData.length;
              const isSelected = offset === 0;

              return (
                <div
                  key={spectaclesData[displayIndex].title}
                  className={`relative shrink-0 transition-all duration-300 ${
                    isSelected ? 'z-10' : 'z-0'
                  } ${isSelected ? 'mt-[100px] mb-[253px]' : 'my-[175px]'}`}
                  style={{ width: '240px' }}
                >
                  <div className="relative h-[370px]">
                    <Image
                      src={spectaclesData[displayIndex].image}
                      alt={spectaclesData[displayIndex].title}
                      width={240}
                      height={370}
                    />
                    {isSelected && (
                      <>
                        <button
                          type="button"
                          className="absolute bottom-6 right-[-4px] bg-[#59bdbb] text-white w-[184px] h-[33px] text-sm flex items-center justify-center gap-2 hover:bg-[#4a9e9c] transition-colors"
                        >
                          <Image src={arrowIcon} alt="Arrow" width={21} height={16} />
                          <span>Voir le spectacle</span>
                        </button>
                        <div className="absolute w-full text-white" style={{ top: '390px' }}>
                          <h3 className="text-lg sm:text-xl font-bold">
                            {spectaclesData[displayIndex].title}
                          </h3>
                          <p className="text-sm sm:text-base" style={{ marginTop: '10px' }}>
                            {spectaclesData[displayIndex].description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-50">
            <NavigationArrow direction="left" onClick={handlePrevious} />
          </div>
          <div className="absolute right-[250px] top-1/2 -translate-y-1/2 z-50">
            <NavigationArrow direction="right" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
