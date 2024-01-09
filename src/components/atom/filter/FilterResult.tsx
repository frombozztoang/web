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
    <div {...props} className='inline-flex px-14 py-3 items-center bg-mainLevel400 rounded-100'>
      <span className='text-secondary mr-6 paragraph-medium'>{text}</span>
      <Close className='cursor-pointer stroke-2 stroke-secondary w-18 h-18' onClick={toggleFn} />
    </div>
  ) : (
    <div
      {...props}
      className='inline-flex px-10 py-2 items-center bg-mainLevel400 rounded-100 tablet:px-24 tablet:py-5'
    >
      <span className='text-secondary mr-4 paragraph-small tablet:paragraph-xl tablet:mr-10'>{text}</span>
      <Close
        className='cursor-pointer stroke-2 stroke-secondary w-14 h-14 tablet:w-29 tablet:h-29'
        onClick={toggleFn}
      />
    </div>
  );
};

export default FilterResult;
