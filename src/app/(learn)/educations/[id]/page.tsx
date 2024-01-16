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

const Education = ({ params }: { params: { id: number } }) => {
  const [EducationInfo, setEducationInfo] = useState<TEducation | undefined>();
  const [bookmarked, setbookmarked] = useState(false);
  const fetchdata = async () => {
    try {
      const data = await getEducationIdApi(params.id);
      if (data) {
        setEducationInfo(data);
        setbookmarked(data.bookmarked);
      }
    } catch (error) {
      console.error('Error fetching savingFetchData:', error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const onHeartClick = async (id: number, bookmarked: boolean, contentType: 'EDU_CONTENT') => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteEducationBookmarkApi(id, 'EDU_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'EDU_CONTENT');
      }
      if (apiResult !== undefined) {
        setbookmarked(!bookmarked);
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching NewsBookmark:', error);
    }
  };
  return (
    <div className='flex items-center justify-center mt-[-70px] '>
      <div className='flex-col flex'>
        {EducationInfo && (
          <EducationHeadLine
            title={EducationInfo.title}
            bookmarked={EducationInfo.bookmarked}
            onHeartClick={() => onHeartClick(params.id, EducationInfo.bookmarked, 'EDU_CONTENT')}
          />
        )}
        {EducationInfo && <EducationContent content={EducationInfo.content} />}
        <ManageBtns>
          {/* TODO: 글 수정/삭제하는 api 연결 (editFn, deleteFn) TODO: title, content 실제 값으로 수정 */}
          {EducationInfo && (
            <ContentsEditBtn title={EducationInfo.title} content={EducationInfo.content} editFn={testApiEditor} />
          )}
          <ContentsDeleteBtn deleteFn={testApi} />
        </ManageBtns>
      </div>
    </div>
  );
};

export default Education;
// 디자인 만든거
