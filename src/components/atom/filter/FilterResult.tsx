import React from 'react';
import Close from '@/public/icons/close.svg';

type TFilterResultProps = {
  text: string;
  size: 'Large' | 'Small';
  toggleFn: () => void;
};

const FilterResult: React.FC<TFilterResultProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  size,
  toggleFn,
  ...props
}) => {
  return size === 'Large' ? (
    <div {...props} className='inline-flex px-14 py-3 items-center bg-mainLevel400 rounded-27'>
      <span className='text-secondary mr-6 paragraph-medium'>{text}</span>
      <Close className='cursor-pointer w-16 h-16' onClick={toggleFn} />
    </div>
  ) : (
    <div {...props} className='inline-flex px-10 py-2 items-center bg-mainLevel400 rounded-21'>
      <span className='text-secondary mr-4 paragraph-small'>{text}</span>
      <Close className='cursor-pointer w-12 h-12' onClick={toggleFn} />
    </div>
  );
};

export default FilterResult;
