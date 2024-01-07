'use client';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import Accordian from '@/components/organisms/mypage/Accordian';
import Setting from '@/components/templates/myPage/Setting';
import SubHeader from '@/components/organisms/mypage/SubHeader';
import Favorites from '@/components/templates/myPage/Favorites';
import React, { useState } from 'react';

const page = () => {
  const [toggle, setToggle] = useState(0);

  const toggleFn = (toggleId: number) => {
    setToggle(toggleId);
  };

  return (
    <div className='flex flex-col items-center justify-start min-h-screen min-w-full'>
      <div className=''>
        <StudyToggle activeToggle={toggle} toggleFn={toggleFn} />
      </div>
      <div>{toggle === 0 ? <Favorites /> : <Setting />}</div>

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
