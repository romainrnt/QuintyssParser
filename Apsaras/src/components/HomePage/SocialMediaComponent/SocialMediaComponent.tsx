import React from 'react';

import Image from 'next/image';

import facebookIcon from '../../assets/logo-social-media/facebook.svg';
import instagramIcon from '../../assets/logo-social-media/instagram.svg';
import linkedinIcon from '../../assets/logo-social-media/linkedin.svg';
import twitterIcon from '../../assets/logo-social-media/twitter.svg';
import youtubeIcon from '../../assets/logo-social-media/youtube.svg';

type SocialMediaComponentProps = {
  type: 'home' | 'normal';
};

const SocialMediaComponent: React.FC<SocialMediaComponentProps> = ({ type }) => {
  const topPosition = type === 'home' ? '798px' : '553px';

  return (
    <div
      className="absolute right-[0px] w-[80px] h-[322px] bg-white shadow-lg flex items-center justify-center z-20"
      style={{
        top: topPosition,
        boxShadow: '-10px 10px 0px #09252D0D',
        opacity: 1,
      }}
    >
      <div className="w-[31px] h-[259px] flex flex-col items-center space-y-[29.5px]">
        <button type="button" className="hover:opacity-80 transition-opacity">
          <Image
            src={facebookIcon}
            alt="Facebook"
            width={31}
            height={31}
            className="w-[31px] h-[31px]"
          />
        </button>
        <button type="button" className="hover:opacity-80 transition-opacity">
          <Image
            src={youtubeIcon}
            alt="YouTube"
            width={31}
            height={31}
            className="w-[31px] h-[31px]"
          />
        </button>
        <button type="button" className="hover:opacity-80 transition-opacity">
          <Image
            src={linkedinIcon}
            alt="LinkedIn"
            width={31}
            height={31}
            className="w-[31px] h-[31px]"
          />
        </button>
        <button type="button" className="hover:opacity-80 transition-opacity">
          <Image
            src={twitterIcon}
            alt="Twitter"
            width={31}
            height={31}
            className="w-[31px] h-[31px]"
          />
        </button>
        <button type="button" className="hover:opacity-80 transition-opacity">
          <Image
            src={instagramIcon}
            alt="Instagram"
            width={31}
            height={31}
            className="w-[31px] h-[31px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
