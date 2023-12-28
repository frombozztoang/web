import React from 'react';

type TFilterSubBtn = {
  text: string;
  isOn: boolean;
  size: 'Large' | 'Small';
};

const FilterSubBtn: React.FC<TFilterSubBtn & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  isOn,
  size,
  ...props
}) => {
  const SelectBorderColor = isOn ? 'border-[#D6D6D6]' : 'border-[#048848]';
  const SelectTextColor = isOn ? 'text-[#000000]' : 'text-[#048848]';

  return size === 'Large' ? (
    <div {...props} className={`inline-flex p-12 items-center bg-[#FFF] rounded-20 border ${SelectBorderColor}`}>
      <span className={`${SelectTextColor}`}>{text}</span>
    </div>
  ) : (
    <div {...props} className={`inline-flex p-9 items-center bg-[#FFF] rounded-15 border ${SelectBorderColor}`}>
      <span className={`${SelectTextColor}`}>{text}</span>
    </div>
  );
};

export default FilterSubBtn;
