'use client';

import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';

type TEducationHeadLineProps = {
  title: string;
};

const EducationHeadLine: React.FC<TEducationHeadLineProps> = ({ title }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);

  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };

  return (
    <div className='flex-col flex py-10'>
      <div className='w-68 h-81 ml-[260px] mt-[-5px] tablet:w-153 tablet:h-183 tablet:ml-[600px] desktop:w-178 desktop:h-153 desktop:ml-[680px]'>
        <Glasses_goldtorihalf />
      </div>
      <div className='w-342 flex-col py-40 mb-10 mt-[-37px] border-2 border-color-[#D6D6D6] rounded-[20px] tablet:w-[771px] tablet:mt-[-85px] desktop:w-[855px] desktop:mt-[-40px]'>
        <div className='w-300 desktop:w-[800px] mt-[-30px] p-10 tablet:p-20 tablet:w-700 desktop:pr-20 font-bold tablet:text-28  desktop:heading-xxl '>
          {title}
        </div>
        <p className='z-5 mt-[-35px] h-26 w-26 ml-[300px] tablet:h-60 tablet:w-60 tablet:ml-[660px] tablet:mt-[-70px] desktop:ml-[775px] desktop:h-37 desktop:w-37 desktop:mt-[-70px]'>
          {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
        </p>
      </div>
    </div>
  );
};

export default EducationHeadLine;
