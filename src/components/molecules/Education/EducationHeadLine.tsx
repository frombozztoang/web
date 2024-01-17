'use client';

import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';

type TEducationHeadLineProps = {
  title: string;
  bookmarked: boolean;
  onHeartClick: () => void;
};

const EducationHeadLine: React.FC<TEducationHeadLineProps> = ({ title, bookmarked, onHeartClick }) => {
  return (
    <div className='flex-col flex py-10'>
      <div className='w-68 h-81 ml-[270px] mt-[-5px] tablet:w-87 tablet:h-104 tablet:ml-[350px] desktop:w-178 desktop:h-153 desktop:ml-[680px]'>
        <Glasses_goldtorihalf />
      </div>
      <div className='w-342 flex px-15 py-20 mt-[-37px] border-2 border-border02 rounded-[20px] tablet:py-20 tablet:px-15 tablet:w-[438px] tablet:mt-[-49px] desktop:w-[855px] desktop:mt-[-39px] desktop:py-20 dark:bg-[#343434] dark:border-[#343434]'>
        <div className='w-300 desktop:w-[760px] tablet:w-400 tablet:pt-5 font-bold tablet:heading-medium desktop:heading-xxl dark:text-[#D6D6D6] desktop:pb-[10px] desktop:pl-5'>
          {title}
        </div>
        <p
          className='z-5 h-26 w-26 mr-5 pb-10 tablet:h-33  tablet:w-33 desktop:h-37 desktop:w-37 desktop:mt-12'
          onClick={onHeartClick}
        >
          {bookmarked ? <Heartclick /> : <Heartdefault />}
        </p>
      </div>
    </div>
  );
};

export default EducationHeadLine;
