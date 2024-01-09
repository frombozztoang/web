import React from 'react';

type TFinanceToggleProps = {
  activeToggle: number;
  size: 'Large' | 'Small';
  toggleFn: (toggleId: number) => void;
};

const FinanceToggle: React.FC<TFinanceToggleProps> = ({ activeToggle, size, toggleFn }) => {
  const toggleOptions = [
    { label: '예금', value: 1 },
    { label: '적금', value: 2 },
    { label: 'CMA', value: 3 },
  ];

  return size === 'Large' ? (
    <div className='flex relative items-center w-383 h-50 bg-border01 rounded-54'>
      <div
        className={`absolute w-130 h-54 bg-main rounded-43 ${
          activeToggle === 1 ? 'left-0' : activeToggle === 2 ? 'left-[33%]' : activeToggle === 3 ? 'right-0' : null
        }`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-typoSecondary z-toggle h-50 font-teneda text-26 font-extrabold pt-8 ${
            activeToggle === value ? 'text-typoTertiary' : ''
          }`}
          onClick={() => toggleFn(value)}
        >
          {label}
        </button>
      ))}
    </div>
  ) : (
    <div className='flex relative items-center w-287 h-37 bg-border01 rounded-100 tablet:w-666 tablet:h-93'>
      <div
        className={`absolute w-98 h-40 tablet:w-225 tablet:h-93 bg-main rounded-100 ${
          activeToggle === 1 ? 'left-0' : activeToggle === 2 ? 'left-[33%]' : activeToggle === 3 ? 'right-0' : null
        }`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-typoSecondary z-toggle h-37 tablet:h-93 font-teneda text-19 tablet:text-43 font-extrabold pt-8 tablet:pt-15 ${
            activeToggle === value ? 'text-typoTertiary' : ''
          }`}
          onClick={() => toggleFn(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FinanceToggle;
