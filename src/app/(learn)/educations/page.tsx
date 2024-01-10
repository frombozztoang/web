'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '@/components/molecules/Education/EducationList';
import NewsList from '@/components/molecules/News/NewsList';
import StudyToggle from '@/components/atom/toggle/StudyToggle';

const Educations: any = () => {
  const [activeToggle, setActiveToggle] = useState(1);

  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='w-auto h-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <div className=''>
          <StudyToggle activeToggle={activeToggle} toggleFn={handleToggleChange} />
        </div>
        {activeToggle === 1 ? (
          <div className=''>
            <Education />
          </div>
        ) : (
          <NewsList />
        )}
      </div>
    </div>
  );
};

export default Educations;
