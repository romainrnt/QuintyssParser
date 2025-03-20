import React from 'react';

const HeroFooter: React.FC = () => {
  return (
    <div className="absolute top-[670px] lg:top-[770px] left-0 w-full lg:w-[calc(100vw-200px)] bg-[#09252D] z-20">
      {/* Large screens */}
      <div className="hidden lg:flex items-center h-[120px]">
        <div className="w-full flex">
          <div className="ml-[202px] whitespace-nowrap">
            <div
              style={{
                font: 'normal normal 200 16px Fira Sans',
                letterSpacing: '0.48px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 1,
              }}
              className="mb-0"
            >
              Conception et Texte
            </div>
            <div
              style={{
                font: 'normal normal 600 18px Antonio',
                letterSpacing: '0.72px',
                color: '#FFFFFF',
                opacity: 1,
                marginTop: '5px',
              }}
            >
              Silvia Barreiros
            </div>
          </div>

          <div className="ml-[103px] whitespace-nowrap">
            <div
              style={{
                font: 'normal normal 200 16px Fira Sans',
                letterSpacing: '0.48px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 1,
              }}
              className="mb-0"
            >
              Mise en Scene
            </div>
            <div
              style={{
                font: 'normal normal 600 18px Antonio',
                letterSpacing: '0.72px',
                color: '#FFFFFF',
                opacity: 1,
                marginTop: '5px',
              }}
            >
              Sandra Amodio
            </div>
          </div>

          <div className="ml-[103px] whitespace-nowrap">
            <div
              style={{
                font: 'normal normal 200 16px Fira Sans',
                letterSpacing: '0.48px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 1,
              }}
              className="mb-0"
            >
              Direction Musicale
            </div>
            <div
              style={{
                font: 'normal normal 600 18px Antonio',
                letterSpacing: '0.72px',
                color: '#FFFFFF',
                opacity: 1,
                marginTop: '5px',
              }}
            >
              Ondina Duany
            </div>
          </div>

          <div className="ml-[103px] whitespace-nowrap">
            <div
              style={{
                font: 'normal normal 200 16px Fira Sans',
                letterSpacing: '0.48px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 1,
              }}
              className="mb-0"
            >
              Collaboration artistique
            </div>
            <div
              style={{
                font: 'normal normal 600 18px Antonio',
                letterSpacing: '0.72px',
                color: '#FFFFFF',
                opacity: 1,
                marginTop: '5px',
              }}
            >
              Robert Nortik
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div
        className="lg:hidden flex flex-col px-6 sm:px-8 pt-6 pb-8 space-y-4"
        style={{ minHeight: 'auto', paddingBottom: '16px' }}
      >
        <div className="text-left">
          <div
            style={{
              font: 'normal normal 200 16px Fira Sans',
              letterSpacing: '0.48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              opacity: 1,
            }}
            className="mb-0"
          >
            Conception et Texte
          </div>
          <div
            style={{
              font: 'normal normal 600 18px Antonio',
              letterSpacing: '0.72px',
              color: '#FFFFFF',
              opacity: 1,
              marginTop: '5px',
            }}
          >
            Silvia Barreiros
          </div>
        </div>
        <div className="text-left">
          <div
            style={{
              font: 'normal normal 200 16px Fira Sans',
              letterSpacing: '0.48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              opacity: 1,
            }}
            className="mb-0"
          >
            Mise en Scene
          </div>
          <div
            style={{
              font: 'normal normal 600 18px Antonio',
              letterSpacing: '0.72px',
              color: '#FFFFFF',
              opacity: 1,
              marginTop: '5px',
            }}
          >
            Sandra Amodio
          </div>
        </div>
        <div className="text-left">
          <div
            style={{
              font: 'normal normal 200 16px Fira Sans',
              letterSpacing: '0.48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              opacity: 1,
            }}
            className="mb-0"
          >
            Direction Musicale
          </div>
          <div
            style={{
              font: 'normal normal 600 18px Antonio',
              letterSpacing: '0.72px',
              color: '#FFFFFF',
              opacity: 1,
              marginTop: '5px',
            }}
          >
            Ondina Duany
          </div>
        </div>
        <div className="text-left">
          <div
            style={{
              font: 'normal normal 200 16px Fira Sans',
              letterSpacing: '0.48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              opacity: 1,
            }}
            className="mb-0"
          >
            Collaboration artistique
          </div>
          <div
            style={{
              font: 'normal normal 600 18px Antonio',
              letterSpacing: '0.72px',
              color: '#FFFFFF',
              opacity: 1,
              marginTop: '5px',
            }}
          >
            Robert Nortik
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
