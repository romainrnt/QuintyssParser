import React from 'react';

const NewsletterForm: React.FC = () => {
  return (
    <div className="mt-[15px] flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-y-0 w-full max-w-[534px]">
      <div className="w-full lg:w-auto lg:flex-grow h-[54px] bg-white rounded-[4px] lg:rounded-l-[4px] lg:rounded-r-none flex items-center">
        <input
          type="text"
          className="w-full h-full px-4 bg-transparent border-none outline-none rounded-[4px] lg:rounded-l-[4px] lg:rounded-r-none"
        />
      </div>
      <button
        type="button"
        className="w-full lg:w-[168px] h-[54px] bg-[#59BDBB] text-white font-bold rounded-[4px] lg:rounded-l-none lg:rounded-r-[4px] mt-4 lg:mt-0 flex items-center justify-center hover:bg-[#09252D] transition duration-200"
      >
        S&apos;INSCRIRE
      </button>
    </div>
  );
};

export default NewsletterForm;
