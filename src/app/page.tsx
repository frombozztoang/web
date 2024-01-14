import React from 'react';
import Section1 from '@/components/templates/main/section1';
import Section3 from '@/components/templates/main/section3';
import Section2 from '@/components/templates/main/section2';
import Section4 from '@/components/templates/main/section4';
import Section5 from '@/components/templates/main/section5';
import Section6 from '@/components/templates/main/section6';
import Section7 from '@/components/templates/main/section7';
import Section8 from '@/components/templates/main/section8';

export default function RootPage() {
  return (
    <>
      <div className='mt-[-10px] tablet:mt-[-130px] tablet:px-20 box-border relative flex flex-col items-center justify-center'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </>
  );
}
