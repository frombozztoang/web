import React from 'react';
import { cls } from '@/utils/cls';
import CheckSquare from '@/public/icons/check-square.svg';
import Square from '@/public/icons/square.svg';

type TSelectBtnProps = {
  isOn: boolean;
};

const SelectBtn: React.FC<TSelectBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ isOn, ...props }) => {
  return (
    <button
      {...props}
      className={cls(
        'inline-flex justify-center items-center px-10 py-4 bg-secondary border rounded-100 tablet:px-22 tablet:py-8 tablet:border-2 desktop:px-10 desktop:py-4 desktop:border',
        isOn ? 'border-main' : 'border-border01',
      )}
    >
      {isOn ? (
        <CheckSquare className='w-15 tablet:w-32 desktop:w-15' />
      ) : (
        <Square className='w-15 tablet:w-32 desktop:w-15' />
      )}
      <span className='text-typoSecondary ml-5 label-small tablet:ml-11 tablet:label-xl desktop:ml-5 desktop:label-small'>
        전체선택
      </span>
    </button>
  );
};

export default SelectBtn;
