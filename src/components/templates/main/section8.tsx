'use client';
import React from 'react';
import Image from 'next/image';

import section8Logo from '@/public/icons/main/section8Logo.png';
import section8LogoM from '@/public/icons/main/section8LogoM.png';

import section8LogoD from '@/public/icons/main/section8LogoD.png';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';
import useThemeCheck from '@/hooks/useThemeCheck';

const Section8 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const isDarkMode = useThemeCheck();

  const LogoImage = isDarkMode ? section8LogoD : section8Logo;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen label-small tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div>
        {isMobile ? (
          <div className='text-11 text-typoSecondary dark:text-[#9e9e9e]'>
            <h1 className='mb-8'>우리는 명지대학교 프로젝트형 IT 동아리 DEPth의 금융원정대 팀입니다</h1>
            <Image className='object-contain w-309 h-44' src={LogoImage} alt='section8LogoM' priority />
          </div>
        ) : (
          <div className='label-xl text-typoSecondary dark:text-[#9e9e9e]'>
            <h1 className='mb-32'>우리는 명지대학교 프로젝트형 IT 동아리 DEPth의 금융원정대 팀입니다</h1>
            <Image className='w-[975px] h-[108px]' src={LogoImage} alt='section8Logo' priority />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section8;
