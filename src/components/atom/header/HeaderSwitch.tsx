'use client';
import React, { useEffect, useState } from 'react';
import { cls } from '@/utils/cls';
import Light from '@/public/icons/light.svg';
import Dark from '@/public/icons/dark.svg';
import { useTheme } from 'next-themes';
import useThemeCheck from '@/hooks/useThemeCheck';

const HeaderSwitch = ({ ...props }) => {
  const { isDarkMode, toggleTheme } = useThemeCheck();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 클라이언트에서 마운트되지 않은 경우 UI를 렌더링하지 않음
    return (
      <div className='inline-block relative w-67 h-31 rounded-15 transition-colors duration-300 cursor-pointer bg-border02'></div>
    );
  }

  return (
    <div
      onClick={toggleTheme}
      {...props}
      className={cls(
        'inline-block relative w-67 h-31 rounded-15 transition-all duration-300 cursor-pointer',
        isDarkMode ? 'bg-border02' : ' bg-main',
      )}
    >
      <div
        className={cls(
          'absolute bottom-3 left-6 w-25 h-25 rounded-15 duration-300',
          isDarkMode ? 'bg-main translate-x-[30px]' : '  bg-secondary translate-x-0',
        )}
      ></div>
      {isDarkMode ? <Dark className='absolute left-6 bottom-3' /> : <Light className='absolute right-6 bottom-3' />}
    </div>
  );
};

export default HeaderSwitch;
