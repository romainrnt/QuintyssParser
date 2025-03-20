// Spectacles.tsx
import React, { useRef, useState, useEffect } from 'react';

import { StaticImageData } from 'next/image';

import LeftContent from './LeftContent';
import RightContent from './RightContent';
import photoSpectacle1 from '../../assets/SpectaclePage/photo spectacle 1@2x.png';
import photoSpectacle2 from '../../assets/SpectaclePage/photo spectacle 2@2x.png';
import photoSpectacle3 from '../../assets/SpectaclePage/photo spectacle 3@2x.png';
import photoSpectacle4 from '../../assets/SpectaclePage/photo spectacle 4@2x.png';

export interface SpectacleData {
  image: StaticImageData;
  title: string;
  description: string;
}

const spectaclesData: SpectacleData[] = [
  {
    image: photoSpectacle1,
    title: 'DOLORES EN LA MAJEUR',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.',
  },
  {
    image: photoSpectacle2,
    title: 'MEDEA IN SPAIN',
    description:
      'Une Medea - Indienne et danseuse de Kathak, et un Jason - Gitan et danseur de Flamenco - font revivre le mythe de cette « barbare des temps modernes » …',
  },
  {
    image: photoSpectacle3,
    title: 'LA DANSE DES OMBRES ET DES LUMIÈRES',
    description:
      'Vestibulum commodo. Ut rhoncus gravida arcu. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.',
  },
  {
    image: photoSpectacle4,
    title: 'LE CHANT DES SIRÈNES',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.',
  },
];

const Spectacles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dynamicHeight, setDynamicHeight] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.scrollHeight;
        setDynamicHeight(containerHeight + 100);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? spectaclesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === spectaclesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="w-full bg-[#960F05] overflow-hidden transition-all duration-300"
      style={{ minHeight: `${dynamicHeight}px` }}
    >
      <div ref={containerRef} className="max-w-[1448px] mx-auto h-full py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 h-full items-center">
          <LeftContent />
          <RightContent
            spectaclesData={spectaclesData}
            currentIndex={currentIndex}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default Spectacles;
