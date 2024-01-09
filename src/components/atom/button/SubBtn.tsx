import React from 'react';
import { cls } from '@/utils/cls';

type TSubBtnProps = {
  text: string;
  isOn: boolean;
  mr?: string;
};

const SubBtn: React.FC<TSubBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ text, isOn, mr, ...props }) => {
  return (
    <button
      {...props}
      className={cls(
        'flex justify-center items-center dark:border-dark-border01  gap-10 w-108 py-4 rounded-7 border label-medium box-border',
        isOn
          ? 'bg-main text-typoTertiary border-main'
          : 'bg-secondary text-typoSecondary border-border01  dark:bg-dark-secondary',
        mr ? mr : '',
      )}
    >
      {text}
    </button>
  );
};

export default SubBtn;
