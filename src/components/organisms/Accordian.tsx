import React, { useState } from 'react';
import Image from 'next/image';
import ArrowDown from '@/public/icons/arrow-down.svg';
import { cls } from '@/utils/cls';

const Accordian = () => {
  const [isOpend, setIsOpend] = useState(false);
  const handleIsOpend = () => {
    console.log('힝', isOpend);
    setIsOpend(!isOpend);
  };
  return (
    <div
      className={cls(
        'w-855 flex items-center justify-between px-30 py-25 border-2 border-border01 rounded-10 bg-secondary hover:cursor-pointer transition-all duration-300 ease-in-out ',
        isOpend ? '' : 'bg-border01',
      )}
      onClick={handleIsOpend}
    >
      <div>예금</div>
      <div>
        <ArrowDown className={cls('transition-all duration-300 ease-in-out', isOpend ? '' : 'rotate-180')} />
      </div>
    </div>
  );
};

export default Accordian;
