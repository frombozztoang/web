'use client';
import { useSearchParams } from 'next/navigation';
type TNewsContentProps = {
  content: string;
};
const NewsContent: React.FC<TNewsContentProps> = ({ content }) => {
  return (
    <div>
      <div className='mb-39 tablet:mb-56 desktop:mb-[300px]'>
        <div className='w-342 border-2 border-color-[#D6D6D6] rounded-[20px] py-[270px] tablet:w-[771px] desktop:w-[855px]'>
          <div className='px-[20px] mt-[-250px] paragraph-small tablet:text-27 desktop:paragraph-large'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
