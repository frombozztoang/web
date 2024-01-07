import React from 'react';

type TStudyToggleProps = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle: React.FC<TStudyToggleProps> = ({ activeToggle, toggleFn }) => {
  const toggleOptions = [
    { label: '즐겨찾기', value: 0 },
    { label: '계정설정', value: 1 },
  ];

  const getBackgroundPositionClass = (active: number) => {
    switch (active) {
      case 0:
        return 'transform translate-x-0 ';
      case 1:
        return 'transform translate-x-full';
      default:
        return '';
    }
  };

  return (
    <div className='flex relative items-center w-307 h-50 bg-border01 rounded-[43.346px]'>
      <div
        className={`absolute  w-158 h-54 bg-main rounded-[43.346px] transition-all duration-300 ease-in-out ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1  text-typoSecondary z-toggle h-50 font-teneda text-26 font-extrabold pt-6 transition-all duration-300 ease-in-out ${
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
