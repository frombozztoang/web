'use client';
import MainBtn from '@/components/atom/button/MainBtn';
import React, { useState } from 'react';

const setBtnItems = [
  { index: 0, label: '로그아웃' },
  { index: 1, label: '회원 탈퇴' },
];

const Setting = () => {
  const [btnItem, setBtnItem] = useState(0);
  const handleBtn = (index: number) => {
    setBtnItem(index);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='heading-xl mb-10 dark:text-dark-primary'>계정 설정</div>

      <div className='flex'>
        {setBtnItems.map((i) => (
          <MainBtn
            onClick={() => handleBtn(i.index)}
            key={i.index}
            text={i.label}
            isOn={i.index === btnItem}
            mr='mr-10'
          />
        ))}
      </div>
    </div>
  );
};

export default Setting;
