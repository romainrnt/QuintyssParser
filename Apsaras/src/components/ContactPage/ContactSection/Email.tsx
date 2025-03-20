import React from 'react';

import Image from 'next/image';

import iconMail from '../../assets/ContactPage/icon mail outlined rounded white@2x.png';

const EmailSection: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-[28px] h-[24px] mr-[14px] flex-shrink-0">
        <Image
          src={iconMail}
          alt="Email icon"
          width={28}
          height={24}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        style={{
          font: 'normal normal bold 22px/26px Fira Sans',
          letterSpacing: '1.1px',
          color: '#FFFFFF',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        info@apsaras.ch
      </div>
    </div>
  );
};

export default EmailSection;
