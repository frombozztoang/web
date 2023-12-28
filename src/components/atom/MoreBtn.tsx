import React from 'react';

const MoreBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button {...props} className={`flex justify-center items-center p-16 gap-10 rounded-10 bg-[#048848] text-[#fff]`}>
      공식홈에서 자세히 살펴보기
    </button>
  );
};

export default MoreBtn;
