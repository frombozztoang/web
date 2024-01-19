'use client';

import NewsHeadLine from '@/components/molecules/News/NewsHeadLine';
import NewsContent from '@/components/molecules/News/NewsContent';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { deleteNewsApi, getNewsIdApi, patchNewsApi } from '@/api/newsApi';
import { TNews } from '@/types/newsTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/bookmarkApi';
import ManageBtns from '@/components/molecules/manage/ManageBtns';
import ContentsDeleteBtn from '@/components/molecules/manage/ContentsDeleteBtn';
import ContentsEditBtn from '@/components/molecules/manage/ContentsEditBtn';

const News = ({ params }: { params: { id: number } }) => {
  const [NewsInfo, setNewsInfo] = useState<TNews | undefined>();
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const fetchdata = async () => {
    try {
      const data = await getNewsIdApi(params.id);
      if (data) {
        let date = new Date(data.created_at);
        let dateOnly = date.toISOString().split('T')[0];
        data.created_at = dateOnly;
        setNewsInfo(data);
        setIsLiked(data.bookmarked);
      }
    } catch (error) {
      console.error('Error fetching savingFetchData:', error);
    }
  };

  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deleteEducationBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setIsLiked(!isLiked);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center mt-[-10px]'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      {NewsInfo && (
        <div>
          <NewsHeadLine
            title={NewsInfo.title}
            created_at={NewsInfo.created_at}
            bookmarked={isLiked}
            onHeartClick={() => onHeartClick(params.id, isLiked)}
          />

          <div className='desktop:mb-[-150px] mb-0'>{NewsInfo && <NewsContent content={NewsInfo.content} />}</div>
          <ManageBtns>
            <ContentsEditBtn id={NewsInfo.id} title={NewsInfo.title} content={NewsInfo.content} editFn={patchNewsApi} />
            <ContentsDeleteBtn deleteFn={() => deleteNewsApi(params.id)} />
          </ManageBtns>
        </div>
      )}
    </div>
  );
};

export default News;
