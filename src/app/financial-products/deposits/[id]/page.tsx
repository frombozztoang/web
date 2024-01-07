'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import DepositSavingGuide from '../../_components/DepositSavingGuide';
import ProductGuide from '../../_components/ProductGuide';
import InterestRateGuide from '../../_components/InterestRateGuide';

const Des = () => {
  const PATHNAME = usePathname();
  const DEPOSITS_ID = Number(PATHNAME.replace('/financial-products/deposits/', ''));
  const [size, setSize] = useState<'Large' | 'Small'>('Large');

  const DepositData = {
    productName: 'WON플러스예금',
    bankName: '우리은행',
    maxInterestRate: '3.7',
    interestRate: '3.7',
    isLiked: false,
    savingTerms: [1, 3, 6, 12, 24, 36],
    maxLimit: null,
    joinMember: '실명의 개인',
    etcNote:
      '- 가입기간: 1~36개월\n- 최소가입금액: 1만원 이상\n- 만기일을 일,월 단위로 자유롭게 선택 가능\n- 만기해지 시 신규일 당시 영업점과 인터넷 홈페이지에 고시된 계약기간별 금리 적용',
  };

  const onHeartClick = (id: number) => {
    //id로 즐겨찾기
    console.log(id);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <DepositSavingGuide
        isLiked={DepositData.isLiked}
        productName={DepositData.productName}
        bankName={DepositData.bankName}
        maxInterestRate={DepositData.maxInterestRate}
        interestRate={DepositData.interestRate}
        onHeartClick={() => onHeartClick(DEPOSITS_ID)}
        size={size}
      />
      <div className='mt-63 py-44 px-40 w-855 gap-63 rounded-20 border-2 border-border02 bg-secondary'>
        <ProductGuide
          size={size}
          savingTerms={DepositData.savingTerms}
          maxLimit={DepositData.maxLimit}
          joinMember={DepositData.joinMember}
          etcNote={DepositData.etcNote}
        />
        <InterestRateGuide style={{ marginTop: '111px' }} size={size} />
      </div>
    </div>
  );
};
export default Des;
