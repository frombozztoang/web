import Link from 'next/link';
import React from 'react';

type TStudyToggleProps = {
  activeToggle: boolean;
  toggleFn: (toggleId: number) => void;
};

const StudyToggle2: React.FC<TStudyToggleProps> = ({ activeToggle = true, toggleFn }) => {
  const toggleOptions = [
    { label: '금융교육', value: 0, href: '/educations' },
    { label: '금융뉴스', value: 1, href: '/news' },
  ];

  const getBackgroundPositionClass = (active: boolean) => {
    return active ? 'transform translate-x-full' : 'transform translate-x-0';
  };

  return (
    <div className='flex relative items-center  bg-border01 w-201 h-38 rounded-[32.5px] tablet:w-307 tablet:h-50 tablet:rounded-[43.346px]'>
      <div
        className={`absolute bg-main w-102 h-40 rounded-[32.5px] tablet:w-158  tablet:h-54  tablet:rounded-[43.346px] transition-all duration-300 ease-in-out ${getBackgroundPositionClass(
          activeToggle,
        )}`}
      ></div>
      {toggleOptions.map(({ label, value, href }) => (
        <button
          key={value}
          className={`flex-1  text-typoSecondary z-toggle h-50 font-teneda text-19 tablet:text-26 font-extrabold pt-6 transition-all duration-300 ease-in-out ${
            activeToggle === !!value ? 'text-typoTertiary' : ''
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
