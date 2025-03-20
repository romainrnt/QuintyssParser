import React from 'react';

import Image from 'next/image';

import souligneDegradé from '../../assets/ContactPage/souligné dégradé rouge et blanc@2x.png';

const UnderlineSection: React.FC = () => {
  return (
    <Image
      src={souligneDegradé}
      alt="Gradient line"
      width={441}
      height={4}
      className="w-full h-full object-cover"
    />
  );
};

export default UnderlineSection;
