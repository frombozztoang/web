import SectionOne from '@/components/templates/main/SectionOne';
import SectionThree from '@/components/templates/main/SectionThree';
import SectionTwo from '@/components/templates/main/SectionTwo';

export default function RootPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-[-130px]'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}
