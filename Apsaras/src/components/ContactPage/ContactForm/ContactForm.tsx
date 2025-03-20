import React from 'react';

import FormHeader from './FormHeader';
import FormInputs from './FormInputs';
import SubmitButton from './SubmitButton';

const ContactForm: React.FC = () => {
  return (
    <div className="relative bg-white shadow-[5px_5px_20px_rgba(9,37,45,0.1)] w-[500px] h-[830px] p-6 mx-auto md:mx-0 rounded-[4px]">
      <FormHeader />
      <form className="flex flex-col gap-4 mt-[54px]">
        <FormInputs />
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
