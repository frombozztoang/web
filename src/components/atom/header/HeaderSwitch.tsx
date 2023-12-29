import React from 'react';
import { cls } from '@/utils/cls';
import Light from '../../public/icons/light.svg';
import Dark from '../../public/icons/dark.svg';

type THeaderSwitchProps = {
  isOn: boolean;
};

const HeaderSwitch: React.FC<THeaderSwitchProps & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        'inline-block relative w-67 h-31 rounded-15 transition-colors duration-300 cursor-pointer',
        isOn ? 'bg-main' : 'bg-border02',
      )}
    >
      <div
        className={cls(
          'absolute bottom-3 left-6 w-25 h-25 rounded-15 duration-300',
          isOn ? 'bg-secondary translate-x-0' : 'bg-main translate-x-[30px]',
        )}
      ></div>
      {isOn ? <Light className='absolute right-6 bottom-3' /> : <Dark className='absolute left-6 bottom-3' />}
    </div>
  );
};

export default HeaderSwitch;
