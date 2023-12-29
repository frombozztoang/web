import React from 'react';
import { cls } from '@/utils/cls';
import CheckSquare from '../../public/icons/check-square.svg';
import Square from '../../public/icons/square.svg';

type TSelectBtnProps = {
  isOn: boolean;
};

const SelectBtn: React.FC<TSelectBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ isOn, ...props }) => {
  return (
    <button
      {...props}
      className={cls(
        'inline-flex justify-center items-center px-10 py-4 bg-secondary border rounded-20',
        isOn ? 'border-main' : 'border-border01',
      )}
    >
      {isOn ? <CheckSquare /> : <Square />}
      <span className='text-typoSecondary ml-5 font-pretendard text-12 font-semibold leading-18'>전체선택</span>
    </button>
  );
};

export default SelectBtn;
