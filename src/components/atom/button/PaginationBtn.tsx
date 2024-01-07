import React from 'react';
import { cls } from '@/utils/cls';

type TPaginationBtnProps = {
  num: number;
  isOn: boolean;
};

const PaginationBtn: React.FC<TPaginationBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  num,
  isOn,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cls(
        'flex justify-center items-center w-38 h-38 rounded-5 border cursor-pointer font-pretendard text-21 font-semibold leading-29',
        isOn ? 'bg-main border-main text-secondary' : 'bg-secondary border-border02 text-typoPrimary',
      )}
    >
      {num}
    </button>
  );
};

export default PaginationBtn;
