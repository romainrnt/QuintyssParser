import React from 'react';

import NewsletterBackground from './NewsletterBackground';
import NewsletterContent from './NewsletterContent';

const Newsletter: React.FC = () => {
  return (
    <div className="relative w-full bg-[#F4F4F8] overflow-hidden">
      <div className="w-full min-h-[355px] py-8 px-4 lg:px-[8vw] 2xl:px-[12vw] flex flex-col justify-center items-center">
        <div className="w-full max-w-[1920px] mx-auto relative">
          <NewsletterBackground />
          <NewsletterContent />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
