import React from 'react';

import Image from 'next/image';

import downloadIcon from '../../assets/downloadcard/icondownload.png';

const DownloadButton: React.FC = () => {
  return (
    <div className="w-full lg:w-auto p-4 sm:p-6 lg:p-8 lg:ml-auto">
      <button
        type="button"
        className="flex items-center justify-center w-full lg:w-[191px] h-[54px] bg-[#59BDBB] rounded transition-all duration-300 hover:bg-[#960F05] focus:outline-none focus:ring-2 focus:ring-[#59BDBB] focus:ring-opacity-50"
      >
        <Image
          src={downloadIcon}
          alt="Download Icon"
          width={21}
          height={22}
          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[21px] lg:h-[22px] mr-2"
        />
        <div
          style={{
            width: '110px',
            height: '26px',
            font: 'normal normal normal 20px/28px Antonio',
            letterSpacing: '0.8px',
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            opacity: 1,
          }}
        >
          TÉLÉCHARGER
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
