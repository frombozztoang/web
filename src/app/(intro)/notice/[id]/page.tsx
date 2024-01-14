'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ModifiedTori from '@/public/icons/glasses_goldtorihalf.svg';
import NoticeList from '@/components/molecules/notice/noticeList';
import { TNoticeProps } from '@/types/noticeTypes';
import { useRouter } from 'next/router';
import { getNoticeApi } from '@/api/noticeApi';

const Page = ({ params }: { params: { id: number } }) => {
  const [notice, setNotice] = useState<TNoticeProps | undefined>();
  const fetchData = async () => {
    try {
      const data = await getNoticeApi(params.id);
      if (data) {
        let date = new Date(data.created_at);
        let dateOnly = date.toISOString().split('T')[0];
        data.created_at = dateOnly;
        setNotice(data);
      }
    } catch (error) {
      console.error('Error fetching Notice:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return notice ? (
    <div className='w-full flex  flex-col justify-center items-center'>
      <div className='mb-10 tablet:mb-30 flex flex-col items-end'>
        <ModifiedTori className='w-68 h-53 tablet:w-144 tablet:h-132 desktop:w-178 desktop:h-153 object-contain' />
        <NoticeList id={notice.id} title={notice.title} created_at={notice.created_at} content={notice.content} />
      </div>
      <div className='dark:bg-dark-secondary dark:border-dark-secondary dark:text-dark-typoPrimary w-[342px] tablet:w-[438px] desktop:w-[855px]  p-16 tablet:p-35 desktop:p-44  box-border h-auto min-h-422 tablet:min-h-[600px] desktop:min-h-[1056px] rounded-8 bg-secondary border-[0.8px] border-border02 '>
        <div className='tablet:text-15 text-12  desktop:text-16 '>{notice.content}</div>
      </div>
    </div>
  ) : (
    <div>음</div>
  );
};

export default Page;
