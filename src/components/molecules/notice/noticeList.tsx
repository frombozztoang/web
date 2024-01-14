import { TNoticeProps } from '@/types/noticeTypes';
import Link from 'next/link';
import React from 'react';

const NoticeList = ({ title, created_at }: TNoticeProps) => {
  return (
    <div className='dark:bg-dark-secondary dark:border-dark-secondary w-[342px] tablet:w-[438px] desktop:w-[855px] h-53  tablet:[h-67px] desktop:h-[98px]  flex rounded-10 items-center justify-between  border-1 border-border02 bg-secondary  box-border py-[10.61px] px-[5px] tablet:py-[17.49px] tablet:px-[15.38px] desktop:py-25 desktop:px-16'>
      <div className='flex items-center w-3/4'>
        <div className='dark:text-dark-secondary label-small whitespace-nowrap rounded-5 tablet:font-pretendard tablet:font-semibold tablet:text-[15.39px] text-secondary py-[3.89px] px-[5.84px] tablet:py-[4.99px] tablet:px-[7.48px] desktop:py-8 desktop:px-12 bg-main mr-5 tablet:mr-[13.09px] desktop:mr-21 desktop:label-large'>
          업데이트
        </div>
        <div
          style={{
            textOverflow: 'ellipsis',
          }}
          className='dark:text-dark-typoPrimary overflow-hidden whitespace-nowrap w-full tablet:w-[200px] desktop:w-[600px] label-small tablet:font-pretendard tablet:font-semibold tablet:text-[15.39px] desktop:label-large text-primary'
        >
          {title}
        </div>
      </div>
      <div className='dark:text-dark-typoPrimary whitespace-nowrap paragraph-small tablet:font-pretendard tablet:font-regular tablet:text-[15.39px] text-primary desktop:paragraph-small'>
        {created_at}
      </div>
    </div>
  );
};

export default NoticeList;
