'use client';
import React, { useState } from 'react';
import MainBtn from '@/components/atom/button/MainBtn';
import { postSignOut } from '@/api/userApi';

const setBtnItems = [
  { index: 0, label: '로그아웃' },
  { index: 1, label: '회원 탈퇴' },
];
const onLogoutClick = async () => {
  try {
    const data = await postSignOut();
  } catch (error) {
    console.error('Error postSignOut:', error);
  }
};

const onAuthClick = () => {};
const Setting = () => {
  const [btnItem, setBtnItem] = useState(0);
  const handleBtn = (index: number) => {
    setBtnItem(index);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='tablet:heading-xl mb-10 dark:text-dark-primary heading-medium'>계정 설정</div>

      <div className='flex'>
        {setBtnItems.map((i) => (
          <MainBtn
            onMouseEnter={() => handleBtn(i.index)}
            key={i.index}
            text={i.label}
            isOn={i.index === btnItem}
            onClick={i.label === '로그아웃' ? postSignOut : onAuthClick}
            styles='mr-10'
          />
        ))}
      </div>
    </div>
  );
};

export default Setting;
