import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface SimpleCardProps {
  date: string;
  title: string;
  description: string;
  calendarIcon: StaticImageData;
  arrowIcon: StaticImageData;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  date,
  title,
  description,
  calendarIcon,
  arrowIcon,
}) => {
  return (
    <div className="relative w-[288px] bg-white rounded-lg shadow-md p-6 flex flex-col">
      {/* Icône et Date */}
      <div className="flex items-center mb-4">
        <Image src={calendarIcon} alt="Calendar Icon" width={26} height={26} />
        <div
          style={{
            font: 'normal normal 600 14px/18px Fira Sans',
            letterSpacing: '0.42px',
            color: '#AA3E98',
            textTransform: 'uppercase',
            textAlign: 'left',
            opacity: 1,
          }}
          className="ml-2"
        >
          {date}
        </div>
      </div>

      {/* Titre */}
      <div
        style={{
          font: 'normal normal bold 22px/30px Antonio',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
        className="mb-4"
      >
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          font: 'normal normal normal 14px/20px Fira Sans',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
        className="mb-4"
      >
        {description}
      </div>

      {/* Bouton Lire la suite */}
      <div
        style={{
          font: 'normal normal bold 15px/18px Fira Sans',
          letterSpacing: '0.45px',
          color: '#59BDBB',
          textAlign: 'left',
          opacity: 1,
        }}
        className="mt-auto flex items-center cursor-pointer"
      >
        <Image src={arrowIcon} alt="Arrow Icon" width={21} height={16} className="mr-2" />
        <div>Lire la suite</div>
      </div>
    </div>
  );
};

export default SimpleCard;
