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
        isOn ? 'border-main' : 'border-border02',
      )}
    >
      <span className={cls('label-medium', isOn ? 'text-main' : 'text-typoPrimary')}>{text}</span>
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'inline-flex p-9 items-center bg-secondary rounded-15 border cursor-pointer',
        isOn ? 'border-main' : 'border-border02',
      )}
    >
      <span className={cls('label-small', isOn ? 'text-main' : 'text-typoPrimary')}>{text}</span>
    </div>
  );
};

export default FilterSubBtn;
