import React from 'react';

import NewsletterForm from './NewsletterForm';

const NewsletterContent: React.FC = () => {
  return (
    <div className="relative z-20 flex flex-col items-center text-center w-full">
      <div className="mt-12 mb-0 lg:mb-0 w-full max-w-[650px] h-auto">
        <div
          className="text-center uppercase"
          style={{
            font: 'normal normal bold 45px/130px Antonio',
            letterSpacing: '0.68px',
            color: '#09252D',
            textShadow: '4px 4px 0px #FFFFFFB3',
            opacity: 1,
          }}
        >
          SOUSCRIRE A NOTRE NEWSLETTER
        </div>
      </div>
      <div className="mt-[7px] w-full max-w-[451px] h-auto">
        <div
          className="text-center"
          style={{
            font: 'normal normal normal 18px/24px Fira Sans',
            letterSpacing: '0px',
            color: '#09252D',
            opacity: 0.6,
          }}
        >
          Pour découvrir en temps réel nos spectacles
        </div>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default NewsletterContent;
