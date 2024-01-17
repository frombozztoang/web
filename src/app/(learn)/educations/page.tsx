'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Education from '@/components/molecules/Education/EducationList';
import NewsList from '@/components/molecules/News/NewsList';
import StudyToggle2 from '@/components/atom/toggle/StudyToggle2';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import ContentsCreateBtn from '@/components/molecules/manage/ContentsCreateBtn';
import { testApiEditor } from '@/api/testApi';
import useUser from '@/hooks/useUser';
import { postEduApi } from '@/api/eduApi';

const Educations: any = () => {
  const [activeToggle, setActiveToggle] = useState(0); // 초기 값을 0으로 설정
  const handleToggleChange = (toggleId: number) => {
    setActiveToggle(toggleId); // activeToggle 값 업데이트
  };

  return (
    <div className='w-auto h-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <StudyToggle2 activeToggle={activeToggle} toggleFn={handleToggleChange} href={''} />
        {activeToggle === 0 ? (
          <div className='flex-flow'>
            <Education />
          </div>
        ) : (
          <NewsList />
        )}
        <ManageBtns>
          {/* TODO: 글 작성하는 api 연결 (createFn) */}
          <ContentsCreateBtn createFn={postEduApi} />
        </ManageBtns>
      </div>
    </div>
  );
};

export default Educations;
