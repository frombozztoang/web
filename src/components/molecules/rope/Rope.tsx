import React from 'react';
import BankAllBtn from '@/components/atom/button/BankAllBtn';
import BankIconBtn from '@/components/atom/button/BankIconBtn';
import Plus from '@/public/icons/plus.svg';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

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
  const { isTablet } = useFinMediaQuery();

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
    <div className='flex items-center px-12 py-15 bg-secondary border-2 rounded-10 border-border01 tablet:px-27 tablet:py-33 tablet:border-4 tablet:rounded-23'>
      <BankAllBtn isOn={allBtnClick} size={size} onClick={() => onAllClickBank()} />
      <div className='h-75 border-l-2 border-border04 ml-16 mr-4 tablet:h-173 tablet:ml-27'></div>
      <div className='flex w-140 overflow-x-scroll scrollbar-hide ml-10 tablet:ml-23 tablet:w-325'>
        {bankInfo.map((bank, index) => (
          <BankIconBtn
            key={index}
            style={{ marginRight: isTablet ? '23px' : '10px' }}
            isOn={selectedBanks.includes(bank)}
            text={bank}
            size={size}
            onClick={() => onClickBank(bank)}
          />
        ))}
      </div>
      <div className='h-75 border-l-2 border-border04 tablet:h-173'></div>
      <button {...props} className='pl-18 pr-13 flex flex-col justify-center items-center tablet:pl-59 tablet:pr-32'>
        <Plus className='w-29 h-29 tablet:w-68 tablet:h-68' />
        <div className='text-border04 label-medium tablet:label-xxl'>더보기</div>
      </button>
    </div>
  );
};

export default Rope;
