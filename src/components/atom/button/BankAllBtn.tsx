import React from 'react';
import All from '../../public/icons/all.svg';
import { cls } from '@/utils/cls';

type TBankAllBtnProps = {
  isOn: boolean;
  size: 'Large' | 'Small';
};

const BankAllBtn: React.FC<TBankAllBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, size, ...props }) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'flex flex-col items-center w-91 h-91 bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border04',
      )}
    >
      <All className={cls('w-39 h-25 mt-22', isOn ? 'fill-main' : 'fill-typoSecondary')} />
      <p
        className={cls(
          'mt-10 font-pretendard text-16 font-semibold leading-24',
          isOn ? 'text-main' : 'text-typoSecondary',
        )}
      >
        1금융권
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
      <All className={cls('w-29 h-19 mt-17', isOn ? 'fill-main' : 'fill-typoSecondary')} />
      <p
        className={cls(
          'mt-7 font-pretendard text-12 font-semibold leading-18',
          isOn ? 'text-main' : 'text-typoSecondary',
        )}
      >
        1금융권
      </p>
    </div>
  );
};

export default BankAllBtn;
