import React from 'react';
import SectionOne from '@/components/templates/main/sectionone';
import SectionThree from '@/components/templates/main/sectionthree';
import SectionTwo from '@/components/templates/main/sectiontwo';

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
