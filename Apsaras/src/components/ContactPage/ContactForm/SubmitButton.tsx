import React from 'react';

import Image from 'next/image';

import iconarrow from '../../assets/ContactPage/icon-arrow-outlined-blue@2x.png';

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      style={{
        font: 'normal normal normal 20px/28px Antonio',
        letterSpacing: '0.8px',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        textAlign: 'right',
        opacity: 1,
      }}
      className="flex items-center justify-center w-[184px] h-[54px] bg-[#59BDBB] rounded-l-md hover:opacity-90 transition-all mt-4 shadow-[-5px_5px_0px_#00908929] relative right-[-32px] ml-auto"
    >
      <Image src={iconarrow} alt="Icône d'envoi" width={24} height={18} className="mr-2" />
      Envoyer
    </button>
  );
};

export default SubmitButton;
