import React from 'react';

import Image from 'next/image';

import iconMailSurvolRoundedBlack from '../../assets/ContactPage/icon mail outlined rounded black.png';
import iconMailOutlinedRoundedWhite from '../../assets/ContactPage/icon mail outlined rounded white@2x.png';

const ContactDetails: React.FC = () => {
  return (
    <div className="flex flex-col w-full sm:px-6 lg:px-0">
      <div className="relative w-full lg:w-[465px] lg:absolute lg:top-[135px] lg:left-[190px]">
        {/* Titre : Nous Contacter */}
        <div className="mb-8">
          <h1
            className="text-left font-bold"
            style={{
              width: '465px',
              height: '193px',
              font: 'normal normal bold 80px/90px Antonio',
              letterSpacing: '0px',
              color: '#FFFFFF',
              textShadow: '8px 5px 0px #09252D33',
              opacity: 1,
            }}
          >
            Nous Contacter
          </h1>
        </div>

        {/* Informations de contact */}
        <div className="space-y-6">
          {/* Adresse */}
          <div
            className="text-left"
            style={{
              width: '331px',
              height: '149px',
              font: 'normal normal normal 26px/38px Fira Sans',
              letterSpacing: '0px',
              color: '#FFFFFF',
              opacity: 1,
            }}
          >
            Company Apsara <br />
            Rue de Neuchâtel 43 <br />
            1201 Geneva Switzerland
          </div>

          {/* Adresse email avec hover */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <Image
              src={iconMailOutlinedRoundedWhite}
              alt="Mail Icon"
              width={38}
              height={32}
              className="w-[38px] h-[32px] group-hover:hidden"
            />
            <Image
              src={iconMailSurvolRoundedBlack}
              alt="Mail Icon Black"
              width={38}
              height={32}
              className="w-[38px] h-[32px] hidden group-hover:block"
            />
            <div
              style={{
                width: '220px',
                height: '40px',
                font: 'normal normal bold 26px/32px Fira Sans',
                letterSpacing: '1.04px',
                textAlign: 'left',
                opacity: 1,
              }}
              className="text-[#FFFFFF] group-hover:text-[#000000] transition-colors"
            >
              info@apsara.ch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
