'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import React, { useEffect, useState } from 'react';
import MenuItem, { menuItems } from './MenuItem';
import HeaderSwitch from '@/components/atom/header/HeaderSwitch';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  };

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className='z-header font-teneda py-12 px-200 bg-white text-18'>
      <ul className='flex justify-between px-64'>
        <div className='flex items-center justify-center '>
          <li className='mr-64'>
            <Link href='/'>
              <Image src={logoLight} alt='Logo Light' />
            </Link>
          </li>
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              menuItem={menuItem}
              activeMenu={activeMenu}
              handleMenuHover={handleMenuHover}
              handleMenuLeave={handleMenuLeave}
            />
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <li className='mr-26'>
            <HeaderSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
          <li className='text-main text-22'>
            <Link href='/myPage'>MY</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
