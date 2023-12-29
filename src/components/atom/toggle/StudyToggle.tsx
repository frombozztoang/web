import React from 'react';

type TStudyToggleProps = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle: React.FC<TStudyToggleProps> = ({ activeToggle, toggleFn }) => {
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
    <div className='flex relative items-center w-307 h-50 bg-border01 rounded-[43.346px]'>
      <div
        className={`absolute  w-158 h-54 bg-main rounded-[43.346px] transition-all ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1 text-typoSecondary z-toggle h-50 font-teneda text-26 font-extrabold pt-6 ${
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

export default StudyToggle;
