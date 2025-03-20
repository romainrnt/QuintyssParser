import { FC } from 'react';

import Image from 'next/image';

import iconMail from '../assets/iconmail.png';
import FacebookLogo from '../assets/logo-social-media-white/facebook.svg';
import InstagramLogo from '../assets/logo-social-media-white/instagram.svg';
import LinkedinLogo from '../assets/logo-social-media-white/linkedin.svg';
import TwitterLogo from '../assets/logo-social-media-white/twitter.svg';
import YoutubeLogo from '../assets/logo-social-media-white/youtube.svg';

const FooterSocialLinks: FC = () => (
  <div className="flex flex-col gap-y-6 lg:w-1/4">
    <div
      style={{
        width: '240px',
        height: '24px',
        font: 'normal normal 300 20px/28px Fira Sans',
        letterSpacing: '0.4px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        opacity: 1,
        textAlign: 'left',
      }}
    >
      NOUS SUIVRE
    </div>
    <div className="flex justify-start items-center gap-x-6 pb-6">
      <Image src={FacebookLogo} alt="Facebook" width={20} height={33} className="cursor-pointer" />
      <Image
        src={InstagramLogo}
        alt="Instagram"
        width={20}
        height={33}
        className="cursor-pointer"
      />
      <Image src={LinkedinLogo} alt="Linkedin" width={20} height={33} className="cursor-pointer" />
      <Image src={TwitterLogo} alt="Twitter" width={20} height={33} className="cursor-pointer" />
      <Image src={YoutubeLogo} alt="Youtube" width={20} height={33} className="cursor-pointer" />
    </div>

    <div
      style={{
        width: '240px',
        height: '24px',
        font: 'normal normal 300 20px/28px Fira Sans',
        letterSpacing: '0.4px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        opacity: 1,
        textAlign: 'left',
      }}
    >
      NOUS JOINDRE
    </div>
    <div
      style={{
        font: 'normal normal bold 20px/24px Fira Sans',
        letterSpacing: '0.8px',
        color: '#FFFFFF',
        opacity: 1,
        textAlign: 'left',
      }}
      className="flex items-center group"
    >
      <Image
        src={iconMail}
        alt="Mail Icon"
        width={20}
        height={20}
        className="mr-2 hidden group-hover:inline-block"
      />
      info@apsara.ch
    </div>
  </div>
);

export default FooterSocialLinks;
