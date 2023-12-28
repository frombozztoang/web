import React from 'react';

type TBankIcon = {
  isOn: boolean;
  size: 'Large' | 'Small';
};

const BankIcon: React.FC<TBankIcon & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, size, ...props }) => {
  const BorderColor = isOn ? 'border-[#048848]' : 'border-[#DEDEDE]';
  const TextColor = isOn ? 'text-[#048848]' : 'text-[#000]';

  return size === 'Large' ? (
    <div
      {...props}
      className={`flex flex-col items-center w-91 h-91 bg-[#FFF] rounded-15 border ${BorderColor} cursor-pointer`}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-[#6c6c6c]'></div>
      <p className={`mt-5 ${TextColor}`}>1금융권</p>
    </div>
  ) : (
    <div
      {...props}
      className={`flex flex-col items-center w-68 h-68 bg-[#FFF] rounded-11 border ${BorderColor} cursor-pointer`}
    >
      <div className='w-34 h-34 rounded-5 mt-7 bg-[#6c6c6c]'></div>
      <p className={`mt-3 ${TextColor}`}>1금융권</p>
    </div>
  );
};

export default BankIcon;
