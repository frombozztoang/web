'use client';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import { useSearchParams } from 'next/navigation';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
type TNewsHeadLineProps = {
  title: string;
  date: string;
};
const NewsHeadLine: React.FC<TNewsHeadLineProps> = ({ title, date }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };
  return (
    <div className=''>
      <div>
        <div className='w-68 h-81 ml-[260px] mt-[-5px] tablet:w-87 tablet:h-104 tablet:ml-[350px] desktop:w-178 desktop:h-153 desktop:ml-[680px]'>
          <Glasses_goldtorihalf />
        </div>
        <div className='w-342 flex-col py-40 mb-10 mt-[-37px] border-2 border-color-[#D6D6D6] rounded-[20px] tablet:w-[438px] tablet:mt-[-48px] desktop:w-[855px] desktop:mt-[-38px] dark:border-[#383838] dark:bg-[#343434] dark:text-[#D6D6D6]'>
          <div className='w-300 desktop:w-[800px] mt-[-30px] p-10 tablet:p-20 tablet:w-300 tablet:mt-[-45px] desktop:pr-20 '>
            <div className='ml-5 heading-medium font-bold typoPrimary tablet:heading-large desktop:heading-xxl '>
              {title}
            </div>
            <div className='ml-5 paragraph-small text-typoSecondary tablet:paragraph-medium desktop:paragraph-medium dark:text-[#D6D6D6)]'>
              {date}
            </div>
          </div>
          <p className='z-5 h-26 w-26 mt-[-45px] ml-[290px] tablet:w-33 tablet:h-33 tablet:ml-[380px] tablet:mt-[-70px] desktop:ml-[770px] desktop:w-37 desktop:h-37'>
            {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadLine;
