import React from 'react';
import BankAllBtn from '@/components/atom/button/BankAllBtn';
import BankIconBtn from '@/components/atom/button/BankIconBtn';
import Plus from '@/public/icons/plus.svg';

type TRopeProps = {
  size: 'Large' | 'Small';
  allBtnClick: boolean;
  onAllClickBank: () => void;
  selectedBanks: string[];
  bankInfo: string[];
  onClickBank: (bank: string) => void;
};

const Rope: React.FC<TRopeProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  size,
  allBtnClick,
  onAllClickBank,
  selectedBanks,
  bankInfo,
  onClickBank,
  ...props
}) => {
  return size === 'Large' ? (
    <div className='flex items-center px-16 py-20 bg-secondary border-2 rounded-20 border-border01'>
      <BankAllBtn isOn={allBtnClick} size={size} onClick={onAllClickBank} />
      <div className='h-100 border-l-2 border-border04 ml-16 mr-6'></div>
      <div className='flex w-590 overflow-x-scroll scrollbar-hide ml-10'>
        {bankInfo.map((bank, index) => (
          <BankIconBtn
            key={index}
            style={{ marginRight: 10 }}
            isOn={selectedBanks.includes(bank)}
            text={bank}
            size={size}
            onClick={() => onClickBank(bank)}
          />
        ))}
      </div>
      <div className='h-100 border-l-2 border-border04'></div>
      <button {...props} className='pl-35 pr-26'>
        <Plus className='w-39 h-39' />
        <div className='text-border04 label-medium'>더보기</div>
      </button>
    </div>
  ) : (
    <div className='flex items-center px-12 py-15 bg-secondary border-2 rounded-10 border-border01'>
      <BankAllBtn isOn={allBtnClick} size={size} onClick={() => onAllClickBank()} />
      <div className='h-75 border-l-2 border-border04 ml-16 mr-4'></div>
      <div className='flex w-140 overflow-x-scroll scrollbar-hide ml-10'>
        {bankInfo.map((bank, index) => (
          <BankIconBtn
            key={index}
            style={{ marginRight: 10 }}
            isOn={selectedBanks.includes(bank)}
            text={bank}
            size={size}
            onClick={() => onClickBank(bank)}
          />
        ))}
      </div>
      <div className='h-75 border-l-2 border-border04'></div>
      <button {...props} className='pl-18 pr-13 flex flex-col justify-center items-center'>
        <Plus className='w-29 h-29' />
        <div className='text-border04 label-medium'>더보기</div>
      </button>
    </div>
  );
};

export default Rope;
