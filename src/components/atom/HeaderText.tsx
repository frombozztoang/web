import React from 'react';

type THeaderText = {
  text: string;
};

const HeaderText: React.FC<THeaderText> = ({ text }) => {
  return <div className='flex justify-center items-center bg-white w-120 h-47 gap-10 text-[#000]'>{text}</div>;
};

export default HeaderText;
