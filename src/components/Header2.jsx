import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header2 = (props) => {
    const navigate = useNavigate();
  return (
    <div className='w-full flex flex-row items-center justify-between'>
      <div className='w-[414px] flex items-center gap-[16px] h-[56px] text-[16px]'>
        <p className='text-[20px] leading-[28px] font-bold text-[#1B1F3BCC]'>
          {props.text}
        </p>
        <p className='text-[16px] leading-[24px] text-[#6BC62D]'>
          {props.text2}
        </p>
      </div>

      <div>
        <i
          className='pi pi-times w-[14px] h-[14px] text-[#1A0710D9] cursor-pointer'
          onClick={() => navigate('/')}
        ></i>
      </div>
    </div>
  )
}

export default Header2
