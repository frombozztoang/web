'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';

const MenuItem = ({
  menuItem,
  activeMenu,
  handleMenuHover,
  handleMenuLeave,
  handleMenuClick,
  pathname,
  ...props
}: TMenuItemProps) => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const isCurrentPage =
    (menuItem.name === '서비스 소개' && (pathname === '/' || pathname === '/notice')) || // 서비스 소개, 공지사항 페이지
    (menuItem.subMenu &&
      menuItem.subMenu.some((subItem) =>
        subItem.href === '/' ? pathname === '/' : pathname.startsWith(subItem.href),
      ));
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleMenuClickInternal = () => {
    handleSubMenuToggle();
    if (handleMenuClick) {
      handleMenuClick(menuItem.name);
    }
  };
  return (
    <>
      {isDesktop ? (
        <div
          {...props}
          className={
            ' mr-20 text-center text-black dark:text-dark-secondary transition-all relative active:text-main hover:text-main  z-header'
          }
          onMouseEnter={() => handleMenuHover && handleMenuHover(menuItem.name)}
          onMouseLeave={handleMenuLeave && (() => handleMenuLeave())}
        >
          <Link
            className={`text-18 min-w-max whitespace-nowrap  ${
              isCurrentPage ? 'text-main dark:text-dark-main' : 'dark:text-dark-primary'
            }`}
            href={menuItem.href}
          >
            {menuItem.name}
          </Link>
          {/* 서브 메뉴 */}
          {activeMenu === menuItem.name && menuItem.subMenu && (
            <ul className=' shadow-lg rounded-tl-0 rounded-xl w-120 absolute  left-0 px-10 pt-10 pb-5 text-center font-pretendard bg-white'>
              {menuItem.subMenu.map((subItem) => (
                <li
                  className='transition-all mb-10 hover:text-main  box-border flex-nowrap gap-10 text-16 text-primary font-semibold '
                  key={subItem.name}
                >
                  <Link href={subItem.href}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <div
            className={`transition-all text-18 tablet:text-23  mb-20 min-w-max whitespace-nowrap hover:cursor-pointer dark:hover:text-dark-primary ${
              isCurrentPage ? 'text-main dark:text-dark-primary' : ''
            }`}
            onClick={handleSubMenuToggle}
          >
            {menuItem.name}
          </div>
          {/* 서브 메뉴 */}
          {isSubMenuOpen && menuItem.subMenu && (
            <ul className='text-left font-pretendard '>
              {menuItem.subMenu.map((subItem) => (
                <li
                  className=' transition-all dark:hover:text-dark-primary hover:cursor-pointer mb-20 flex-nowrap label-medium tablet:text-20 font-pretendard text-primary font-semibold '
                  key={subItem.name}
                >
                  <Link href={subItem.href}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}{' '}
    </>
  );
};

type TMenuItemProps = {
  menuItem: {
    name: string;
    href: string;
    subMenu?: { name: string; href: string }[];
  };
  activeMenu: string | null;
  handleMenuHover?: (menuName: string) => void;
  handleMenuLeave?: () => void;
  handleMenuClick?: (menuName: string) => void;
  pathname: string;
};

type TMenuItems = {
  name: string;
  href: string;
  subMenu?: TMenuItems[];
};

export const menuItems: TMenuItems[] = [
  {
    name: '서비스 소개',
    href: '/',
    subMenu: [
      { name: '서비스 소개', href: '/' },
      { name: '공지사항', href: '/notice' },
    ],
  },
  {
    name: '금융, 뭐하지?',
    href: '/financial-products/deposits',
    subMenu: [
      { name: '예금', href: '/financial-products/deposits' },
      { name: '적금', href: '/financial-products/savings' },
      { name: 'CMA', href: '/financial-products/cma' },
    ],
  },
  {
    name: '금융, 배우자!',
    href: '/educations',
    subMenu: [
      { name: '금융 교육', href: '/educations' },
      { name: '금융 뉴스', href: '/news' },
    ],
  },
  { name: '금융, 고마워!', href: '/policies', subMenu: [{ name: '청년 금융 정책', href: '/policies' }] },
];

export default MenuItem;
