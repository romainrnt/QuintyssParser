// LanguageSelector.tsx
import React from 'react';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { IoChevronDown } from 'react-icons/io5';

import LanguageDropdown from '../LanguageDropdown/LanguageDropDown';

interface LanguageSelectorProps {
  isLangOpen: boolean;
  toggleLang: () => void;
  flagFrench: StaticImageData;
  flagSpain: StaticImageData;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  isLangOpen,
  toggleLang,
  flagFrench,
  flagSpain,
}) => {
  return (
    <div className="hidden lg:flex items-center gap-x-2 absolute right-[180px] top-[50%] transform -translate-y-1/2">
      <Image src={flagFrench} alt="Drapeau Français" className="w-[25px] h-[25px] object-cover" />
      <IoChevronDown
        className={clsx(
          'text-[#09252D] text-[20px] cursor-pointer transition-transform duration-200',
          { 'rotate-180': isLangOpen },
        )}
        onClick={toggleLang}
      />
      <LanguageDropdown isOpen={isLangOpen} flagFrench={flagFrench} flagSpain={flagSpain} />
    </div>
  );
};

export default LanguageSelector;
