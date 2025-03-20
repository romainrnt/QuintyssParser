import React from 'react';

import Image from 'next/image';

import emailIcon from '../../assets/Newsletter/icon email outlined blue newsletter@2x.png';

const NewsletterBackground: React.FC = () => {
  return (
    <div className="absolute top-[-150px] left-0 lg:left-4 w-[350px] h-[300px] lg:w-[711px] lg:h-[610px]">
      <Image
        src={emailIcon}
        alt="Email Icon"
        layout="fill"
        objectFit="contain"
        className="opacity-100"
      />
    </div>
  );
};

export default NewsletterBackground;
