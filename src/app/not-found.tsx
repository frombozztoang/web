import React from 'react';
import Image from 'next/image';
import Acorn from '@/public/icons/acorn.png';
import NotFoundTori from '@/public/icons/notfoundtori.png';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh]'>
      <div>
        <div className='flex'>
          <span className='tenada-xxxl tablet:tenada-xxxxl desktop:tenada-xxxxxxl'>4</span>
          <Image
            className='-rotate-[15deg] w-63 h-63 -mx-6 mt-8 tablet:w-81 tablet:h-81 tablet:mt-10 tablet:-mx-9 desktop:w-182 desktop:h-182 desktop:mt-20 desktop:-mx-20'
            src={Acorn}
            alt='도토리'
            width={182}
            height={182}
          />
          <span className='tenada-xxxl tablet:tenada-xxxxl desktop:tenada-xxxxxxl'>4</span>
          <Image
            className='w-189 h-150 -mt-58 -ml-13 tablet:w-242 tablet:h-193 tablet:-mt-74 tablet:-ml-17 desktop:w-539 desktop:h-430 desktop:-mt-163 desktop:-ml-38'
            src={NotFoundTori}
            alt='금토리'
            width={500}
            height={500}
          />
        </div>
        <div className='tenada-xl -mt-37 tablet:tenada-xxl tablet:-mt-49 desktop:tenada-xxxxxl desktop:-mt-107'>
          Not Found
        </div>
      </div>
      <div className='label-medium mt-6 tablet:pretenard-xl tablet:mt-7 desktop:pretenard-xxl desktop:mt-13'>
        죄송합니다 해당페이지를 찾을 수 없습니다.
      </div>
    </div>
  );
}
