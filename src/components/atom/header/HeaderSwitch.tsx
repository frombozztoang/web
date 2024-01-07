'use client';
import React, { useEffect, useState } from 'react';
import { cls } from '@/utils/cls';
import Light from '@/public/icons/light.svg';
import Dark from '@/public/icons/dark.svg';

export type THeaderSwitchProps = {
  darkMode: boolean;
  setDarkMode: (arg: boolean) => void;
};

const HeaderSwitch: React.FC<THeaderSwitchProps & React.HTMLAttributes<HTMLDivElement>> = ({
  darkMode,
  setDarkMode,
  ...props
}) => {
  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={toggleTheme}
      {...props}
      className={cls(
        'inline-block relative w-67 h-31 rounded-15 transition-colors duration-300 cursor-pointer',
        darkMode ? 'bg-border02' : ' bg-main',
      )}
    >
      <div
        className={cls(
          'absolute bottom-3 left-6 w-25 h-25 rounded-15 duration-300',
          darkMode ? 'bg-main translate-x-[30px]' : '  bg-secondary translate-x-0',
        )}
      ></div>
      {darkMode ? <Dark className='absolute left-6 bottom-3' /> : <Light className='absolute right-6 bottom-3' />}
    </div>
  );
};

export default HeaderSwitch;
