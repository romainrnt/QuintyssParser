import React from 'react';

const TextContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:ml-6 lg:ml-[25px] text-center sm:text-left">
      <div
        style={{
          font: 'normal normal bold 24px/55px Antonio',
          letterSpacing: '0px',
          color: '#00252B',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        Article Plein Tubes
      </div>
      <div
        style={{
          font: 'normal normal 300 16px/40px Fira Sans',
          letterSpacing: '0px',
          color: '#1F485D',
          textAlign: 'left',
          opacity: 1,
        }}
      >
        Télécharger le témoignage de Silvia Barreiros{' '}
        <div
          style={{
            font: 'normal normal 600 15px/40px Fira Sans',
            letterSpacing: '0px',
            color: '#960F05',
            textTransform: 'uppercase',
            opacity: 1,
            display: 'inline',
          }}
        >
          [PDF]
        </div>
      </div>
    </div>
  );
};

export default TextContent;
