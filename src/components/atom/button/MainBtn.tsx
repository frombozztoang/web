import React from 'react';

type TMainBtnProps = {
  text: string;
};

const MainBtn: React.FC<TMainBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className='inline-flex justify-center items-center bg-main gap-10 text-secondary px-89 py-10 rounded-10 font-pretendard text-21 font-bold leading-29 disabled:bg-typoSecondary'
    >
      {text}
    </button>
  );
};

export default MainBtn;
