import React from 'react';
import All from '../../public/icons/all.svg';

type TBankAllBtn = {
  isOn: boolean;
  size: 'Large' | 'Small';
};

const BankAllBtn: React.FC<TBankAllBtn & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, size, ...props }) => {
  const BorderColor = isOn ? 'border-[#048848]' : 'border-[#DEDEDE]';
  const AllColor = isOn ? 'fill-[#048848]' : 'fill-[#6B6B6B]';
  const TextColor = isOn ? 'text-[#048848]' : 'text-[#6B6B6B]';

  return size === 'Large' ? (
    <div
      {...props}
      className={`flex flex-col items-center w-91 h-91 bg-[#FFF] rounded-15 border ${BorderColor} cursor-pointer`}
    >
      <All className={`w-39 h-25 mt-22 ${AllColor}`} />
      <p className={`mt-10 ${TextColor}`}>1금융권</p>
    </div>
  ) : (
    <div
      {...props}
      className={`flex flex-col items-center w-68 h-68 bg-[#FFF] rounded-11 border ${BorderColor} cursor-pointer`}
    >
      <All className={`w-29 h-19 mt-17 ${AllColor}`} />
      <p className={`mt-7 ${TextColor}`}>1금융권</p>
    </div>
  );
};

export default BankAllBtn;
