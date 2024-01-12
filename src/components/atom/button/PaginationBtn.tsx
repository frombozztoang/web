import React from 'react';
import { cls } from '@/utils/cls';

type TPaginationBtnProps = {
  num: number;
  isOn: boolean;
  styles: string;
};

const PaginationBtn: React.FC<TPaginationBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  num,
  isOn,
  styles,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cls(
        'inline-flex justify-center items-center w-21 h-21 rounded-3 border heading-small cursor-pointer tablet:w-27 tablet:h-27 tablet:heading-medium desktop:w-38 desktop:h-38 desktop:rounded-5 desktop:heading-large',
        isOn
          ? 'bg-main border-main text-secondary dark:text-dark-secondary'
          : 'bg-secondary border-border02 text-typoPrimary dark:border-dark-border02 dark:text-dark-typoPrimary dark:bg-dark-secondary',
        styles ? styles : '',
      )}
    >
      {num}
    </button>
  );
};

export default PaginationBtn;
