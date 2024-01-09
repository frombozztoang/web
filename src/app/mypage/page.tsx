'use client';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import Setting from '@/components/templates/mypage/Setting';
import Favorites from '@/components/templates/mypage/Favorites';
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
    </div>
  );
};

export default page;
