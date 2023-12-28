import React from 'react';
import CheckSquare from '../../public/icons/check-square.svg';
import Square from '../../public/icons/square.svg';

type TSelectBtn = {
  isOn: boolean;
};

const SelectBtn: React.FC<TSelectBtn & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, ...props }) => {
  const SelectBorderColor = isOn ? 'border-[#048848]' : 'border-[#EAEAEA]';

  return (
    <div
      {...props}
      className={`inline-flex justify-center items-center px-10 py-4 bg-[#FFF] border rounded-20 ${SelectBorderColor} cursor-pointer`}
    >
      {isOn ? <CheckSquare /> : <Square />}
      <span className='text-[#6B6B6B] ml-5'>전체선택</span>
    </div>
  );
};

export default SelectBtn;
