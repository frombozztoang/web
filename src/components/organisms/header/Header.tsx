'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import React, { useState } from 'react';
import MenuItem, { menuItems } from './MenuItem';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className='z-50  font-teneda py-12 px-200 bg-white text-18'>
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
            <Link href='/learnWithUs'>모드설정버튼</Link>
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
