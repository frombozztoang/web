import React from 'react';

const DefaultBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button {...props} className={`flex justify-center items-center p-16 gap-10 rounded-10 bg-main text-secondary font-pretendard text-21 font-bold leading-29`}>
      공식홈에서 자세히 살펴보기
    </button>
  );
};

export default DefaultBtn;
