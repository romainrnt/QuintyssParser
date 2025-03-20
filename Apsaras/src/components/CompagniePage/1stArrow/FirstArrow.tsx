import React from 'react';

const FirstArrow: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-8 py-12">
      <div className="relative w-full md:w-[450px] flex-shrink-0">
        <div className="relative w-11 ml-4 md:ml-[100px]">
          <div className="h-[233px] w-11 bg-[#09252D]">
            <div className="absolute left-3 top-[calc(75%-10px)] w-5 h-5 bg-white rounded-full" />
          </div>
          <div className="absolute left-0 top-[75%]">
            <div
              className="absolute text-6xl md:text-7xl xl:text-[90px] font-antonio font-bold leading-none whitespace-nowrap"
              style={{
                color: '#09252D',
                textShadow: '8px 5px 0px #09252D33',
                left: 'calc(80px + 11px)',
                top: 'calc(-1.2em)',
                transform: 'translateY(-10px)',
              }}
            >
              2002
            </div>
            <div className="absolute left-11 w-[150px] md:w-[250px] border-t-4 border-[#09252D]" />
          </div>
          <div
            className="absolute -bottom-[27px] left-0 w-0 h-0
              border-l-[22px] border-r-[22px] border-t-[27px]
              border-l-transparent border-r-transparent border-t-[#09252D]"
          />
        </div>
      </div>
      <div className="w-full md:w-auto flex-1 max-w-[600px] pt-8 md:pt-[65px] pl-4 md:pl-[0px]">
        <p className="text-[#09252D] font-fira font-light text-[13px] md:text-[15px] leading-relaxed">
          En 2002 « Dolores… En La Majeur » au Théâtre du Galpon à Genève mettait en scène une
          danseuse de Cabaret dans les Années folles à Madrid et à La Havane, confrontée à «
          l&rsquo;amour et l&rsquo;art ». Elle a tourné à Cuba et en Suisse en 2003, au Brésil en
          2005 et au Salvador en octobre 2007.
        </p>
      </div>
    </div>
  );
};

export default FirstArrow;
