import React, { useState } from 'react';
import ArrowDown from '@/public/icons/arrow-down.svg';
import { cls } from '@/utils/cls';

const Accordian = () => {
  const [isOpend, setIsOpend] = useState(false);
  const handleIsOpend = () => {
    setIsOpend(!isOpend);
  };
  return (
    <div className='w-342 tablet:w-855'>
      <div className='label-medium text-typoSecondary mb-10'>전체 00</div>
      <div
        className={cls(
          'py-12 px-30 tablet:py-25  flex items-center justify-between  border-2 border-border01 rounded-10 hover:cursor-pointer transition-all duration-300 ease-in-out ',
          isOpend ? 'bg-secondary' : 'bg-border01',
        )}
        onClick={handleIsOpend}
      >
        예금
        <div>
          <ArrowDown className={cls('transition-all duration-300 ease-in-out', isOpend ? '' : 'rotate-180')} />
        </div>
      </div>
    </div>
  );
};

export default Accordian;
