'use client';
import React, { useEffect, useRef, useState } from 'react';
import List from '@/public/icons/MobileList.svg';
import { cls } from '@/utils/cls';
import MenuItem, { menuItems } from './MenuItem';
import Image from 'next/image';
import Logo from '@/public/logos/logo_light.png';
import Close from '@/public/icons/close.svg';
import HeaderSwitch, { THeaderSwitchProps } from '@/components/atom/header/HeaderSwitch';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const MobileHeader = ({ darkMode, setDarkMode }: THeaderSwitchProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleMenuOpen = () => {
    setIsOpened((prevIsOpened) => {
      setIsOpened(!prevIsOpened);
      return !prevIsOpened;
    });
  };

  // 헤더 외부 공간 클릭 시
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (mobileHeaderRef.current && !mobileHeaderRef.current.contains(e.target as Node)) {
        setIsOpened(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [mobileHeaderRef]);

  useEffect(() => {
    // 화면 크기 조정 시
    window.addEventListener('resize', () => {
      setIsOpened(false);
    });
  }, []);

  // 메뉴 선택 및 이동 시
  useEffect(() => {
    setIsOpened(false);
  }, [pathname, searchParams]);

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
  };
  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className='z-mobileHeader'>
      <List onClick={handleMenuOpen} className=' hover:cursor-pointer' />

      {isOpened && (
        <div className='fixed w-full h-full left-0 top-0 flex  z-modal bg-bgBlind'>
          <div
            ref={mobileHeaderRef}
            className={cls(
              'flex flex-col justify-between transition-all translate-x-10 fixed right-0 top-0  w-200 bg-secondary  min-h-screen pt-11 pl-20',
              isOpened ? 'block ' : 'hidden',
            )}
          >
            <div className='bg-red-100 flex flex-col justify-start'>
              <Close stroke='#000000' className='w-25 h-25 mb-21 ' onClick={handleMenuOpen} />
              <Image className='mb-21 pb-[5.13]  border-b-1 border-black' src={Logo} alt='logo' />

              {menuItems.map((menuItem) => (
                <MenuItem
                  handleMenuHover={handleMenuHover}
                  handleMenuLeave={handleMenuLeave}
                  key={menuItem.name}
                  menuItem={menuItem}
                  activeMenu={activeMenu}
                  pathname={pathname}
                />
              ))}
              <li className='text-22 hover:text-main'>
                <Link href='/mypage' className='text-center '>
                  MY
                </Link>
              </li>
            </div>

            <div className='pb-15'>
              <HeaderSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
