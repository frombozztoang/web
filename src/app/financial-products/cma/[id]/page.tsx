'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import CmaGuide from '../../_components/CmaGuide';
import CmaInfoGuide from '../../_components/CmaInfoGuide';

const Des = () => {
  const PATHNAME = usePathname();
  const CMA_ID = Number(PATHNAME.replace('/financial-products/cma/', ''));

  const DUMMY_CMA = {
    productName: 'WON플러스예금',
    bankName: '우리은행',
    rate: '3.7',
    isLiked: false,
    string1: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string2: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string3: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string4: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string5: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string6: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
    string7: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능',
  };

  const onHeartClick = (id: number) => {
    //id로 즐겨찾기
    console.log(id);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <CmaGuide
        isLiked={DUMMY_CMA.isLiked}
        productName={DUMMY_CMA.productName}
        bankName={DUMMY_CMA.bankName}
        rate={DUMMY_CMA.rate}
        onHeartClick={() => onHeartClick(CMA_ID)}
      />
      <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-789 tablet:py-40 tablet:px-36 tablet:border-2 tablet:rounded-18 tablet:mt-58 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 bg-secondary'>
        <CmaInfoGuide data={['글자', '글자']} />
      </div>
    </div>
  );
};
export default Des;
