import React from 'react';
import Light from '../../public/icons/light.svg';
import Dark from '../../public/icons/dark.svg';

type TSwitch = {
  isOn: boolean;
};

const Switch: React.FC<TSwitch & React.HTMLAttributes<HTMLDivElement>> = ({ isOn, ...props }) => {
  const SwitchBgClass = isOn ? 'bg-[#048848]' : 'bg-[#D6D6D6]';
  const SwitchColorBgClass = isOn ? 'bg-[#FFFFFF]' : 'bg-[#048848]';
  const SwitchKnobClass = isOn ? 'translate-x-0' : 'translate-x-[30px]';

  return (
    <div
      {...props}
      className={`inline-block relative w-67 h-31 rounded-15 ${SwitchBgClass} transition-colors duration-300 cursor-pointer`}
    >
      <div
        className={`absolute bottom-3 left-6 ${SwitchColorBgClass} w-25 h-25 rounded-15 ${SwitchKnobClass} duration-300`}
      ></div>
      {isOn ? <Light className='absolute right-6 bottom-3' /> : <Dark className='absolute left-6 bottom-3' />}
    </div>
  );
};

export default Switch;
