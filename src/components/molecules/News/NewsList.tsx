// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Link from 'next/link';

import Pagination from '@/components/molecules/pagination/Pagination';
import useUser from '@/hooks/useUser';
import { getNewsListData, postNewsApi } from '@/api/newsApi';
import { TNews } from '@/types/newsTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/bookmarkApi';
import { postNoticeApi } from '@/api/noticeApi';
import ContentsCreateBtn from '../manage/ContentsCreateBtn';
import ManageBtns from '../manage/ManageBtns';
import EditorRenderer from '@/components/templates/editor/EditorRenderer';
import SlateCompiler from '@/libs/editor/slateCompiler';
import truncateText from '@/utils/truncateText';

const NewsList = () => {
  const slateCompiler = new SlateCompiler();
  const [NewsListData, setNewsListData] = useState<TNews[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);
  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const fetchData = async () => {
    try {
      const data = await getNewsListData(`size=10&page=${pageNum}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setNewsListData(data.content);
        console.log(NewsListData);
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const onHeartClick = async (id: number, bookmarked: boolean) => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteEducationBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setNewsListData(NewsListData?.map((item) => (item.id === id ? { ...item, bookmarked: !bookmarked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='desktop:py-39 tablet:py-46 py-20 w-342 tablet:w-438 desktop:w-855'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      {NewsListData?.map((i, index) => {
        let date = new Date(i.created_at);
        let dateOnly = date.toISOString().split('T')[0];
        return (
          <Link
            key={index}
            href={{
              pathname: `news/${i.id}`,
            }}
            className='p-11 tablet:p-15 desktop:px-20 flex w-full mb-10 border-2 border-color-[#D6D6D6] rounded-10 border-border02 hover:border-main hover:border-2 dark:bg-[#343434] dark:border-[#383838] cursor-pointer'
          >
            <div className='flex justify-between w-full items-center'>
              <div className='flex-col rounded-10 dark:bg-[#343434]'>
                <h2 className='whitespace-pre-line w-280 tablet:w-365 desktop:w-760 heading-small tablet:heading-medium desktop:heading-xl font-bold pb-5 desktop:pb-10 dark:text-[#D6D6D6]'>
                  {i.title}
                </h2>
                <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:paragraph-large'>
                  {truncateText(slateCompiler.toPlainText(JSON.parse(i.content)), 28)}
                  <div>{dateOnly}</div>
                </div>
              </div>
              <button
                className='h-26 w-26 tablet:h-33 tablet:w-33 desktop:w-37 desktop:h-37'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(i.id, i.bookmarked);
                }}
              >
                {i.bookmarked ? <Heartclick /> : <Heartdefault />}
              </button>
            </div>
          </Link>
        );
      })}
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      <div className='mt-43'>
        <ManageBtns>
          <ContentsCreateBtn createFn={postNewsApi} />
        </ManageBtns>
      </div>
    </div>
  );
};

export default NewsList;
