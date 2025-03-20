import React from 'react';

import DownloadButton from './DownloadButton';
import FileIcon from './FileIcon';
import RedBand from './RedBand';
import TextContent from './TextContent';

const DownloadCard: React.FC = () => {
  return (
    <div className="absolute right-0 left-[240px]">
      <div className="relative rounded-md overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-md lg:shadow-[20px_2px_10px_rgba(9,37,45,0.1)]">
          <RedBand />
          <div className="flex flex-1 flex-col sm:flex-row items-center w-full p-4 sm:p-6 lg:pl-[54px] lg:py-8">
            <FileIcon />
            <TextContent />
          </div>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
