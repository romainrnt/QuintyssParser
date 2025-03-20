import React from 'react';

const ThirdArrow: React.FC = () => {
  return (
    <div className="relative mb-5">
      <div
        style={{
          font: 'normal normal bold 90px/130px Antonio',
          letterSpacing: '0px',
          color: '#960F05',
          textAlign: 'left',
          textShadow: '8px 5px 0px #960F0533',
          opacity: 1,
        }}
        className="absolute left-[234px] top-[-20px]"
      >
        2009
      </div>
      <div
        style={{
          font: 'normal normal 300 14px/21px Fira Sans',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute w-[800px] h-[167px] left-[448px] top-[35px]"
      >
        En 2009 « Les papiers de l’amour » au Théâtre Pitoëff à Genève confronte une femme suisse,
        de confession juive, à l’amour qu’elle porte à un Palestinien. Située à Genève et dans
        l’actualité du Moyen-Orient, elle pourrait se raconter partout ailleurs où les frontières
        tentent d’être opaques aux liens unissant des êtres qui s’aiment. Cette pièce est un
        sauf-conduit pour l’espoir. L’objectif principal est de sensibiliser au danger du racisme en
        traitant le thème des mariages mixtes en Suisse et l’atteinte aux droits de l’homme : celui
        d’aimer qui l’on veut et de fonder avec lui une famille. Tournée en 2012 en Tunisie, au
        Maroc et au Sénégal, en 2013 en Israël et au Liban. En 2015 elle participe au Festival de la
        Francophonie en Colombie Britannique (Victoria et Vancouver) et Atlanta, USA.
      </div>
      <div className="relative ml-[130px] w-11">
        <div
          className="relative w-11 h-[193px] bg-[#960F05] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[37px]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute bottom-[60px] left-3 w-5 h-5 bg-white rounded-full" />
        </div>
        <div className="absolute left-11 top-[123px] w-[250px] border-t-4 border-[#960F05]" />
        <div className="absolute top-[193px] left-0 w-11 h-[27px] border-l-[22px] border-r-[22px] border-t-[27px] border-l-transparent border-r-transparent border-t-[#960F05]" />
      </div>
    </div>
  );
};

export default ThirdArrow;
