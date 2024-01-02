'use client';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import Accordian from '@/components/organisms/Accordian';
import SubHeader from '@/components/templates/myPage/SubHeader';
import React, { useState } from 'react';

const page = () => {
  const [toggle, setToggle] = useState(1);
  const toggleOption = [
    { label: '즐겨찾기', value: 1 },
    { label: '계정설정', value: 2 },
  ];
  const toggleFn = (toggleId: number) => {
    setToggle(toggleId);
  };

  return (
    <div className='flex flex-col items-center justify-start min-h-screen min-w-full'>
      <div className='my-63'>
        <StudyToggle activeToggle={toggle} toggleFn={toggleFn} />
      </div>
      <div>
        <SubHeader />
      </div>
      <div>
        <Accordian />
      </div>
      <div>
        <PolicyItem
          img={''}
          name={'정책 이름'}
          description={
            '안녕하세요! 반갑습니다. 이 정책은 매우 건강에 좋고 매워요! 안녕하세요! 반갑습니다. 이 정책은 매우 건강에 좋고 매워요!'
          }
          like={false}
        />
      </div>
    </div>
  );
};

export default page;
