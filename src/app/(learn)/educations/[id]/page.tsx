'use client';

import EducationHeadLine from '@/components/molecules/Education/EducationHeadLine';
import EducationContent from '@/components/molecules/Education/EducationContent';
import ContentsEditBtn from '@/components/molecules/manage/ContentsEditBtn';
import ContentsDeleteBtn from '@/components/molecules/manage/ContentsDeleteBtn';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import { TEducation } from '@/components/molecules/Education/EducationList';
import { useEffect, useState } from 'react';
import { getEducationIdApi } from '@/api/education/educationDetailApi';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/education/educationApi';

import { testApi, testApiEditor } from '@/api/testApi';
import useEduDetail from '@/hooks/useEduDetail';
import { deleteEduApi, patchEduApi } from '@/api/eduApi';

const Education = ({ params }: { params: { id: number } }) => {
  const { eduData } = useEduDetail(params.id);

  const onHeartClick = async (id: number, bookmarked: boolean, contentType: 'EDU_CONTENT') => {};
  return eduData ? (
    <div className='flex items-center justify-center mt-[-70px] '>
      <div className='flex-col flex'>
        <EducationHeadLine
          title={eduData.title}
          bookmarked={eduData.bookmarked}
          onHeartClick={() => onHeartClick(params.id, eduData.bookmarked, 'EDU_CONTENT')}
        />
        {eduData && <EducationContent content={eduData.content} />}
        <ManageBtns>
          <ContentsEditBtn id={eduData.id} title={eduData.title} content={eduData.content} editFn={patchEduApi} />
          <ContentsDeleteBtn deleteFn={() => deleteEduApi(eduData.id)} />
        </ManageBtns>
      </div>
    </div>
  ) : null;
};

export default Education;
// 디자인 만든거
