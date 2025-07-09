import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Illustration.png';
import SubmitButton from '../components/SubmitButton';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4'>
      <div className='w-full max-w-md bg-white rounded-[24px] shadow-[#5C636B14] flex flex-col overflow-hidden'>
        {/* Image Section */}
        <div className='relative w-full h-[200px] sm:h-[250px] md:h-[296px] bg-[#EF498F24]'>
          <div className='absolute inset-0 px-10'>
            <img
              src={image}
              alt='Success'
              className='w-full h-full object-contain'
            />
          </div>
          <i
            className='pi pi-times absolute top-4 right-4 z-10 text-xl cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
        
        <div className='flex flex-col gap-8 px-4 py-6 sm:px-6 md:px-10 md:py-10'>
          <h2 className='text-[28px] sm:text-[36px] md:text-[35px] font-semibold text-[#1A0710D9] leading-[1.1]'>
            You have successfully registered!
          </h2>
          <SubmitButton content='Go to Login' onClick={() => navigate('/login')} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
