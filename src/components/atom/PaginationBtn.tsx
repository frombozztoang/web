import React from 'react';

type TPaginationBtn = {
  num: number;
  isOn: boolean;
};

const PaginationBtn: React.FC<TPaginationBtn & React.HTMLAttributes<HTMLDivElement>> = ({ num, isOn, ...props }) => {
  const BtnBgColor = isOn ? 'bg-[#048848]' : 'bg-[#FFF]';
  const BtnBorderColor = isOn ? 'border-[#048848]' : 'border-[#D6D6D6]';
  const BtnTextColor = isOn ? 'text-[#FFF]' : 'text-[#000]';

  return (
    <div
      {...props}
      className={`flex justify-center items-center w-38 h-38 rounded-5 border ${BtnBgColor} ${BtnBorderColor} ${BtnTextColor} cursor-pointer`}
    >
      {num}
    </div>
  );
};

export default PaginationBtn;
