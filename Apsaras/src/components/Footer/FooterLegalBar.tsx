import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import arrowIcon from '../assets/image.png';

const FooterLegalBar: FC = () => (
  <div className="relative z-20 flex xs:justify-center lg:justify-between items-center py-4 bg-[#09252D] flex-col lg:flex-row lg:py-8 lg:px-16 xl:px-32">
    <div className="flex flex-col lg:flex-row items-center">
      <button
        type="button"
        className="hover:underline"
        style={{
          font: 'normal normal 600 14px/19px Fira Sans',
          letterSpacing: '0.42px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          opacity: 0.8,
        }}
      >
        Mentions légales
      </button>
      <div className="hidden w-px h-8 mx-8 bg-white lg:block" />
      <button
        type="button"
        className="hover:underline"
        style={{
          font: 'normal normal 600 14px/19px Fira Sans',
          letterSpacing: '0.42px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          opacity: 0.8,
        }}
      >
        Crédits
      </button>
      <div className="hidden w-px h-8 mx-8 bg-white lg:block" />
      <p
        style={{
          font: 'normal normal normal 14px/19px Fira Sans',
          letterSpacing: '0px',
          color: '#FFFFFF',
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} - Tous droits réservés
      </p>
    </div>

    {/* Made by Quintyss Design */}
    <Link href="https://quintyss.com/" target="_blank">
      <p
        className="cursor-pointer"
        style={{
          font: 'normal normal 300 14px/19px Fira Sans',
          letterSpacing: '0px',
          color: '#FFFFFF',
          textAlign: 'right',
          opacity: 1,
        }}
      >
        Made by Quintyss Design
      </p>
    </Link>

    {/* Bouton pour remonter en haut */}
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="hidden lg:block absolute z-30 right-20 xl:right-[25px] -top-6"
      style={{
        width: '50px',
        height: '50px',
        background: '#59BDBB',
        boxShadow: '-5px 5px 0px #09252D33',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
      }}
    >
      <Image src={arrowIcon} alt="Arrow Up" width={15} height={15} />
    </button>
  </div>
);

export default FooterLegalBar;
