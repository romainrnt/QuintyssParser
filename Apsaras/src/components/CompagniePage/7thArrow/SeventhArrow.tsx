import React from 'react';

const SeventhArrow: React.FC = () => {
  return (
    <div className="relative mb-[100px]">
      <div
        style={{
          font: 'normal normal bold 90px/130px Antonio',
          letterSpacing: '0px',
          color: '#59BDBB',
          textShadow: '8px 5px 0px #59BDBB33',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute left-[234px] bottom-[30px]"
      >
        2022
      </div>
      <div
        style={{
          font: 'normal normal 300 14px/21px Fira Sans',
          letterSpacing: '0px',
          color: '#09252D',
          textAlign: 'left',
          opacity: 1,
        }}
        className="absolute w-[800px] left-[448px] top-[60px]"
      >
        En 2022 Habibi en résidence au Théâtre Pitoëff à Genève en mai 2022. Une pièce sur la «
        violence de genre », écrite et mise en scène par Silvia Barreiros. ELLE victime des
        conventions tacites du patriarcat, soumise au silence complice du voisinage, et parfois des
        autres femmes emmurées dans leurs convictions d’une fatalité qui, le croient-elles, les
        dépasse. Une première phase de travail et de représentations a eu lieu en Tunisie en automne
        2021. Une tournée est prévue en octobre 2022 en Algérie.
      </div>
      <div className="relative ml-[130px] w-11">
        <div
          className="relative w-11 h-[200px] bg-[#59BDBB] before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:h-[37px]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute bottom-[13px] left-3 w-5 h-5 bg-white rounded-full" />
        </div>
        <div className="absolute left-11 top-[177px] w-[250px] border-t-4 border-[#59BDBB]" />
        <div className="absolute top-[200px] left-0 w-11 h-[27px] border-l-[22px] border-r-[22px] border-t-[27px] border-l-transparent border-r-transparent border-t-[#59BDBB]" />
      </div>
    </div>
  );
};

export default SeventhArrow;
