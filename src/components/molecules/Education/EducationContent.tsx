'use client';
import EditorRenderer from '@/components/templates/editor/EditorRenderer';
import { useSearchParams } from 'next/navigation';
type TEducationContentProps = {
  content: string;
};
const EducationContent: React.FC<TEducationContentProps> = ({ content }) => {
  return (
    <div>
      <div className='mb-39 tablet:mb-56 desktop:mb-[300px]'>
        <div className='w-342 border-2 border-border02 rounded-[20px] py-[270px] tablet:w-[438px] desktop:w-[855px] dark:bg-[#343434] dark:border-[#343434]'>
          <div className='px-[20px] mt-[-250px] paragraph-small tablet:paragraph-medium desktop:paragraph-large text-justify dark:text-[#D6D6D6] '>
            <EditorRenderer contents={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
