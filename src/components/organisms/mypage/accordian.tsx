import React, { useState } from 'react';
import ArrowDown from '@/public/icons/arrow-down.svg';
import { cls } from '@/utils/cls';

type TAccordianProps = {
  title: string;
  count: number;
  children?: React.ReactNode;
};

const Accordian = ({ title, children, count }: TAccordianProps) => {
  const [isOpend, setIsOpend] = useState(true);
  const handleIsOpend = () => {
    setIsOpend(!isOpend);
  };
  return (
    <div className='w-342 tablet:w-438 desktop:w-855 '>
      <div className='label-medium text-typoSecondary mb-10'>전체 {count}</div>
      <div
        className={cls(
          'tablet:font-20 desktop:label-large font-semibold py-12 px-30 mb-10 desktop:py-25  flex items-center justify-between dark:bg-dark-secondary dark:border-dark-border01 dark:text-dark-primary border-2 border-border01 rounded-10 hover:cursor-pointer transition-all duration-300 ease-in-out ',
          isOpend ? 'bg-border01' : ' bg-secondary',
        )}
        onClick={handleIsOpend}
      >
        {title}
        <div>
          <ArrowDown className={cls('transition-all duration-300 ease-in-out ', isOpend ? 'rotate-180' : '')} />
        </div>
      </div>
      <div className={cls('', isOpend ? 'block' : 'hidden')}>{children}</div>
    </div>
  );
};

export default Accordian;
