import React from 'react';

import SectionOne from './SectionDetailsOne/SectionOne';
import SectionThree from './SectionDetailsThree/SectionThree';
import SectionTwo from './SectionDetailsTwo/SectionTwo';

const Details: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1188px] mx-auto bg-white px-4 sm:px-6 lg:px-8">
      <div className="pt-8 lg:pt-12">
        <SectionOne />
      </div>

      <div className="mt-[40px] sm:mt-[150px] lg:mt-[110px]">
        <SectionTwo />
      </div>

      <div className="mt-[60px] sm:mt-[150px] lg:mt-[110px]">
        <SectionThree />
      </div>
    </div>
  );
};

export default Details;
