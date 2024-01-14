'use client';
import NoticeList from '@/components/molecules/notice/noticeList';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { getNoticeListApi } from '@/api/noticeApi';
import { TNoticeProps } from '@/types/noticeTypes';
import Pagination from '@/components/molecules/pagination/Pagination';

const Notice = () => {
  const [notices, setNotices] = useState<TNoticeProps[] | undefined>([]);
  const [totalElements, setTotalElements] = useState<number | undefined>(0);
  const [totalPages, setTotalPages] = useState<number | undefined>(0);
  const [pageNum, setPageNum] = useState(0);
  const fetchData = async () => {
    try {
      const data = await getNoticeListApi({ pageNum: pageNum, size: 8 });
      setNotices(data?.content);
      setTotalElements(data?.totalElements);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.error('Error fetching Notice:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchData();
  }, [pageNum]);

  useEffect(() => {
    console.log('Notices:', notices);
    console.log('Total Elements:', totalElements);
    console.log('Total Pages:', totalPages);
  }, [notices, totalElements, totalPages]);
  return (
    <>
      <div>
        <div className='heading-large border-b-2 border-black pb-10  mb-10 dark:text-dark-primary dark:border-white '>
          공지사항
        </div>
        {notices?.map((i) => {
          let date = new Date(i.created_at);
          let dateOnly = date.toISOString().split('T')[0];
          return (
            <ul key={i.id} className='mb-8 tablet:mb-10 desktop:mb-20'>
              <Link href={`/notice/${i.id}`}>
                <NoticeList id={i.id} title={i.title} created_at={dateOnly} content={i.content} />
              </Link>
            </ul>
          );
        })}
      </div>
      {totalPages && <Pagination pageNum={pageNum} pageTotalNum={totalPages} setPageNum={setPageNum} />}
    </>
  );
};

export default Notice;
