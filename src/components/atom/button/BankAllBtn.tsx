import React from 'react';
import All from '@/public/icons/all.svg';
import { cls } from '@/utils/cls';

type TBankAllBtnProps = {
  isOn: boolean;
};

const BankAllBtn: React.FC<TBankAllBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center w-68 h-68 bg-secondary dark:bg-dark-secondary rounded-11 border cursor-pointer tablet:w-87 tablet:h-87 tablet:rounded-14 desktop:w-91 desktop:h-91 desktop:rounded-15',
        isOn ? 'border-main' : 'border-border04 dark:border-dark-border04',
      )}
    >
      <All
        className={cls(
          'w-29 h-19 mt-17 tablet:w-38 tablet:h-24 tablet:mt-21 desktop:w-39 desktop:h-25 desktop:mt-22',
          isOn ? 'fill-main' : 'fill-typoSecondary',
        )}
      />
      <p
        className={cls(
          'mt-7 label-small tablet:mt-10 tablet:label-medium desktop:mt-10 desktop:label-medium',
          isOn ? 'text-main' : 'text-typoSecondary',
        )}
      >
        1금융권
      </p>
    </div>
  );
};

export default BankAllBtn;
