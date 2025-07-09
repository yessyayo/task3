import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FormikForm from '../components/FormikForm';
import 'primeicons/primeicons.css';

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4 sm:px-6'>
      <div className='w-full max-w-[502px] bg-white px-6 sm:px-10 py-6 sm:py-10 rounded-[24px] shadow-md flex flex-col gap-6 sm:gap-8'>

        {/* Header */}
        <div className='w-full'>
          <Header />
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 sm:gap-6 text-xl sm:text-2xl'>
          {['apple', 'facebook', 'google'].map((icon) => (
            <div key={icon} className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F6F6F6] rounded-full'>
              <i className={`pi pi-${icon}`} />
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className='w-full flex flex-col gap-5 text-sm'>
          <p className='text-[#1A071066]'>or register with email</p>
          <FormikForm />
        </div>

        {/* Terms Notice */}
        <p className='text-xs text-center text-[#1B1F3B66] mt-4 px-2'>
          By continuing I agree with the{' '}
          <span className='underline text-blue-600 cursor-pointer'>
            Terms & Conditions. <br/> Privacy Policy
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
