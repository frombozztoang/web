import React from 'react';

type TStudyToggle = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle: React.FC<TStudyToggle> = ({ activeToggle, toggleFn }) => {
  const toggleOptions = [
    { label: 'text', value: 1 },
    { label: 'text', value: 2 },
  ];

  const getBackgroundPositionClass = (active: number) => {
    switch (active) {
      case 1:
        return 'left-0';
      case 2:
        return 'right-0';
      default:
        return '';
    }
  };

  return (
    <div className='flex relative items-center w-307 h-50 bg-[#EAEAEA] rounded-[43.346px]'>
      <div
        className={`absolute  w-158 h-54 bg-[#048848] rounded-[43.346px] transition-all ${getBackgroundPositionClass(
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
  );
};

export default StudyToggle;
