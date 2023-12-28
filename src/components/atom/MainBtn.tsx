import React from 'react';

type TMainBtn = {
  text: string;
};

const MainBtn: React.FC<TMainBtn & React.HTMLAttributes<HTMLButtonElement>> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className='inline-flex justify-center items-center bg-[#048848] gap-10 text-[#FFFFFF] px-89 py-10 rounded-10 disabled:bg-[#6B6B6B]'
    >
      {text}
    </button>
  );
};

export default MainBtn;
