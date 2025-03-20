import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface CompleteCardProps {
  image: StaticImageData;
  icon: StaticImageData;
  date: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: StaticImageData;
  picto: StaticImageData;
}

const CompleteCard: React.FC<CompleteCardProps> = ({
  image,
  icon,
  date,
  title,
  description,
  buttonText,
  buttonIcon,
  picto,
}) => {
  return (
    <div className="relative w-[288px] h-[589px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image principale */}
      <div
        className="relative w-full h-[238px] bg-cover bg-no-repeat rounded-t-lg"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div
          className="absolute w-full h-full bg-cover bg-no-repeat rounded-t-lg"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
            mixBlendMode: 'overlay',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Picto en haut à droite */}
      <div
        className="absolute"
        style={{ top: '212px', right: '20px', left: '216px', bottom: '325px' }}
      >
        <Image src={picto} alt="Picto" width={52} height={52} />
      </div>

      {/* Icône et Date */}
      <div className="absolute top-[265px] left-[24px] flex items-center gap-[12px]">
        <Image src={icon} alt="Calendar Icon" width={26} height={26} />
        <div
          style={{
            font: 'normal normal 600 14px/18px Fira Sans',
            letterSpacing: '0.42px',
            color: '#AA3E98',
            textTransform: 'uppercase',
            textAlign: 'left',
            opacity: 1,
          }}
        >
          {date}
        </div>
      </div>

      {/* Titre */}
      <div
        className="absolute top-[308px] left-[24px] right-[24px]"
        style={{
          font: 'normal normal bold 22px/30px Antonio',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        className="absolute top-[382px] left-[24px] right-[24px]"
        style={{
          font: 'normal normal normal 14px/20px Fira Sans',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        {description}
      </div>

      {/* Bouton avec flèche */}
      <div
        className="absolute bottom-[31px] left-[24px] flex items-center gap-2 cursor-pointer"
        style={{
          font: 'normal normal bold 15px/18px Fira Sans',
          letterSpacing: '0.45px',
          color: '#59BDBB',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        <Image src={buttonIcon} alt="Arrow Right Icon" width={21} height={16} />
        <div>{buttonText}</div>
      </div>
    </div>
  );
};

export default CompleteCard;
