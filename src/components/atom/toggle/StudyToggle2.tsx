import Link from 'next/link';
import React from 'react';

type TStudyToggleProps = {
  activeToggle: number;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle2: React.FC<TStudyToggleProps> = ({ activeToggle, toggleFn }) => {
  const toggleOptions = [
    {
      label: '금융교육',
      value: 0,
      href: '/educations',
    },
    { label: '금융뉴스', value: 1, href: '/news' },
  ];

  const getBackgroundPositionClass = (active: number) => {
    switch (active) {
      case 0:
        return 'transform translate-x-0';
      case 1:
        return 'transform translate-x-full';
      default:
        return '';
    }
  };

  return (
    <div className='flex relative items-center bg-border01 w-201 h-38 rounded-100 tablet:w-300 tablet:h-50 dark:bg-[#343434]'>
      <div
        className={`absolute bg-main w-100 h-40 rounded-100 tablet:w-150 tablet:h-54 transition-all duration-300 ease-in-out ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value, href }) => (
        <button
          key={value}
          className={`flex-1  text-typoSecondary z-toggle h-50 font-teneda text-19 tablet:text-26 font-extrabold pt-8 transition-all duration-300 ease-in-out ${
            activeToggle === value ? 'text-typoTertiary' : ''
          }`}
          onClick={() => toggleFn(value)}
        >
          <Link href={href}>{label}</Link>
        </button>
      ))}
    </div>
  );
};

export default StudyToggle2;
