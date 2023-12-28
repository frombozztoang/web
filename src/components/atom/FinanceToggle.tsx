import React from 'react';

type TFinanceToggle = {
  activeToggle: number;
  size: 'Large' | 'Small';
  toggleFn: (toggleId: number) => void;
};

const FinanceToggle: React.FC<TFinanceToggle> = ({ activeToggle, size, toggleFn }) => {
  const toggleOptions = [
    { label: '예금', value: 1 },
    { label: '적금', value: 2 },
    { label: 'CMA', value: 3 },
  ];

  const getBackgroundPositionClass = (active: number) => {
    if (size === 'Large') {
      switch (active) {
        case 1:
          return 'left-0';
        case 2:
          return 'left-[126.18px]';
        case 3:
          return 'right-0';
        default:
          return '';
      }
    } else if (size === 'Small') {
      switch (active) {
        case 1:
          return 'left-0';
        case 2:
          return 'left-[94.63px]';
        case 3:
          return 'right-0';
        default:
          return '';
      }
    }
  };

  return size === 'Large' ? (
    <div className='flex relative items-center w-383 h-50 bg-[#EAEAEA] rounded-54'>
      <div
        className={`absolute w-137 h-54 bg-[#048848] rounded-43 transition-all ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-[#6B6B6B] z-10 h-50 ${activeToggle === value ? 'text-[#fff]' : ''}`}
          onClick={() => toggleFn(value)}
        >
          {label}
        </button>
      ))}
    </div>
  ) : (
    <div className='flex relative items-center w-287 h-37 bg-[#EAEAEA] rounded-32'>
      <div
        className={`absolute w-102 h-40 bg-[#048848] rounded-32 transition-all ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-[#6B6B6B] z-10 h-37 ${activeToggle === value ? 'text-[#fff]' : ''}`}
          onClick={() => toggleFn(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FinanceToggle;
