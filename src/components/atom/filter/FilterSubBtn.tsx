import React from 'react';
import { cls } from '@/utils/cls';

type TFilterSubBtnProps = {
  text: string;
  isOn: boolean;
  styles: string;
};

const FilterSubBtn: React.FC<TFilterSubBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  isOn,
  styles,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'inline-flex items-center bg-secondary dark:bg-dark-secondary cursor-pointer p-9 rounded-15 border tablet:p-11 tablet:rounded-19 desktop:p-12 desktop:rounded-20',
        isOn ? 'border-main' : 'border-border02 dark:border-dark-border04',
        styles ? styles : '',
      )}
    >
      <span
        className={cls(
          'label-small tablet:label-medium desktop:label-medium',
          isOn ? 'text-main' : 'text-typoPrimary dark:text-dark-typoPrimary',
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default FilterSubBtn;
