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
    <div className='w-[342px] tablet:w-[789px] desktop:w-855'>
      <div>
        <div className='w-79 h-58 ml-[260px] tablet:w-181 tablet:h-132 tablet:ml-[600px] desktop:w-197 desktop:h-144 desktop:ml-[687px]'>
          <Default_goldtoriv2 />
        </div>
        <div className='w-full flex border-2 mb-10 mt-[-7px] tablet:mt-[-15px] border-02 rounded-[20px] py-[50px]  desktop:mt-[-19px] z-0'>
          <div className='flex-col'>
            <div className='heading-medium px-[20px] tablet:text-37 desktop:heading-xl  z-5 font-bold pb-10 '>
              {title}
              <div className='mobile:hidden label-small desktop:block tablet:block text-justify desktop:label-medium tablet:w-500 font-bold'>
                {formattedContent}
              </div>
            </div>
            <p className='z-10 w-29 h-29 ml-[290px] mt-[-30px] tablet:w-68 tablet:h-68 tablet:mt-[-85px] tablet:ml-[650px] desktop:w-37 desktop:h-37 desktop:ml-[800px]'>
              {isHeartClick ? <Heartclick onClick={handleClick} /> : <Heartdefault onClick={handleClick} />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
