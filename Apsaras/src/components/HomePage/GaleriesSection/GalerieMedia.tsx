import React from 'react';

import GalerieContent from './GalerieContent';
import GalerieHeader from './GalerieHeader';
import RedBackgroundStripe from './RedBackgroundStripe';

const GalerieMedias: React.FC = () => {
  return (
    <section className="relative w-full mx-auto mt-10 sm:mt-16 lg:mt-24">
      <div className="relative w-[95%] max-w-[1920px] mx-auto">
        <div className="relative min-h-[400px] md:min-h-[600px] lg:h-[840px]">
          <GalerieHeader />
          <RedBackgroundStripe />
          <div
            className="
              relative
              w-[90%]
              mx-auto
              lg:w-[1448px]
              lg:absolute
              lg:left-1/2
              lg:-translate-x-1/2
            "
          >
            <GalerieContent />
          </div>
          <div className="h-[60px] sm:h-[80px] lg:h-[100px] bg-white" />
        </div>
      </div>
    </section>
  );
};

export default GalerieMedias;
