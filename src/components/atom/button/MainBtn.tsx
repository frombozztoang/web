import { cls } from '@/utils/cls';
import React from 'react';

type TMainBtnProps = {
  text: string;
  isOn: boolean;
  mr?: string;
};

const MainBtn: React.FC<TMainBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ text, isOn, mr, ...props }) => {
  return (
    <button
      {...props}
      className={cls(
        'inline-flex justify-center items-center gap-10 text-secondary px-89 py-10 rounded-10 heading-lar disabled:bg-typoSecondary hover:bg-main transition-all duration-300 ease-in-out',
        isOn ? 'bg-main text-typoTertiary border-main' : 'bg-typoSecondary text-secondary border-border01',
        mr ? mr : '',
      )}
    >
      {text}
    </button>
  );
};

export default MainBtn;
