'use client';
import React, { useState } from 'react';
import Education from '../../../components/molecules/Education/EducationList';
import NewsList from '../../../components/molecules/News/NewsList';
import StudyToggle2 from '@/components/atom/toggle/StudyToggle2';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import ContentsCreateBtn from '@/components/molecules/manage/ContentsCreateBtn';
import { postNewsApi } from '@/api/newsApi';
const LearnWithUs: any = () => {
  const [activeToggle, setActiveToggle] = useState(1); // 초기 값을 0으로 설정
  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='w-auto h-full flex flex-col items-center justify-center'>
      <StudyToggle2 activeToggle={activeToggle} toggleFn={handleToggleChange} />
      {activeToggle === 0 ? <Education /> : <NewsList />}
    </div>
  );
};

export default LearnWithUs;
