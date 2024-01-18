'use client';
import React from 'react';
import Image from 'next/image';

import section5Mock from '@/public/icons/main/section5Mock.png';
import section5Logo from '@/public/icons/main/section5Logo.png';
import section5MockM from '@/public/icons/main/section5MockM.png';
import section5LogoM from '@/public/icons/main/section5LogoM.png';
import section5MockMD from '@/public/icons/main/section5MockMD.png';
import section5MockD from '@/public/icons/main/section5MockD.png';
import useThemeCheck from '@/hooks/useThemeCheck';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';

const Section5 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const isDarkMode = useThemeCheck();

  const mockImage = isDarkMode ? section5MockD : section5Mock;
  const mobileMockImage = isDarkMode ? section5MockMD : section5MockM;
  return (
    <div className='object-contain mt-80  tablet:mt-190 min-h-screen label-small tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='mr-40 w-full'>
            <div className='flex flex-col items-end  '>
              <div className=' font-teneda flex mb-30'>
                <h1 className=' text-40 '>금융, 배우자</h1>
                <h1 className=' text-70 text-main rotate-12 '>!</h1>
              </div>
              <h1 className='text-12'>낯설고 어렵기만 한 금융을 쉽고 친근하게 배울 수 있습니다</h1>
              <h1 className='text-12'>각종 금융 기초 상식과 최신 금융 뉴스를 제공합니다</h1>
              <Image
                className='mt-36  w-[162px] h-[338px] object-contain'
                src={mobileMockImage}
                alt='section5MockM'
                priority
              />
            </div>
            <Image className='mr-auto object-contain w-220 h-220  ' src={section5LogoM} alt='section5LogoM' priority />
          </div>
        ) : (
          <div className='flex flex-col items-end text-right box-border'>
            <div className=' font-teneda flex mb-30'>
              <h1 className=' tablet:text-70 desktop:text-90'>금융, 배우자</h1>
              <h1 className=' tablet:text-140 desktop:text-160 text-main rotate-12 '>!</h1>
            </div>
            <div>
              <h1>낯설고 어렵기만 한 금융을 쉽고 친근하게 배울 수 있습니다</h1>
              <h1>각종 금융 기초 상식과 최신 금융 뉴스를 제공합니다</h1>
            </div>
            <div className='flex items-end justify-between object-contain'>
              <Image
                width={800}
                height={700}
                className='desktop:mr-150 w-auto h-auto'
                src={section5Logo}
                alt='section5Logo'
                priority
              />
              <Image width={390} height={558} className='object-contain' src={mockImage} alt='section5Mock' priority />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section5;
