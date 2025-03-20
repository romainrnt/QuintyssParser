import React from 'react';

const FormHeader: React.FC = () => {
  return (
    <>
      <div
        style={{
          font: 'normal normal bold 35px/130px Antonio',
          letterSpacing: '0.53px',
          color: '#960F05',
          textShadow: '4px 4px 0px #FFFFFF',
          textTransform: 'uppercase',
          textAlign: 'left',
          opacity: 1,
        }}
        className="ml-[15px] mb-[-25px] mt-[-30px]"
      >
        NOUS CONTACTER
      </div>
      <div
        className="h-[4px] w-[321px] absolute left-0"
        style={{
          background:
            'transparent linear-gradient(270deg, #FFFFFF 0%, #94362C 69%, #960F05 100%) 0% 0% no-repeat padding-box',
        }}
      />
    </>
  );
};

export default FormHeader;
