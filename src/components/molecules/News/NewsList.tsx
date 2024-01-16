// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Link from 'next/link';
import { deleteNewsBookmarkApi, getNewsListData, postNewsBookmarkApi } from '@/api/newslistapi/newslistapi';
import Pagination from '@/components/molecules/pagination/Pagination';

export type TNews = {
  id: number;
  title: string;
  content: string;
  bookmarked: boolean;
  created_at: string;
  onHeartClick: () => void;
};

export type TNewsListApiResponse = {
  content: TNews[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
const NewsList = () => {
  const [NewsListData, setNewsListData] = useState<TNews[] | undefined>([]);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const fetchData = async () => {
    try {
      const data = await getNewsListData(`size=10&page=${pageNum}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setNewsListData(data.content);
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
        apiResult = await deleteNewsBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postNewsBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setNewsListData(NewsListData?.map((item) => (item.id === id ? { ...item, bookmarked: !bookmarked } : item)));
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='desktop:py-39 tablet:py-46 py-20 w-342 tablet:w-[438px] desktop:w-[855px] '>
      {NewsListData?.map((i, index) => (
        <div
          key={i.id}
          className='flex w-full mb-10 border-2 border-color-[#D6D6D6] rounded-[10px] border-border02 hover:border-main hover:border-2 dark:bg-[#343434] dark:border-[#383838]'
        >
          <Link
            key={i.id}
            href={{
              pathname: `news/${i.id}`,
            }}
          >
            <div className='bg-[#6C6C6C] w-87 h-full tablet:w-[112px] desktop:w-[167px] border-border-02 rounded-l-[10px]  '>
              이미지칸
            </div>
          </Link>
          <div className='flex justify-evenly '>
            <Link
              key={i.id}
              href={{
                pathname: `/news/${i.id}`,
              }}
            >
              <div className='flex-col bg-secondary px-12 w-[210px] tablet:w-[300px] desktop:w-[630px] dark:bg-[#343434]'>
                <h2 className='heading-small tablet:heading-medium desktop:heading-xl font-bold mt-[5px] pb-14 dark:text-[#D6D6D6]'>
                  {i.title}
                </h2>
                <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:paragraph-large'>
                  <div className='w-150 pb-29 tablet:w-180 tablet:h-[26px] desktop:w-600 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {i.content}
                  </div>
                  <div className='pb-10 pt-5'>{i.created_at}</div>
                </div>
              </div>
            </Link>
            <p
              className='z-10 mt-28 h-[26px] w-[26px] tablet:h-33 tablet:w-33 desktop:w-37 tablet:ml-[-15px] tablet:mt-35 desktop:h-37 desktop:mt-[50px]'
              onClick={(event) => {
                event.stopPropagation();
                onHeartClick(i.id, i.bookmarked);
              }}
            >
              {i.bookmarked ? <Heartclick /> : <Heartdefault />}
            </p>
          </div>
        </div>
      ))}
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default NewsList;
