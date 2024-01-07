import React from 'react';
import Close from '../../public/icons/close.svg';

type TFilterResultProps = {
  text: string;
  size: 'Large' | 'Small';
  toggleFn: () => void;
};

const FilterResult: React.FC<TFilterResultProps> = ({ text, size, toggleFn }) => {
  return size === 'Large' ? (
    <div className='inline-flex px-14 py-3 items-center bg-mainLevel400 rounded-27'>
      <span className='text-secondary mr-6 font-pretendard text-16 font-normal leading-25'>{text}</span>
      <Close className='cursor-pointer w-16 h-16' onClick={toggleFn} />
    </div>
  ) : (
    <div className='inline-flex px-10 py-2 items-center bg-mainLevel400 rounded-21'>
      <span className='text-secondary mr-4 font-pretendard text-12 font-normal leading-19'>{text}</span>
      <Close className='cursor-pointer w-12 h-12' onClick={toggleFn} />
    </div>
  );
};

export default FilterResult;
