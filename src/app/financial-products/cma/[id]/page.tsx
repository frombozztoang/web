'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import CmaGuide from '../../_components/CmaGuide';
import CmaInfoGuide from '../../_components/CmaInfoGuide';

const Des = () => {
  const PATHNAME = usePathname();
  const CMA_ID = Number(PATHNAME.replace('/financial-products/cma/', ''));
  const [size, setSize] = useState<'Large' | 'Small'>('Large');

  const CmaData = {
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
        isLiked={CmaData.isLiked}
        productName={CmaData.productName}
        bankName={CmaData.bankName}
        rate={CmaData.rate}
        onHeartClick={() => onHeartClick(CMA_ID)}
        size={size}
      />
      <div className='mt-39 py-44 px-40 w-855 gap-63 rounded-20 border-2 border-border02 bg-secondary'>
        <CmaInfoGuide size={size} data={['글자', '글자']} />
      </div>
    </div>
  );
};
export default Des;
