import React from 'react';
import Header from '../components/Header';
import FormikForm from '../components/FormikForm';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4'>
      <div className='w-full max-w-md bg-white px-6 md:px-10 py-8 rounded-[24px] shadow-[#5C636B14] flex flex-col gap-6'>
        {/* Header */}
        <div className='w-full'>
          <Header />
        </div>

        {/* Social Icons */}
        <div className='w-full flex gap-4 sm:gap-6 text-2xl sm:text-2xl'>
          {['pi-apple', 'pi-facebook', 'pi-google'].map((icon) => (
            <div
              key={icon}
              className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F6F6F6] rounded-full'
            >
              <i className={`pi ${icon}`}></i>
            </div>
          ))}
        </div>
    
        {/* Form */}
        <div className='w-full flex flex-col gap-5 text-sm mb-10'>
          <div>
            <div className='text-[#1A071066] mb-4 md:text-left'>
              or login with email
            </div>
            <FormikForm mode='login' onSuccess={() => navigate('/dashboard')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
