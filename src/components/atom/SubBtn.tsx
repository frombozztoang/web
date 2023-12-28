import React from 'react';

type TSubBtn = {
  text: string;
  isOn: boolean;
};

const SubBtn: React.FC<TSubBtn & React.HTMLAttributes<HTMLButtonElement>> = ({ text, isOn, ...props }) => {
  const SelectBgColor = isOn ? 'bg-[#048848]' : 'bg-[#FFF]';
  const SelectTextColor = isOn ? 'text-[#FFF]' : 'text-[#6B6B6B]';
  const SelectBorderColor = isOn ? 'border-[#048848]' : 'border-[#eaeaea]';

  return (
    <button
      {...props}
      className={`flex justify-center items-center w-108 ${SelectBgColor} ${SelectTextColor} gap-10 px-36 py-4 rounded-7 border ${SelectBorderColor}`}
    >
      {text}
    </button>
  );
};

export default SubBtn;
