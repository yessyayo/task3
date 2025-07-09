import React from 'react'

const PrimaryButton = ({ content, className = '', type = 'submit'}) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#5932EA] text-white py-3 rounded-[12px] text-[16px] font-bold ${className}`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton
