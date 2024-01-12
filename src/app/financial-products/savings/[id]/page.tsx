'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import DepositSavingGuide from '../../_components/DepositSavingGuide';
import ProductGuide from '../../_components/ProductGuide';
import InterestRateGuide from '../../_components/InterestRateGuide';

const Des = () => {
  const PATHNAME = usePathname();
  const SAVINGS_ID = Number(PATHNAME.replace('/financial-products/savings/', ''));
  const [amount, setAmount] = useState(0);
  const [amountStr, setAmoutStr] = useState('');

  const onInputAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
    const regex = /^[0-9\b]+$/;
    let inputValue = event.target.value.replace(/,/g, '');
    if (inputValue === '' || regex.test(inputValue)) {
      inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAmoutStr(inputValue);
    }
  };

  const AmountHandler = () => {
    console.log(amount);
  };

  const DUMMY_SAVINGS = {
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
        isLiked={DUMMY_SAVINGS.isLiked}
        productName={DUMMY_SAVINGS.productName}
        bankName={DUMMY_SAVINGS.bankName}
        maxInterestRate={DUMMY_SAVINGS.maxInterestRate}
        interestRate={DUMMY_SAVINGS.interestRate}
        onHeartClick={() => onHeartClick(SAVINGS_ID)}
      />
      <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-438 tablet:py-22 tablet:px-20 tablet:rounded-10 tablet:mt-32 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary'>
        <ProductGuide
          savingTerms={DUMMY_SAVINGS.savingTerms}
          maxLimit={DUMMY_SAVINGS.maxLimit}
          joinMember={DUMMY_SAVINGS.joinMember}
          etcNote={DUMMY_SAVINGS.etcNote}
        />
        <InterestRateGuide
          amountStr={amountStr}
          onInputAmountHandler={onInputAmountHandler}
          AmountHandler={AmountHandler}
        />
      </div>
    </div>
  );
};
export default Des;
