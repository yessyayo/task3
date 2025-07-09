import React from 'react'

const SubmitButton = ({ content, onClick, type = 'button', className = '' }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className='w-full bg-[#5932EA] text-white py-3 rounded-[12px] text-[16px] font-bold'
    >
        {content}
    </button>
  )
}

export default SubmitButton
