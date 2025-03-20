import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface MediaCardProps {
  image: StaticImageData;
  overlayImage: StaticImageData;
  icon: StaticImageData;
  date: string;
  title: string;
  arrowIcon: StaticImageData;
  picto: StaticImageData;
}

const MediaCard: React.FC<MediaCardProps> = ({
  image,
  overlayImage,
  icon,
  date,
  title,
  arrowIcon,
  picto,
}) => {
  return (
    <div className="relative w-[288px]">
      <div className="relative w-full h-[399px] rounded-lg shadow-md overflow-hidden">
        {/* Arrière-plan */}
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <Image
            src={overlayImage}
            alt="Overlay"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>

        {/* Icône et Date */}
        <div className="absolute top-[33px] left-0 right-0 flex justify-center items-center gap-2">
          <Image src={icon} alt="Calendar Icon" width={26} height={26} />
          <div
            style={{
              font: 'normal normal 600 14px/18px Fira Sans',
              letterSpacing: '0.42px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              textAlign: 'left',
              textShadow: '0px 4px 10px #09252D66',
              opacity: 1,
            }}
          >
            {date}
          </div>
        </div>

        {/* Zone de texte */}
        <div className="absolute top-[217px] left-[24px] right-[24px] text-center text-white">
          <div
            style={{
              font: 'normal normal bold 22px/30px Antonio',
              letterSpacing: '0px',
              color: '#FFFFFF',
              textAlign: 'center',
              textShadow: '0px 4px 10px #09252D66',
              opacity: 1,
            }}
          >
            {title}
          </div>
          <div className="mt-[33px] flex justify-center items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{
                font: 'normal normal bold 15px/18px Fira Sans',
                letterSpacing: '0.45px',
                color: '#FFFFFF',
                textAlign: 'center',
                opacity: 1,
              }}
            >
              <Image src={arrowIcon} alt="Arrow Icon" width={21} height={16} />
              <div>Lire la suite</div>
            </button>
          </div>
        </div>
      </div>
      {/* Picto en bas au centre */}
      <div className="absolute bottom-[-25px] left-0 right-0 flex justify-center z-10">
        <Image src={picto} alt="Picto" width={52} height={52} />
      </div>
    </div>
  );
};

export default MediaCard;
