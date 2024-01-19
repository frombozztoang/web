'use client';

import EducationHeadLine from '@/components/molecules/Education/EducationHeadLine';
import EducationContent from '@/components/molecules/Education/EducationContent';
import ContentsEditBtn from '@/components/molecules/manage/ContentsEditBtn';
import ContentsDeleteBtn from '@/components/molecules/manage/ContentsDeleteBtn';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import useEduDetail from '@/hooks/useEduDetail';
import { deleteEduApi, patchEduApi } from '@/api/eduApi';
import { postEducationBookmarkApi, deleteEducationBookmarkApi } from '@/api/bookmarkApi';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import { useState } from 'react';

const Education = ({ params }: { params: { id: number } }) => {
  const { eduData } = useEduDetail(params.id);
  //const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   if (eduData) {
  //     setIsLiked(eduData.bookmarked);
  //   }
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [eduData]);

  const onHeartClick = async (id: number, isLiked: boolean | undefined) => {
    // try {
    //   let apiResult;
    //   if (isLiked) {
    //     apiResult = await deleteEducationBookmarkApi(id, 'EDU_CONTENT');
    //   } else {
    //     apiResult = await postEducationBookmarkApi(id, 'EDU_CONTENT');
    //   }
    //   if (apiResult !== undefined) {
    //     setIsLiked(!isLiked);
    //   } else {
    //     setShowModal(true);
    //   }
    // } catch (error) {
    //   console.error('Error fetching bankBookmark:', error);
    // }
  };

  return eduData ? (
    <div className='flex items-center justify-center desktop:-mt-70'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className='flex-col flex'>
        <EducationHeadLine title={eduData.title} bookmarked={true} onHeartClick={() => onHeartClick(params.id, true)} />
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
