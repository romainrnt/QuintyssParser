import { FC } from 'react';

import Image from 'next/image';

import ApsaraLogo from '../assets/logo-apsara-blanc.png';

// FooterSection
const FooterLogo: FC = () => (
  <div className="flex flex-col gap-y-6 lg:w-1/4">
    {/* Logo */}
    <div className="w-[164px] h-[83px] mb-[40px]">
      <Image
        src={ApsaraLogo}
        alt="Apsara Logo"
        width={164}
        height={83}
        className="object-contain"
      />
    </div>

    {/* Texte d'adresse */}
    <div
      style={{
        width: '268px',
        height: '122px',
        fontFamily: '"Fira Sans", sans-serif',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '28px',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: 1,
        textAlign: 'left',
      }}
    >
      Company Apsara
      <br />
      Rue de Neuchâtel 43
      <br />
      1201 Geneva
      <br />
      SWITZERLAND
    </div>
  </div>
);

export default FooterLogo;
