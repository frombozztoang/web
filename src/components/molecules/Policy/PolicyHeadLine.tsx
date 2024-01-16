import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Default_goldtoriv2 from '../../../public/icons/default_goldtoriv2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';

type TPolicyHeadLineProps = {
  isLiked: boolean;
  polyBizSjNm: string;
  polyItcnCn: string;
  onHeartClick: () => void;
};

const PolicyHeadLine: React.FC<TPolicyHeadLineProps> = ({ polyBizSjNm, polyItcnCn, isLiked, onHeartClick }) => {
  const formattedContent =
    polyItcnCn && polyItcnCn.length > 52 ? `${polyItcnCn.slice(0, 52)}\n${polyItcnCn.slice(52)}` : polyItcnCn;

  return (
    <div className='w-[342px] tablet:w-[438px] desktop:w-855 '>
      <div>
        <div className='w-79 h-58 ml-[260px] tablet:w-101 tablet:h-74 tablet:ml-[339px] desktop:w-197 desktop:h-144 desktop:ml-[687px]'>
          <Default_goldtoriv2 />
        </div>
        <div className='w-full flex border-2 mb-10 mt-[-7px] py-18 tablet:mt-[-10px] border-border01 rounded desktop:mt-[-17px] z-0 dark:bg-[#343434] dark:border-[#343434]'>
          <div className='flex py-20 tablet:py-23 desktop:py-20 desktop:pt-40 '>
            <div className='flex-col'>
              <div className='heading-medium whitespace-pre-line px-[20px] w-260 tablet:w-320 tablet:heading-large desktop:w-700  desktop:heading-xl  z-5 font-bold desktop:mt-[-30px] dark:text-[#D6D6D6]'>
                {polyBizSjNm}
                <div className='label-small tablet:label-medium pt-5 text-justify desktop:label-medium tablet:w-220 font-bold desktop:w-700 desktop:mt-5'>
                  {formattedContent}
                </div>
              </div>
            </div>
            <button
              className='z-10 w-29 h-29 tablet:w-38 tablet:h-38 ml-40 mt-30 tablet:mt-40 tablet:ml-60 desktop:w-37 desktop:h-37 desktop:ml-70 desktop:mt-[-10px] '
              onClick={onHeartClick}
            >
              {isLiked ? <Heartclick /> : <Heartdefault />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
