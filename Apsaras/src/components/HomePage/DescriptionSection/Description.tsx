import React from 'react';

import DescriptionBackground from './DescriptionBackground';
import DescriptionContent from './DescriptionContent';

const Description: React.FC = () => {
  return (
    <section className="relative bg-white w-full overflow-x-hidden">
      <div className="relative h-auto xl:h-[760px] px-4 xl:px-0 max-w-[1448px] mx-auto mb-[50px]">
        <DescriptionBackground />
        <DescriptionContent />
      </div>
    </section>
  );
};

export default Description;
