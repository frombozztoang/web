'use client';
import { useEffect, useState } from 'react';

const UseThemeCheck = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');

    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    // 추가: 다크모드 토글 이벤트 리스너 등록
    window.addEventListener('darkModeToggle', toggleTheme);

    return () => {
      // 클린업: 컴포넌트 언마운트 시 리스너 제거
      window.removeEventListener('darkModeToggle', toggleTheme);
    };
  }, [isDarkMode]);

  return isDarkMode;
};

export default UseThemeCheck;
