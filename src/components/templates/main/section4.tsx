'use client';
import React from 'react';
import Image from 'next/image';

import section4Mock from '@/public/icons/main/section4Mock.png';
import section4Logo from '@/public/icons/main/section4Logo.png';
import section4MockM from '@/public/icons/main/section4MockM.png';
import section4LogoM from '@/public/icons/main/section4LogoM.png';
import section4MockMD from '@/public/icons/main/section4MockMD.png';
import section4MockD from '@/public/icons/main/section4MockD.png';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';
import useThemeCheck from '@/hooks/useThemeCheck';

const Section4 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const isDarkMode = useThemeCheck();

  const mockImage = isDarkMode ? section4MockD : section4Mock;
  const mobileMockImage = section4MockMD ? section4MockD : section4MockM;

  return (
    <div className='mt-200 tablet:mt-[450px] min-h-screen label-small  tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-70 w-full  '>
            <div className=' text-left'>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 뭐하지</h1>
                <h1 className=' text-70 text-main rotate-12 '>?</h1>
              </div>
              <h1 className='text-12'>안전 자산에 속하는 예금, 적금, CMA를 조건별로</h1>
              <h1 className='text-12'>쉽게 이율을 비교할 수 있습니다</h1>
              <Image
                className='mt-36 w-[162px] h-[351px] object-contain '
                src={mobileMockImage}
                alt='section4MockM'
                priority
              />
            </div>
            <Image className='ml-auto w-220 h-220 object-cover ' src={section4LogoM} alt='section4LogoM' priority />
          </div>
        ) : (
          <div className=' flex flex-col items-start box-border text-left  '>
            <div className='font-teneda flex mb-30'>
              <h1 className='tablet:text-70 desktop:text-90 '>금융, 뭐하지</h1>
              <h1 className=' tablet:text-140 desktop:text-160 text-main rotate-12 '>?</h1>
            </div>
            <h1>안전 자산에 속하는 예금, 적금, CMA를 조건별로</h1>
            <h1>쉽게 이율을 비교할 수 있습니다.</h1>
            <div className='flex items-end justify-between object-contain'>
              <Image className='desktop:mr-150 w-auto h-auto' src={mockImage} alt='section4Mock' priority />
              <Image
                width={800}
                height={700}
                className='w-auto h-auto'
                src={section4Logo}
                alt='section4Text'
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section4;
