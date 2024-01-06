'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import DepositSavingGuide from './_components/DepositSavingGuide';
import CmaGuide from './_components/CmaGuide';
import ProductGuide from './_components/ProductGuide';
import InterestRateGuide from './_components/InterestRateGuide';
import CmaInfoGuide from './_components/CmaInfoGuide';

const Des = () => {
  const pathname = usePathname();
  const productId = Number(pathname.replace('/whatToDo/', ''));
  const [size, setSize] = useState<'Large' | 'Small'>('Large');
  const [num, setNum] = useState(1); //1:예금, 2:적금, 3:CMA

  const DepositData = {
    productName: 'WON플러스예금',
    bankName: '우리은행',
    maxInterestRate: '3.7',
    interestRate: '3.7',
    isHeart: false,
    savingTerms: [1, 3, 6, 12, 24, 36],
    maxLimit: null,
    joinMember: '실명의 개인',
    etcNote:
      '- 가입기간: 1~36개월\n- 최소가입금액: 1만원 이상\n- 만기일을 일,월 단위로 자유롭게 선택 가능\n- 만기해지 시 신규일 당시 영업점과 인터넷 홈페이지에 고시된 계약기간별 금리 적용',
  };

  const CmaData = {
    productName: 'WON플러스예금',
    bankName: '우리은행',
    rate: '3.7',
    isHeart: false,
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
    <>
      {num === 1 ? (
        <div className='flex flex-col justify-center items-center'>
          <DepositSavingGuide
            isHeart={DepositData.isHeart}
            productName={DepositData.productName}
            bankName={DepositData.bankName}
            maxInterestRate={DepositData.maxInterestRate}
            interestRate={DepositData.interestRate}
            onHeartClick={() => onHeartClick(productId)}
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
      ) : num === 2 ? (
        <div className='flex flex-col justify-center items-center'>
          <DepositSavingGuide
            isHeart={DepositData.isHeart}
            productName={DepositData.productName}
            bankName={DepositData.bankName}
            maxInterestRate={DepositData.maxInterestRate}
            interestRate={DepositData.interestRate}
            onHeartClick={() => onHeartClick(productId)}
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
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <CmaGuide
            isHeart={CmaData.isHeart}
            productName={CmaData.productName}
            bankName={CmaData.bankName}
            rate={CmaData.rate}
            onHeartClick={() => onHeartClick(productId)}
            size={size}
          />
          <div className='mt-39 py-44 px-40 w-855 gap-63 rounded-20 border-2 border-border02 bg-secondary'>
            <CmaInfoGuide size={size} data={['글자', '글자']} />
          </div>
        </div>
      )}
    </>
  );
};
export default Des;
