import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === '/';
  const isLogin = location.pathname === '/login';

  return (
    <div className='w-full flex flex-row items-center justify-between'>
      <div className='w-[120px] flex items-center gap-[16px] h-[56px] text-[16px]'>
        <p
          onClick={() => !isRegister && navigate('/')}
          className={`pb-1 cursor-pointer ${
            isRegister ? 'border-b-2 border-red-500 text-red-500' : 'text-black'
          }`}
        >
          Register
        </p>
        <p
          onClick={() => !isLogin && navigate('/login')}
          className={`pb-1 cursor-pointer ${
            isLogin ? 'border-b-2 border-red-500 text-red-500' : 'text-black'
          }`}
        >
          Login
        </p>
      </div>

      <div>
        <i
          className='pi pi-times w-[14px] h-[14px] text-[#1A0710D9] cursor-pointer'
          onClick={() => navigate('/')} // or replace with desired route
        ></i>
      </div>
    </div>
  );
};

export default Header;
