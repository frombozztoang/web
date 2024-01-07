import React, { useState } from 'react';
import ArrowDown from '@/public/icons/arrow-down.svg';
import { cls } from '@/utils/cls';

export const accordianItems = [
  { index: 0, label: '예금' },
  { index: 1, label: '적금' },
  { index: 2, label: 'CMA' },
];

type TAccordianProps = {};

const Accordian = () => {
  const [isOpend, setIsOpend] = useState(false);
  const handleIsOpend = () => {
    setIsOpend(!isOpend);
  };
  return (
    <>
      <div className='label-medium text-typoSecondary mb-10'>전체 00</div>
      <div
        className={cls(
          'w-855 flex items-center justify-between px-30 py-25 border-2 border-border01 rounded-10 hover:cursor-pointer transition-all duration-300 ease-in-out ',
          isOpend ? 'bg-secondary' : 'bg-border01',
        )}
        onClick={handleIsOpend}
      >
        {accordianItems.map((i) => (
          <div key={i.index}>{i.label}</div>
        ))}
        <div>
          <ArrowDown className={cls('transition-all duration-300 ease-in-out', isOpend ? '' : 'rotate-180')} />
        </div>
      </div>
    </>
  );
};

export default Accordian;
