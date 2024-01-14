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
    <div className='flex relative items-center  bg-border01 dark:bg-dark-border01 w-201 h-38 rounded-[32.5px] desktop:w-307 desktop:h-50 desktop:rounded-[43.346px]'>
      <div
        className={`absolute bg-main w-102 h-40 rounded-[32.5px] desktop:w-158  desktop:h-54  desktop:rounded-[43.346px] transition-all duration-300 ease-in-out ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`flex-1  text-typoSecondary z-toggle h-50 font-teneda text-19 desktop:text-26 font-extrabold pt-6 transition-all duration-300 ease-in-out ${
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
