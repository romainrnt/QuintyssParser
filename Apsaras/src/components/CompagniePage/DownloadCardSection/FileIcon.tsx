import React from 'react';

import Image from 'next/image';

import fileIcon from '../../assets/downloadcard/iconfichierdwl.png';

const FileIcon: React.FC = () => {
  return (
    <div className="flex-shrink-0 mb-4 sm:mb-0">
      <Image
        src={fileIcon}
        alt="File Icon"
        width={70}
        height={83}
        className="w-[50px] h-[60px] sm:w-[60px] sm:h-[70px] lg:w-[70px] lg:h-[83px] transition-all"
      />
    </div>
  );
};

export default FileIcon;
