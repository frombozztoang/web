'use client';
import EditorRenderer from '@/components/templates/editor/EditorRenderer';
import { useSearchParams } from 'next/navigation';
type TNewsContentProps = {
  content: string;
};
const NewsContent: React.FC<TNewsContentProps> = ({ content }) => {
  return (
    <div>
      <div className='mb-200'>
        <div className='w-342 border-2 border-border02 rounded-[20px] tablet:w-[438px] desktop:w-[855px] dark:bg-[#343434]  dark:border-[#343434]'>
          <div className='desktop:p-44 p-17 tablet:p-22 paragraph-small tablet:paragraph-medium desktop:paragraph-large dark:text-[#D6D6D6]'>
            <EditorRenderer contents={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
