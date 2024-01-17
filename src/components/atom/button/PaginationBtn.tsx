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
        'inline-flex justify-center items-center w-33 h-33 rounded-4 border heading-medium cursor-pointer tablet:w-42 tablet:h-42 tablet:heading-large desktop:w-38 desktop:h-38 desktop:rounded-5 desktop:heading-large',
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
