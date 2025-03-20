// LanguageDropdown.tsx
import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { IoCheckmark } from 'react-icons/io5';

interface LanguageDropdownProps {
  isOpen: boolean;
  flagFrench: StaticImageData;
  flagSpain: StaticImageData;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isOpen, flagFrench, flagSpain }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[35px] right-1/2 translate-x-1/2 w-[160px] h-[165px] bg-white shadow-lg overflow-hidden">
      <div className="space-y-[15px] px-5">
        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 mt-[20px]">
          <div className="flex items-center">
            <Image
              src={flagFrench}
              alt="Drapeau Français"
              className="w-[30px] h-[30px] object-cover"
            />
            <span className="text-[#09252D] text-sm ml-[11px]">Français</span>
          </div>
          <IoCheckmark className="text-[#59bdbb] text-lg" />
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-50">
          <Image src={flagSpain} alt="English Flag" className="w-[30px] h-[30px] object-cover" />
          <span className="text-[#09252D] text-sm ml-[11px]">Español</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-50">
          <Image src={flagFrench} alt="Spanish Flag" className="w-[30px] h-[30px] object-cover" />
          <span className="text-[#09252D] text-sm ml-[11px]">English</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
