import React from 'react';

const FifthArrow: React.FC = () => {
  return (
    <div className="relative mb-5">
      <div
        style={{
          font: 'normal normal bold 90px/130px Antonio',
          letterSpacing: '0px',
          color: '#AA3E98',
          textAlign: 'left',
          textShadow: '8px 5px 0px #AA3E9833',
          opacity: 1,
        }}
        className="absolute left-[234px] top-[-20px]"
      >
        2016
      </div>
      <div
        style={{
          font: 'normal normal 300 14px/21px Fira Sans',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute w-[801px] h-[192px] left-[448px] top-[35px]"
      >
        En 2016 “Zokwezo” au Théâtre du Galpon à Genève. Une commande d’écriture à l’auteur
        congolais Julien Mabiala Bissila. Il s’agit d’une adaptation très libre du film culte
        d’Ettore Scola Une journée particulière - transposée en Afrique - qui confronte un homme,
        homosexuel, Boulass, et une femme, mère au foyer, Delphine, à leur solitude, à leur
        isolement, et les exclut d’une société qui les enferme dans un carcan. Un homme, une femme,
        aujourd’hui. Une Européenne, un Africain, l’histoire de 2 solitudes qui se rencontrent, se
        révèlent à elles-mêmes l’espace d’un instant qui pourtant les bouleversera. Une première
        phase de travail et représentations a eu lieu au Bénin en janvier 2016 avant la première à
        Genève fin mars 2016.
      </div>
      <div className="relative ml-[130px] w-11">
        <div
          className="relative w-11 h-[187px] bg-[#AA3E98] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[37px]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute bottom-[59px] left-3 w-5 h-5 bg-white rounded-full" />
        </div>
        <div className="absolute left-11 top-[118px] w-[250px] border-t-4 border-[#AA3E98]" />
        <div className="absolute top-[187px] left-0 w-11 h-[27px] border-l-[22px] border-r-[22px] border-t-[27px] border-l-transparent border-r-transparent border-t-[#AA3E98]" />
      </div>
    </div>
  );
};

export default FifthArrow;
