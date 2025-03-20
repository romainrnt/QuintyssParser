import React from 'react';

import Image from 'next/image';

import spectaclemedea from '../../assets/detailscompagnie/spectaclemedea.png';

const SectionOne: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1188px] mx-auto px-4 lg:px-[70px]">
      <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] lg:gap-[38px] items-start">
        {/* Image container */}
        <div className="w-[300px] h-[458px] mx-auto lg:mx-0">
          <Image
            src={spectaclemedea}
            alt="Première image"
            width={300}
            height={458}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Text container */}
        <div
          className="mt-6 lg:mt-0 flex flex-col justify-between h-[458px]"
          style={{
            fontFamily: 'Fira Sans',
            fontSize: '15px',
            lineHeight: '25px',
            color: '#00252B',
          }}
        >
          {/* Texte "En parallèle" */}
          <div>
            <div
              style={{
                font: 'normal normal bold 24px/25px Antonio',
                color: '#960F05',
                textAlign: 'left',
                marginBottom: '12px',
              }}
            >
              En parallèle,
            </div>
            <div style={{ marginBottom: '22px' }}>
              Silvia a fait partie de la Ligue d&apos;Improvisation Professionnelle Suisse, en
              Suisse d&apos;abord, puis à l&apos;étranger, en Belgique, au Canada, en Italie et en
              France. Elle a ainsi participé au Mondial d&apos;Improvisation Théâtrale, à plusieurs
              shows TV à la télévision de Montréal et au Festival canadien Juste pour Rire.
            </div>
          </div>

          {/* Texte "Depuis" */}
          <div>
            <div
              style={{
                font: 'normal normal bold 24px/25px Antonio',
                color: '#960F05',
                textAlign: 'left',
                marginBottom: '12px',
              }}
            >
              Depuis,
            </div>
            <div style={{ marginBottom: '22px' }}>
              elle est revenue vers un travail théâtral plus formel, notamment avec Patrick Mohr,
              Pierre Rosat, Agnès Boulmer, Miguel V. Fernandez, Stephan Parent, Roberto Salomon,
              Christine Aebi, Patrick Brunet et Andrea Novicov, les Productions Rêves en Stock, etc.
              autant de metteur-e-s en scène pour lesquel-le-s elle a joué ces dix dernières années.
            </div>
          </div>

          {/* Texte "En 2001" */}
          <div>
            <div
              style={{
                font: 'normal normal bold 24px/25px Antonio',
                color: '#960F05',
                textAlign: 'left',
                marginBottom: '12px',
              }}
            >
              En 2001,
            </div>
            <div>
              elle crée la compagnie Apsara à Genève, assumant à la fois la conception, le jeu et
              parfois l&apos;écriture des œuvres proposées. Outre la Suisse, ses spectacles ont
              tourné dans de nombreux pays : Suisse, Brésil, Cuba, Algérie, Tunisie, Maroc,
              Salvador, Sénégal, Israël, Liban, Colombie Britannique, USA, Canada, Bénin, Haïti,
              Côte d&apos;Ivoire, Guinée et au Togo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
