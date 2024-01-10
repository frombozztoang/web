'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '../../../components/molecules/Education/EducationList';
import NewsList from '../../../components/molecules/News/NewsList';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
const LearnWithUs: any = () => {
  const [activeToggle, setActiveToggle] = useState(2);
  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='w-auto h-full flex flex-col items-center justify-center'>
      <StudyToggle activeToggle={activeToggle} toggleFn={handleToggleChange} />
      {activeToggle === 1 ? (
        <div className='flex-flow'>
          <Education />
        </div>
      ) : (
        <NewsList />
      )}
    </div>
  );
};

export default LearnWithUs;
