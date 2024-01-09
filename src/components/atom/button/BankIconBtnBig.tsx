import React from 'react';
import { cls } from '@/utils/cls';

type TBankIconBtnBigProps = {
  isOn: boolean;
  text: string;
  size: 'Large' | 'Small';
};

const BankIconBtnBig: React.FC<TBankIconBtnBigProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isOn,
  text,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center min-w-91 h-91 bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-imageBase'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-5 w-87 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-medium',
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
        'flex flex-col items-center min-w-91 h-91 bg-secondary rounded-15 border cursor-pointer tablet:min-w-201 tablet:h-201 tablet:rounded-33 tablet:border-2',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <div className='w-44 h-44 rounded-7 mt-10 bg-imageBase tablet:w-98 tablet:h-98 tablet:rounded-16 tablet:mt-22'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-5 w-87 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-medium tablet:mt-11 tablet:w-196 tablet:label-xxl',
          isOn ? 'text-main' : 'text-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default BankIconBtnBig;
