import React from 'react';
import BankIconBtn from '@/components/atom/button/BankIconBtn';
import Plus from '@/public/icons/plus.svg';

type TRopeCmaProps = {
  selectedBanks: string[];
  bankInfo: string[];
  onClickBank: (bank: string) => void;
};

const RopeCma: React.FC<TRopeCmaProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  selectedBanks,
  bankInfo,
  onClickBank,
  ...props
}) => {
  return (
    <div className='flex items-center w-342 px-12 py-15 bg-secondary dark:bg-dark-secondary border-2 rounded-10 border-border01 dark:border-dark-border01 tablet:w-438 tablet:px-15 tablet:py-18 tablet:rounded-12 desktop:w-855 desktop:px-16 desktop:py-20 desktop:rounded-20'>
      <div className='flex overflow-x-scroll scrollbar-hide w-235 ml-5 tablet:ml-7 tablet:w-297 desktop:w-709 desktop:ml-5'>
        {bankInfo.map((bank, index) => (
          <BankIconBtn
            key={index}
            styles='mr-10 tablet:mr-12 desktop:mr-10'
            isOn={selectedBanks.includes(bank)}
            text={bank}
            onClick={() => onClickBank(bank)}
          />
        ))}
      </div>
      <div className='h-75 border-l-2 border-border04 dark:border-dark-border04 tablet:h-96 desktop:h-100'></div>
      <button {...props} className='flex flex-col justify-center items-center pl-19 tablet:pl-28 desktop:pl-38'>
        <Plus className='stroke-border04 dark:stroke-dark-border04 w-29 h-29 tablet:w-37 tablet:h-37 desktop:w-39 desktop:h-39' />
        <div className='text-border04 dark:text-dark-border04 label-medium tablet:label-large desktop:label-medium'>
          더보기
        </div>
      </button>
    </div>
  );
};

export default RopeCma;
