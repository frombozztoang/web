'use client';
import React from 'react';
import doto from '@/public/icons/main/doto.png';
import dotos from '@/public/icons/main/dotos.png';
import dotosM from '@/public/icons/main/dotosM.png';
import Image from 'next/image';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';

const Section3 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  return (
    <div className=' tablet:mt-0 min-h-screen flex items-center justify-center flex-col label-small  tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div className='mb-140 tablet:mb-0'>
        <Image className=' w-157 h-180 tablet:w-374 tablet:h-429 ' src={doto} alt='doto' />
      </div>
      <div className='mb-90 tablet:mb-50'>
        {isMobile ? (
          <>
            <h1>금융에 대한 기초 지식부터 차근차근 쌓아가다보면 </h1>
            <h1>언젠가 금융마스터가 되어 안전하고 </h1>
            <h1>건강한 금융생활을 정복할 수 있지 않을까요?</h1>
          </>
        ) : (
          <>
            <h1>금융에 대한 기초 지식부터 차근차근 쌓아가다보면 언젠가</h1>
            <h1>금융마스터가 되어 안전하고 건강한 금융생활을 정복할 수 있지 않을까요?</h1>
          </>
        )}
      </div>
      <div>
        {isMobile ? (
          <>
            <Image className='absolute w-full left-0 scale-110' src={dotosM} alt='dotosM' />
          </>
        ) : (
          <>
            <Image className='absolute min-w-full left-0' src={dotos} alt='dotos' />
          </>
        )}
      </div>
    </div>
  );
};

export default Section3;
