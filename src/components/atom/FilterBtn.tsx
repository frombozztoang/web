import React from 'react';
import ArrowDown from '../../public/icons/arrow-down.svg';

type TFilterBtn = {
  text: string;
  isOn: boolean;
  size: 'Large' | 'Small';
};

const FilterBtn: React.FC<TFilterBtn & React.HTMLAttributes<HTMLDivElement>> = ({ text, isOn, size, ...props }) => {
  const SelectIconColor = isOn ? 'stroke-black' : 'stroke-[#048848]';
  const SelectBorderColor = isOn ? 'border-[#D6D6D6]' : 'border-[#048848]';
  const SelectTextColor = isOn ? 'text-[#000000]' : 'text-[#048848]';

  return size === 'Large' ? (
    <div {...props} className={`inline-flex p-12 items-center bg-[#FFF] rounded-10 border ${SelectBorderColor}`}>
      <span className={`${SelectTextColor} mr-4`}>{text}</span>
      <ArrowDown className={`${SelectIconColor} w-24 h-24`} />
    </div>
  ) : (
    <div {...props} className={`inline-flex p-8 items-center bg-[#FFF] rounded-[7.452px] border ${SelectBorderColor}`}>
      <span className={`${SelectTextColor} mr-3`}>{text}</span>
      <ArrowDown className={`${SelectIconColor} w-17 h-17`} />
    </div>
  );
};

export default FilterBtn;
