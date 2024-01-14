'use client';
import React from 'react';
import logoLight from '@/public/logos/logo_lightB.png';
import Image from 'next/image';
import useFinMediaQuery from '@/hooks/useFinMediaQuery';

const Section2 = () => {
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  return (
    <div className='tablet:min-h-screen flex items-center justify-center flex-col label-small tablet:text-20 desktop:label-xl whitespace-nowrap text-primary dark:text-dark-primary text-center'>
      <div className='mb-22'>
        <Image className='w-188 h-63 0 tablet:w-438 tablet:h-148' src={logoLight} priority alt='logoLight' />
      </div>
      <div>
        {isMobile ? (
          <>
            <h1 className=' tablet:mb-0'>금융원정대는 20대 청년과 학생들의</h1>
            <h1 className=' mb-10  tablet:mb-0'>올바른 금융생활을 위해 만들어졌습니다</h1>
            <h1>정제되지 않은 정보의 밀림 속에서 </h1>
            <h1>여러분에게 금융 동료로써 올바른 길을 안내하겠습니다</h1>
          </>
        ) : (
          <>
            <h1 className='mb:10 tablet:mb-0'>
              금융원정대는 20대 청년과 학생들의 올바른 금융생활을 위해 만들어졌습니다
            </h1>
            <h1>정제되지 않은 정보의 밀림 속에서 여러분에게 금융 동료로써 올바른 길을 안내하겠습니다</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Section2;
