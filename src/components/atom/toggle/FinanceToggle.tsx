import React from 'react';

type TFinanceToggleProps = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const FinanceToggle: React.FC<TFinanceToggleProps> = ({ activeToggle, toggleFn }) => {
  const toggleOptions = [
    { label: '예금', value: 1 },
    { label: '적금', value: 2 },
    { label: 'CMA', value: 3 },
  ];

  return (
    <div className='flex relative items-center w-287 h-37 bg-border01 rounded-100 tablet:w-370 tablet:h-48 desktop:w-383 desktop:h-50 desktop:rounded-54 dark:bg-dark-border01'>
      <div
        className={`absolute bg-main rounded-100 w-98 h-40 tablet:w-125 tablet:h-51 desktop:w-130 desktop:h-54 ${
          activeToggle === 1 ? 'left-0' : activeToggle === 2 ? 'left-[33%]' : activeToggle === 3 ? 'right-0' : null
        }`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-typoSecondary z-toggle h-37 pt-5 tenada-small tablet:h-48 tablet:pt-8 tablet:tenada-medium desktop:h-50 desktop:pt-8 desktop:tenada-large ${
            activeToggle === value ? 'text-typoTertiary dark:text-dark-typoTertiary' : ''
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
