import React from 'react';
import { cls } from '@/utils/cls';

type TBankIconBtnProps = {
  isOn: boolean;
  text: string;
  size: 'Large' | 'Small';
};

const BankIconBtn: React.FC<TBankIconBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isOn,
  text,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center w-91 h-91 bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-imageBase'></div>
      <p
        className={cls(
          'mt-5 font-pretendard text-16 font-semibold leading-24',
          isOn ? 'text-main' : 'text-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center w-68 h-68 bg-secondary rounded-11 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-34 h-34 rounded-5 mt-7 bg-imageBase'></div>
      <p
        className={cls(
          'mt-3 font-pretendard text-12 font-semibold leading-18',
          isOn ? 'text-main' : 'text-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default BankIconBtn;
