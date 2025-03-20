import React from 'react';

import Image from 'next/image';

import coindroit from '../../assets/detailscompagnie/coinsdroite.png';
import coingauche from '../../assets/detailscompagnie/coinsgauche.png';
import spectacle2 from '../../assets/detailscompagnie/visuelspectacle2.png';

const SectionTwo: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1188px] mx-auto lg:h-[458px] px-4 lg:px-0">
      {/* Image à droite avec coins */}
      <div className="relative w-full max-w-[300px] h-[458px] mx-auto lg:mx-0 lg:absolute lg:top-0 lg:right-[78px] overflow-visible">
        <div className="relative w-full h-full">
          <Image
            src={spectacle2}
            alt="Section 2 image"
            width={300}
            height={458}
            objectFit="cover"
          />
          {/* Coin gauche en haut */}
          <div className="absolute top-[-5px] left-[-5px] z-10">
            <Image src={coingauche} alt="Coin gauche" width={104} height={104} />
          </div>
          {/* Coin droit en bas */}
          <div className="absolute bottom-[-5px] right-[-5px] z-10">
            <Image src={coindroit} alt="Coin droit" width={104} height={104} />
          </div>
        </div>
      </div>

      {/* Texte à gauche */}
      <div
        className="mt-8 lg:mt-0 lg:absolute lg:top-0 lg:left-[70px] lg:right-[418px] flex flex-col justify-between lg:h-full"
        style={{
          height: '458px',
        }}
      >
        <div className="space-y-6 lg:space-y-0">
          {/* Tournages, longs métrages et émissions radio */}
          <div>
            <div
              style={{
                font: 'normal normal bold 24px/28px Antonio',
                letterSpacing: '0px',
                color: '#960F05',
                textAlign: 'left',
                marginBottom: '12px',
              }}
            >
              Tournages, longs métrages et émissions radio
            </div>
            <div
              style={{
                font: 'normal normal normal 15px/25px Fira Sans',
                letterSpacing: '0px',
                color: '#00252B',
                textAlign: 'left',
                marginBottom: '22px',
              }}
            >
              Elle a participé à des tournages de la TSR, à des émissions radio et à deux longs-
              métrages : Jonas et Lila, à demain de A. Tanner, La mémoire des autres de Pilar
              Anguita-Mac Kay, avec Julie Depardieu et Marie-José Croze.
            </div>
          </div>

          {/* Écriture et mise en scène */}
          <div>
            <div
              style={{
                font: 'normal normal bold 24px/28px Antonio',
                letterSpacing: '0px',
                color: '#960F05',
                textAlign: 'left',
                marginBottom: '12px',
              }}
            >
              Écriture et mise en scène
            </div>
            <div
              style={{
                font: 'normal normal normal 15px/25px Fira Sans',
                letterSpacing: '0px',
                color: '#00252B',
                textAlign: 'left',
                overflow: 'hidden',
              }}
            >
              Elle écrit en 2010 Le Crime du Pullman Express qu’elle co-met en scène dans un train
              d’époque à Montreux. En 2011 elle signe la mise en scène de Romance en Fa, de Sophie
              Arthur et Sylvie Audcœur, à la Maison Chauvet-Lullin de Vernier. En 2013, elle écrit
              et mis en scène Secrets d’Alcôve au Château d’Oron, scénario historique, inspiré de la
              vie de Catherine de Watteville. En 2015 elle met en scène Les Fleurs de l’Amertume au
              Festival du Monde Arabe à Montréal et en 2016 une nouvelle version de No es Tiempo de
              Sirenas au Café Théâtre Macuba à Santiago de Cuba. Elle a également assisté Thierry
              Piguet à la mise en scène, sur deux spectacles. Elle conçoit toutes les créations de
              la Compagnie Apsara, dont elle a confié jusqu’à ce jour la mise en scène à un tiers
              pour être dirigée comme comédienne. En 2019 elle met en scène Le Lémanic, scénario
              conçu pour un bateau et met en scène « Qu’est-il arrivé à Baby Jane » d’après la pièce
              de Henry Farrell.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
