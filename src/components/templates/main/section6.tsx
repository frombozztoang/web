'use client';
import React from 'react';
import Image from 'next/image';

import section6Mock from '@/public/icons/main/section6Mock.png';
import section6Logo from '@/public/icons/main/section6Logo.png';
import section6MockM from '@/public/icons/main/section6MockM.png';
import section6LogoM from '@/public/icons/main/section6LogoM.png';
import section6MockMD from '@/public/icons/main/section6MockMD.png';
import section6MockD from '@/public/icons/main/section6MockD.png';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';
import useThemeCheck from '@/hooks/useThemeCheck';

const Section6 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const isDarkMode = useThemeCheck();

  const mockImage = isDarkMode ? section6MockD : section6Mock;
  const mobileMockImage = isDarkMode ? section6MockMD : section6MockM;
  return (
    <div className='object-contain mt-80 tablet:mt-190 min-h-screen label-small tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-40 w-full  '>
            <div className=' text-left '>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 고마워</h1>
                <h1 className=' text-70 text-main rotate-12 '>~</h1>
              </div>
              <h1 className='text-12'>모르면 손해보는 청년금융정책 정보를 안내해드립니다</h1>
              <h1 className='text-12'>여러분에게 꼭 맞는 정책을 찾아 도움을 받아보실 수 있습니다</h1>
              <Image
                className='mt-36 w-[162px] h-[338px] object-contain  '
                src={mobileMockImage}
                alt='section6MockM'
                priority
              />
            </div>
            <Image className='ml-auto object-contain w-220 h-220' src={section6LogoM} alt='section6LogoM' priority />
          </div>
        ) : (
          <div className=' flex flex-col items-start box-border text-left '>
            <div className=' font-teneda flex mb-30'>
              <h1 className=' tablet:text-70 desktop:text-90 '>금융, 고마워</h1>
              <h1 className='tablet:text-140 desktop:text-160 text-main rotate-12 '>~</h1>
            </div>
            <div>
              <h1>모르면 손해보는 청년금융정책 정보를 안내해드립니다</h1>
              <h1>여러분에게 꼭 맞는 정책을 찾아 도움을 받아보실 수 있습니다</h1>
            </div>

            <div className='flex items-end justify-between object-contain'>
              <Image
                className='desktop:mr-150 w-auto h-auto object-contain '
                src={mockImage}
                alt='section6Mock'
                priority
              />
              <Image
                width={800}
                height={700}
                className='object-contain w-auto h-auto'
                src={section6Logo}
                alt='section6Logo'
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section6;
