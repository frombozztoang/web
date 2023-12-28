import React from 'react';
import Close from '../../public/icons/close.svg';

type TFilterResult = {
  text: string;
  size: 'Large' | 'Small';
  toggleFn: () => void;
};

const FilterResult: React.FC<TFilterResult> = ({ text, size, toggleFn }) => {
  return size === 'Large' ? (
    <div className='inline-flex px-14 py-3 items-center bg-[#36A06D] rounded-27'>
      <span className='text-[#fff] mr-6'>{text}</span>
      <Close className='cursor-pointer w-16 h-16' onClick={toggleFn} />
    </div>
  ) : (
    <div className='inline-flex px-10 py-2 items-center bg-[#36A06D] rounded-21'>
      <span className='text-[#fff] mr-4'>{text}</span>
      <Close className='cursor-pointer w-12 h-12' onClick={toggleFn} />
    </div>
  );
};

export default FilterResult;
