import { cls } from '@/utils/cls';
import React from 'react';

type TMainBtnProps = {
  text: string;
  isOn: boolean;
  styles?: string;
};

const MainBtn: React.FC<TMainBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  text,
  isOn,
  styles,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cls(
        'text-16 tablet:text-21 desktop:heading-large font-bold inline-flex justify-center items-center gap-10 text-secondary w-167 desktop:w-215 desktop:py-10 tablet:w-214  tablet:py-9  py-7 rounded-10  disabled:bg-typoSecondary hover:bg-main transition-all duration-300 ease-in-out',
        isOn
          ? 'bg-main text-typoTertiary border-main dark:text-dark-primary'
          : 'bg-typoSecondary text-secondary border-border01  dark:text-dark-primary dark:border-dark-border01',
        styles ? styles : '',
      )}
    >
      {text}
    </button>
  );
};

export default MainBtn;
