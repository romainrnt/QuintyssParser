import React from 'react';

import Image from 'next/image';

import iconPlay from '../../assets/GalerieMediaPage/icon play white outlined@2x.png';
import iconPicsPurple from '../../assets/GalerieMediaPage/iconpicspurple.png';
import filterImage from '../../assets/GalerieMediaPage/masquepurple.png';
import pictureMedia1 from '../../assets/GalerieMediaPage/picture media 1@2x.png';
import pictureMedia2 from '../../assets/GalerieMediaPage/picture media 2@2x.png';
import pictureMedia4 from '../../assets/GalerieMediaPage/picture media 4@2x.png';
import pictureMedia3 from '../../assets/GalerieMediaPage/picture média 3@2x.png';
import pictureVideo4 from '../../assets/GalerieMediaPage/picture vidéo@2x.png';

const GalerieContent: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-none gap-4 lg:gap-0 relative mt-8 lg:mt-0">
        <div className="lg:absolute lg:top-[80px] lg:left-[196px] w-full lg:w-[240px]">
          <Image src={pictureMedia1} alt="Media 1" className="w-full aspect-[3/4] object-cover" />
        </div>
        <div className="lg:absolute lg:top-[420px] lg:left-[196px] w-full lg:w-[240px]">
          <Image src={pictureMedia2} alt="Media 2" className="w-full aspect-[3/4] object-cover" />
        </div>
        <div className="lg:absolute lg:top-0 lg:left-[456px] w-full lg:w-[360px]">
          <Image
            src={pictureMedia3}
            alt="Media 3"
            className="w-full aspect-[3/4] md:aspect-[4/5] lg:h-[480px] object-cover"
          />
        </div>
        <div className="lg:absolute lg:top-[500px] lg:left-[456px] w-full lg:w-[360px]">
          <Image src={pictureMedia4} alt="Media 4" className="w-full aspect-[3/2] object-cover" />
        </div>
      </div>

      <div className="relative mt-6 lg:mt-0 lg:absolute lg:top-[168px] lg:left-[838px] w-full lg:w-[480px]">
        {/* Video with mask */}
        <div className="relative">
          <Image
            src={pictureVideo4}
            alt="Video 4"
            className="w-full aspect-video lg:aspect-square object-cover"
          />
          <div className="absolute inset-0">
            <Image src={filterImage} alt="Filter" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={iconPlay} alt="Play Icon" width={64} height={64} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="group flex flex-col items-center w-full">
            <div className="inline-flex flex-col items-center">
              <div className="flex items-end justify-center gap-3 mb-2">
                <Image
                  src={iconPicsPurple}
                  alt="Icon Pics Purple"
                  width={45}
                  height={44}
                  className="opacity-100"
                />
                <div
                  className="text-[#AA3E98]"
                  style={{
                    font: 'normal normal 300 26px/18px Fira Sans',
                    letterSpacing: '0px',
                    color: '#AA3E98',
                    textAlign: 'right',
                    opacity: 1,
                  }}
                >
                  Toutes nos photos et vidéos
                </div>
              </div>
              <div className="h-[1px] bg-[#AA3E98] w-full group-hover:opacity-0 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalerieContent;
