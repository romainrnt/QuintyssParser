import React from 'react';

import Image from 'next/image';

import spectacle from '../../assets/ActuPage/spectacle.png';

const SecondArrow: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-8 -mt-8">
      <div className="relative w-full md:w-[450px] flex-shrink-0">
        <div className="relative w-11 ml-4 md:ml-[100px]">
          <div
            className="relative w-11 h-[205px] bg-[#59BDBB]"
            style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
          >
            <div className="absolute left-3 top-[calc(50%-10px)] w-5 h-5 bg-white rounded-full" />
          </div>

          <div className="absolute left-0 top-[50%]">
            <div
              className="absolute text-6xl md:text-7xl xl:text-[90px] font-antonio font-bold leading-none whitespace-nowrap"
              style={{
                color: '#59BDBB',
                textShadow: '8px 5px 0px #59BDBB33',
                left: 'calc(80px + 11px)',
                top: 'calc(-1.2em)',
                transform: 'translateY(-10px)',
              }}
            >
              2005
            </div>
            <div className="absolute left-11 w-[150px] md:w-[250px] border-t-4 border-[#59BDBB]" />
          </div>

          <div
            className="absolute -bottom-[27px] left-0 w-0 h-0
              border-l-[22px] border-r-[22px] border-t-[27px]
              border-l-transparent border-r-transparent border-t-[#59BDBB]"
          />
        </div>
      </div>
      <div className="w-full md:w-[700px] -mt-3">
        <p className="text-[#09252D] font-fira font-light text-[13px] md:text-[15px] leading-relaxed">
          {/* En 2005 « Medea in Spain » au Théâtre Pitoëff à Genève fait revivre Médée, transposée à
          notre époque, confrontant « son identité de femme au mariage ». Cette « barbare moderne »
          n'est autre que l'une de ces femmes d'aujourd'hui qui subissent leur sort en silence
          jusqu'à ce que la fureur, la folie, résultat d'une douleur charnelle et psychique,
          s'empare de leur esprit et les pousse à rechercher leur liberté, leur identité, en
          commettant l'irréparable : l'infanticide. Par le biais du mythe de Médée, il s'agit de
          redonner la parole à l'humanité et d'ouvrir les yeux sur le for intérieur de chacun et
          éviter ainsi de reproduire constamment les mêmes schémas. */}
        </p>
      </div>
      <div className="w-full md:w-[200px] md:pl-8 -mt-3">
        <div className="relative inline-block mt-2 mb-12">
          <div className="absolute -top-[30px] -right-[25px] w-[70px] h-[70px] bg-[#59BDBB] rounded z-0" />
          <Image
            src={spectacle}
            alt="Affiche du spectacle Medea in Spain"
            width={170}
            height={260}
            className="rounded relative z-10"
            style={{ boxShadow: '8px 8px 0px #59BDBB33' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondArrow;
