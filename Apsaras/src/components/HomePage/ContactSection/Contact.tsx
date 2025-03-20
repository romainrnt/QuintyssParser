import React from 'react';

import BackgroundImages from './BackgroundImages';
import ContactDetails from './ContactDetails';
import WorldDetails from './WorldDetails';

const Contact: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1920px] min-h-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#59BDBB]" />
      <BackgroundImages />
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
        <ContactDetails />
        <WorldDetails />
      </div>
    </div>
  );
};

export default Contact;
