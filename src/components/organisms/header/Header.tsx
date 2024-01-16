'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import React, { useEffect, useState } from 'react';
import MenuItem, { menuItems } from './MenuItem';
import HeaderSwitch from '@/components/atom/header/HeaderSwitch';
import MobileHeader from './MobileHeader';
import { cls } from '@/utils/cls';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  // darkMode 변경 시 확인 및 초기화
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // component mount 할 때 마다 테마 확인
  useEffect(() => {
    themeCheck();
  }, []);

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
    <nav className={cls('z-header  fixed top-0 left-0 right-0 font-teneda py-12 px-24  dark:bg-dark-bg box-border')}>
      <ul className='flex justify-between items-center tablet:px-40 desktop:px-200 '>
        <div className='flex items-center justify-center '>
          <li className='mr-258 min-w-100 tablet:mr-10  desktop:mr-64'>
            <Link href='/'>
              <Image layout='fixed' priority src={logoLight} alt='Logo Light' />
            </Link>
          </li>
          <div className='hidden desktop:flex '>
            {menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.name}
                menuItem={menuItem}
                activeMenu={activeMenu}
                handleMenuHover={handleMenuHover}
                handleMenuLeave={handleMenuLeave}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
        <div className='flex  items-center'>
          <li className='hidden tablet:flex mr-26'>
            <HeaderSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
          <li className='mr-12 text-main text-22 pt-10  '>
            <Link href='/mypage' className='text-center '>
              MY
            </Link>
          </li>
          <li className='w-full h-full  flex desktop:hidden '>
            <MobileHeader darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
