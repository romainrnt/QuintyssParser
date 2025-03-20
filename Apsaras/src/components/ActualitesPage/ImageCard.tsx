import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface ImageCardProps {
  image: StaticImageData;
  altText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, altText }) => {
  return (
    <div className="relative w-[288px] h-[414px] bg-white rounded-lg shadow-md">
      <div className="relative w-full h-full bg-cover bg-no-repeat rounded-lg">
        <Image src={image} alt={altText} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
    </div>
  );
};

export default ImageCard;
