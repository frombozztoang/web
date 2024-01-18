import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Default_goldtoriv2 from '../../../public/icons/default_goldtoriv2.svg';

type TPolicyHeadLineProps = {
  isLiked: boolean;
  polyBizSjNm: string;
  polyItcnCn: string;
  onHeartClick: () => void;
};

const PolicyHeadLine: React.FC<TPolicyHeadLineProps> = ({ polyBizSjNm, polyItcnCn, isLiked, onHeartClick }) => {
  return (
    <div className='w-342 tablet:w-438 desktop:w-855 mb-8 tablet:mb-10 desktop:mb-20'>
      <Default_goldtoriv2 className='w-79 h-58 tablet:w-101 tablet:h-74 desktop:w-197 desktop:h-144 ml-auto' />
      <div className='flex justify-between relative z-toggle -mt-3 tablet:-mt-5 desktop:-mt-11 items-center border border-border01 rounded-4 tablet:rounded-5 desktop:rounded-10 desktop:border-2 px-13 py-17 desktop:px-33 desktop:py-44 bg-secondary dark:bg-dark-secondary dark:border-dark-secondary'>
        <div className='flex-col'>
          <div className='text-typoPrimary dark:text-dark-typoPrimary heading-medium whitespace-pre-line tablet:heading-large desktop:heading-xl'>
            {polyBizSjNm}
          </div>
          <div className='text-typoPrimary dark:text-dark-typoPrimary label-small tablet:label-medium text-justify desktop:label-medium font-bold desktop:mt-5'>
            {polyItcnCn}
          </div>
        </div>
        <button
          className='ml-10'
          onClick={(event) => {
            event.stopPropagation();
            onHeartClick();
          }}
        >
          {isLiked ? (
            <Heartclick className='w-29 h-29 tablet:w-38 tablet:h-38 desktop:w-37 desktop:h-37' />
          ) : (
            <Heartdefault className='w-29 h-29 tablet:w-38 tablet:h-38 desktop:w-37 desktop:h-37' />
          )}
        </button>
      </div>
    </div>
  );
};

export default PolicyHeadLine;
