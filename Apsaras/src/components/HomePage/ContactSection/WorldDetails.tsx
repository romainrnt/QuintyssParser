import React from 'react';

const WorldDetails: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 lg:w-[435px] lg:absolute lg:right-[150px]">
      <div
        className="text-left lg:text-right text-white lg:text-[#59BDBB]"
        style={{
          font: 'normal normal bold 22px/26px Fira Sans',
          letterSpacing: '0.44px',
          opacity: 1,
        }}
      >
        Nous intervenons dans le monde entier
      </div>

      <div
        className="text-left lg:text-right text-white"
        style={{
          font: 'normal normal normal 17px/26px Fira Sans',
          letterSpacing: '0px',
          opacity: 1,
        }}
      >
        Lieux dans lesquels nos spectacles ont été joués :
      </div>

      <div
        className="text-left lg:text-right text-white"
        style={{
          font: 'normal normal normal 17px/26px Fira Sans',
          letterSpacing: '0px',
          opacity: 1,
        }}
      >
        <strong>Genève, Zürich, Fribourg, Lausanne, Tavannes, Versoix</strong> - SUISSE <br />
        <strong>Montréal, Québec, Victoria, Vancouver</strong> - CANADA <br />
        <strong>Atrokpocodji, Cotonou, Parakou, Ouidah</strong> - BÉNIN <br />
        <strong>Brazzaville</strong> - CONGO <br />
        <strong>Béjaïa, Alger</strong> - ALGÉRIE <br />
        <strong>Carthage, Tunis, Kef, Gafsa</strong> - TUNISIE <br />
        <strong>Abidjan</strong> - CÔTE D&apos;IVOIRE <br />
        <strong>Kaolack</strong> - SÉNÉGAL <br />
        <strong>Lomé</strong> - TOGO <br />
        <strong>Matanzas, Granma, La Havane</strong> - CUBA <br />
        <strong>Lima</strong> - PÉROU <br />
        <strong>La Paz</strong> - BOLIVIE <br />
        <strong>Sciez</strong> - FRANCE <br />
        <strong>Conakry</strong> - GUINÉE <br />
        <strong>Beyrouth</strong> - LIBAN <br />
        <strong>Jaffa</strong> - ISRAËL <br />
        <strong>Marrakech</strong> - MAROC <br />
        <strong>Porto Alegre</strong> - BRÉSIL
      </div>
    </div>
  );
};

export default WorldDetails;
