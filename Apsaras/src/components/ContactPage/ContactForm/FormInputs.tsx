import React from 'react';

const FormInputs: React.FC = () => {
  const labelStyle: React.CSSProperties = {
    font: 'normal normal medium 20px/130px Fira Sans',
    letterSpacing: '0.4px',
    color: '#09252D',
    textAlign: 'left',
    opacity: 1,
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[420px]">
        <div style={labelStyle}>
          Prénom
          <input
            type="text"
            className="mt-2 p-3 bg-[#F4F4F8] rounded-md outline-none focus:ring-2 focus:ring-[#1F485D] w-full"
          />
        </div>
        <div style={labelStyle} className="mt-2">
          Nom
          <input
            type="text"
            className="mt-2 p-3 bg-[#F4F4F8] rounded-md outline-none focus:ring-2 focus:ring-[#1F485D] w-full"
          />
        </div>
        <div style={labelStyle} className="mt-2">
          Email
          <input
            type="email"
            className="mt-2 p-3 bg-[#F4F4F8] rounded-md outline-none focus:ring-2 focus:ring-[#1F485D] w-full"
          />
        </div>
        <div style={labelStyle} className="mt-2">
          Téléphone
          <input
            type="tel"
            className="mt-2 p-3 bg-[#F4F4F8] rounded-md outline-none focus:ring-2 focus:ring-[#1F485D] w-full"
          />
        </div>
        <div style={labelStyle} className="mt-2">
          Message
          <textarea className="mt-1 p-3 bg-[#F4F4F8] rounded-md outline-none focus:ring-2 focus:ring-[#1F485D] h-[120px] resize-none w-full" />
        </div>
      </div>
    </div>
  );
};

export default FormInputs;
