import React from 'react';
import { cls } from '@/utils/cls';

type TBankIconBtnBigProps = {
  isOn: boolean;
  text: string;
};

const BankIconBtnBig: React.FC<TBankIconBtnBigProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isOn,
  text,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center min-w-91 h-91 bg-secondary dark:bg-dark-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04 dark:border-dark-border04',
      )}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-imageBase'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-5 w-87 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-medium',
          isOn ? 'text-main' : 'text-typoPrimary dark:text-dark-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default BankIconBtnBig;
