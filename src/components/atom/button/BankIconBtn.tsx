import React from 'react';
import { cls } from '@/utils/cls';

type TBankIconBtnProps = {
  isOn: boolean;
  text: string;
  styles?: string;
};

const BankIconBtn: React.FC<TBankIconBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isOn,
  text,
  styles,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center min-w-68 min-h-68 bg-secondary dark:bg-dark-secondary rounded-11 border cursor-pointer tablet:min-w-87 tablet:min-h-87 tablet:rounded-14 desktop:min-w-91 desktop:min-h-91 desktop:rounded-15',
        isOn ? 'border-main' : 'border-border04 dark:border-dark-border04',
        styles ? styles : '',
      )}
    >
      <div className='w-34 h-34 rounded-5 mt-7 bg-imageBase tablet:w-44 tablet:h-44 tablet:rounded-7 tablet:mt-10 desktop:w-44 desktop:h-44 desktop:rounded-7 desktop:mt-10'></div>
      <p
        style={{
          textOverflow: 'ellipsis',
        }}
        className={cls(
          'mt-3 w-65 text-center overflow-hidden text-overflow-ellipsis whitespace-nowrap label-small tablet:mt-3 tablet:w-83 tablet:label-medium desktop:mt-5 desktop:w-87 desktop:label-medium',
          isOn ? 'text-main' : 'text-typoPrimary dark:text-dark-typoPrimary',
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default BankIconBtn;
