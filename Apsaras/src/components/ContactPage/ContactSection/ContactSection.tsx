import React from 'react';

import AddressSection from './Address';
import EmailSection from './Email';
import TitleSection from './Title';
import UnderlineSection from './Underline';

const ContactFooter: React.FC = () => {
  return (
    <div className="bg-[#960F05] w-full min-h-[280px] relative z-[-1]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col h-full py-8 sm:py-10 lg:py-12 xl:py-16">
          <TitleSection />
          <div className="relative mb-4">
            <div className="w-[600px] h-[4px]">
              <UnderlineSection />
            </div>
          </div>
          <div className="pl-4 sm:pl-6 lg:pl-[162px] pr-4 sm:pr-6 lg:pr-12 xl:pr-24 2xl:pr-32">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-8 lg:gap-60">
              <AddressSection />
              <EmailSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
