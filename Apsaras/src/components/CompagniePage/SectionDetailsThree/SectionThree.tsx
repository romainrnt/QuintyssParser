import React from 'react';

import Image from 'next/image';

import visuelcarre1 from '../../assets/detailscompagnie/visuelcarre1.png';
import visuelcarre2 from '../../assets/detailscompagnie/visuelcarre2.png';
import visuelcarre3 from '../../assets/detailscompagnie/visuelcarre3.png';
import visuelcarre4 from '../../assets/detailscompagnie/visuelcarre4.png';

const SectionThree: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1188px] mx-auto px-4 lg:px-0">
      {/* Texte */}
      <div
        style={{
          font: 'normal normal normal 15px/25px Fira Sans',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'center',
          opacity: 1,
        }}
        className="relative w-full max-w-[820px] mx-auto mt-8 lg:mt-20 mb-10 lg:mb-24"
      >
        Elle a écrit deux spectacles de la Cie Apsara : Dolores… En La Majeure en 2002, Medea in
        Spain en 2005 et conçu : Les Papiers de l&apos;Amour en 2009 et Le Temps des Sirènes en
        2013, commande à l&apos;auteur genevois Olivier Chiacchiari qu&apos;elle traduit à
        l&apos;espagnol No es Tiempo de Sirenas.
      </div>

      <div className="relative">
        {/* Images container - above red bar on desktop */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 lg:gap-[8px] lg:absolute lg:left-0 lg:right-0 lg:-bottom-[71px] z-10">
          <Image src={visuelcarre1} alt="Image 1" width={199} height={222} />
          <Image src={visuelcarre2} alt="Image 2" width={199} height={222} />
          <Image src={visuelcarre3} alt="Image 3" width={199} height={222} />
          <Image src={visuelcarre4} alt="Image 4" width={199} height={222} />
        </div>

        {/* Barre rouge - hidden on mobile */}
        <div className="hidden lg:block relative w-full h-[80px] mt-8 bg-[#960F05]" />
      </div>

      <div className="h-20 lg:h-[160px]" />
    </section>
  );
};

export default SectionThree;
