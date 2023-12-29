import React from 'react';
import { cls } from '@/utils/cls';

type TFilterSubBtnProps = {
  text: string;
  isOn: boolean;
  size: 'Large' | 'Small';
};

const FilterSubBtn: React.FC<TFilterSubBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  isOn,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'inline-flex p-12 items-center bg-secondary rounded-20 border cursor-pointer',
        isOn ? 'border-border02' : 'border-main',
      )}
    >
      <span
        className={cls('font-pretendard text-16 font-semibold leading-24', isOn ? 'text-typoPrimary' : 'text-main')}
      >
        {text}
      </span>
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'inline-flex p-9 items-center bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-border02' : 'border-main',
      )}
    >
      <span
        className={cls('font-pretendard text-12 font-semibold leading-18', isOn ? 'text-typoPrimary' : 'text-main')}
      >
        {text}
      </span>
    </div>
  );
};

export default FilterSubBtn;
