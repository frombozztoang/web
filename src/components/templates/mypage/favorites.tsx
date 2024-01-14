'use client';
import React, { useState } from 'react';
import SubBtn from '@/components/atom/button/SubBtn';
import Educations from '../../organisms/mypage/Educations';
import FinancialProducts from '../../organisms/mypage/FinancialProducts';
import Policies from '../../organisms/mypage/Policies';

export const subHeaderItems = [
  { label: '금융, 뭐하지?', index: 0 },
  { label: '금융, 배우자!', index: 1 },
  { label: '금융, 고마워!', index: 2 },
];

const Favorites = () => {
  const [subHeaderItem, setSubHeaderITem] = useState(0);
  const handleSubHeaderItem = (index: number) => {
    setSubHeaderITem(index);
  };
  return (
    <div className='flex flex-col w-342 tablet:w-438 desktop:w-855'>
      <div className='heading-large tablet:text-27 border-b-2 border-black pb-10  mb-10 dark:text-dark-primary dark:border-white '>
        즐겨찾기
      </div>
      <div className='flex justify-between tablet:justify-start mb-63'>
        {subHeaderItems.map((i) => (
          <SubBtn
            key={i.index}
            text={i.label}
            isOn={i.index === subHeaderItem}
            mr='tablet:mr-10'
            onClick={() => handleSubHeaderItem(i.index)}
          />
        ))}
      </div>
      {subHeaderItem === 0 && <FinancialProducts />} {/* 금융, 뭐하지? */}
      {subHeaderItem === 1 && <Educations />} {/* 금융, 배우자! */}
      {subHeaderItem === 2 && <Policies />} {/* 금융, 고마워! */}
    </div>
  );
};

export default Favorites;
