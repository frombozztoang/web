import React from 'react';
import ArrowDown from '@/public/icons/arrow-down-2.svg';
import { cls } from '@/utils/cls';

type TFilterBtnProps = {
  text: string;
  isOn: boolean;
  styles: string;
};

const FilterBtn: React.FC<TFilterBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  isOn,
  styles,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'inline-flex items-center bg-secondary dark:bg-dark-secondary cursor-pointer p-8 rounded-7 border tablet:p-11 tablet:rounded-9 desktop:p-12 desktop:rounded-10',
        isOn ? 'border-main' : 'border-border02 dark:border-dark-border04',
        styles ? styles : '',
      )}
    >
      <span
        className={cls(
          'mr-3 label-small tablet:mr-3 tablet:label-medium desktop:mr-4 desktop:label-medium',
          isOn ? 'text-main' : 'text-typoPrimary dark:text-dark-typoPrimary',
        )}
      >
        {text}
      </span>
      <ArrowDown
        className={cls(
          'w-17 h-17 tablet:w-22 tablet:h-22 desktop:w-24 desktop:h-24',
          isOn ? 'stroke-main' : 'stroke-primary dark:stroke-dark-primary',
        )}
      />
    </div>
  );
};

export default FilterBtn;
