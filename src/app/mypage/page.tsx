'use client';
import React, { useState } from 'react';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import Setting from '@/components/templates/mypage/setting';
import Favorites from '@/components/templates/mypage/favorites';
import WithLoginModal from '@/components/templates/login/WithLoginModal';


const Page = () => {
  const [toggle, setToggle] = useState(0);

  const toggleFn = (toggleId: number) => {
    setToggle(toggleId);
  };

  return (
    <WithLoginModal>
      <div className='flex flex-col items-center justify-start min-h-screen min-w-full'>
        <div className=''>
          <StudyToggle activeToggle={toggle} toggleFn={toggleFn} />
        </div>
        <div className='mt-63'>{toggle === 0 ? <Favorites /> : <Setting />}</div>
      </div>
    </WithLoginModal>
  );
};

export default Page;
