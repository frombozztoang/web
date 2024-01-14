import { useSearchParams } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Default_goldtoriv2 from '../../../public/icons/default_goldtoriv2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import { useState } from 'react';

type TPolicyHeadLineProps = {
  title: string;
  content: string;
};

const PolicyHeadLine: React.FC<TPolicyHeadLineProps> = ({ title, content }) => {
  const [isHeartClick, setIsHeartClick] = useState(false);

  const handleClick = () => {
    setIsHeartClick(!isHeartClick);
  };

  const formattedContent = content && content.length > 52 ? `${content.slice(0, 52)}\n${content.slice(52)}` : content;

  return (
    <div className='w-[342px] tablet:w-[438px] desktop:w-855 '>
      <div>
        <div className='w-79 h-58 ml-[260px] tablet:w-101 tablet:h-74 tablet:ml-[339px] desktop:w-197 desktop:h-144 desktop:ml-[687px]'>
          <Default_goldtoriv2 />
        </div>
        <div className='w-full flex border-2 mb-10 mt-[-7px] py-18 tablet:mt-[-10px] border-02 rounded desktop:mt-[-17px] z-0 dark:bg-[#343434] dark:border-[#343434]'>
          <div className='flex-col tablet:py-23 desktop:py-35 '>
            <div className='heading-medium px-[20px] tablet:heading-large  desktop:heading-xl  z-5 font-bold pb-10 desktop:mt-[-30px] dark:text-[#D6D6D6]'>
              {title}
              <div className='label-small tablet:label-medium text-justify desktop:label-medium tablet:w-220 font-bold desktop:w-700 desktop:mt-5'>
                {formattedContent}
              </div>
            </div>
            <p className='z-10 w-29 h-29 ml-[290px] mt-[-35px] tablet:w-38 tablet:h-38 tablet:mt-[-120px] tablet:ml-[380px] desktop:w-37 desktop:h-37 desktop:ml-[790px] desktop:mt-[-70px]'>
              {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
