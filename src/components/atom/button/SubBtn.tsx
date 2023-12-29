import React from 'react';
import { cls } from '@/utils/cls';

type TSubBtnProps = {
  text: string;
  isOn: boolean;
};

const SubBtn: React.FC<TSubBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ text, isOn, ...props }) => {
  return (
    <button
      {...props}
      className={cls(
        'flex justify-center items-center w-108 gap-10 px-36 py-4 rounded-7 border font-pretendard text-16 font-semibold leading-24',
        isOn ? 'bg-main text-typoTertiary border-main' : 'bg-secondary text-typoSecondary border-border01',
      )}
    >
      {text}
    </button>
  );
};

export default SubBtn;
