'use client';

import Heartdefault from '../../../public/icons/grayheart2.svg';
import Glasses_goldtorihalf from '../../../public/icons/glasses_goldtorihalf.svg';
import Heartclick from '@/public/icons/clickheart2.svg';

type TEducationHeadLineProps = {
  title: string;
  bookmarked: boolean;
  onHeartClick: () => void;
};

const EducationHeadLine: React.FC<TEducationHeadLineProps> = ({ title, bookmarked, onHeartClick }) => {
  return (
    <div className='flex-col flex mb-8 tablet:mb-10 desktop:mb-20'>
      <Glasses_goldtorihalf className='w-68 h-81 tablet:w-87 tablet:h-104 desktop:w-178 desktop:h-153 ml-auto' />
      <div className='flex justify-between relative items-center z-toggle -mt-20 tablet:-mt-25 desktop:-mt-18 w-342 p-12 tablet:p-17 border-2 border-border02 rounded-10 desktop:rounded-20 tablet:py-20 tablet:px-15 tablet:w-438 desktop:w-855 desktop:px-48 desktop:py-52 bg-secondary dark:bg-dark-secondary dark:border-[#343434]'>
        <div className='w-300 tablet:w-400 desktop:w-760 heading-small tablet:heading-medium desktop:heading-xxl dark:text-[#D6D6D6]'>
          {title}
        </div>
        <button
          onClick={(event) => {
            event.stopPropagation();
            onHeartClick();
          }}
        >
          {/* {bookmarked ? (
            <Heartclick className='w-25 h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          ) : (
            <Heartdefault className='w-25 h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          )} */}
        </button>
      </div>
    </div>
  );
};

export default EducationHeadLine;
