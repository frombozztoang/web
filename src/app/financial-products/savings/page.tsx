'use client';

import React, { useEffect, useMemo, useState } from 'react';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import Rope from '@/components/molecules/rope/Rope';
import DepositSaving from '@/components/molecules/whattodo/DepositSaving';
import MoreBankModal from '@/components/organisms/whattodo/MoreBankModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import ArrowDown from '@/public/icons/arrow-down-2.svg';
import { useRouter } from 'next/navigation';
import BubbleP from '@/public/icons/bubble-p.svg';
import BubbleT from '@/public/icons/bubble-t.svg';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

type TDepositSaving = {
  id: number;
  productName: string;
  bankName: string;
  maxInterestRate: string;
  interestRate: string;
  isLiked: boolean;
};

const WhatToDoPage = () => {
  const router = useRouter();
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();
  const [amount, setAmount] = useState('');

  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open
  const [size, setSize] = useState<'Large' | 'Small'>(isDesktop ? 'Large' : 'Small');
  const [sort, setSort] = useState(true); //true:최고금리순, false:기본금리순

  //적금
  const [savAllFin, setSavAllFin] = useState(false);
  const [savAllSave, setSavAllSave] = useState(false);
  const [savSelFin, setSavSelFin] = useState<string[]>([]);
  const [savSelSave, setSavSelSave] = useState<string[]>([]);

  //목록
  const [bankDataSaving, setBankDataSaving] = useState<TDepositSaving[]>([]);

  //검색 필터
  const [savFilterIndex, setSavFilterIndex] = useState<number | undefined>(undefined);
  const [savFilter, setSavFilter] = useState<string[]>([]); //적금 필터 데이터

  const SavingTerms = [
    { filter: '기간 및 금액', sub: ['전체', '3개월', '6개월', '12개월', '24개월', '36개월'] },
    { filter: '상품 유형', sub: ['누구나 가입'] },
  ];

  useEffect(() => {
    if (isDesktop) {
      setSize('Large');
    } else if (isTablet || isMobile) {
      setSize('Small');
    }
  }, [isDesktop, isTablet, isMobile, size]);

  const DUMMY_BANK1 = [
    '경남은행',
    '광주은행',
    '국민은행',
    '농협은행',
    '대구은행',
    '부산은행',
    '수협은행',
    '신한은행',
    '우리은행',
    '전북은행',
    '제주은행',
    '주식회사 카카오뱅크',
  ];

  const DUMMY_BANK2 = [
    'CK저축은행',
    'HB저축은행',
    '고려저축은행',
    '국제저축은행',
    '금화저축은행',
    '남양저축은행',
    '다올저축은행',
    '대명상호저축은행',
    '대백저축은행',
    '대신저축은행',
    '대아상호저축은행',
    '대원상호저축은행',
    '대한저축은행',
    '더블저축은행',
    '더케이저축은행',
    '동양저축은행',
    '동원제일저축은행',
  ];

  const DUMMY_SAVINGS = useMemo(
    () => [
      {
        id: 0,
        productName: '상품명적금',
        bankName: '은행명',
        maxInterestRate: '3.56',
        interestRate: '3.33',
        isLiked: false,
      },
      {
        id: 1,
        productName: '상품명적금2',
        bankName: '은행명2',
        maxInterestRate: '3.23',
        interestRate: '3.53',
        isLiked: true,
      },
      {
        id: 2,
        productName: '상품명적금3',
        bankName: '은행명3',
        maxInterestRate: '3.30',
        interestRate: '3.40',
        isLiked: false,
      },
    ],
    [],
  );

  useEffect(() => {
    setBankDataSaving(DUMMY_SAVINGS);
  }, [DUMMY_SAVINGS]);

  useEffect(() => {
    if (sort) {
      const sortedSaving = [...DUMMY_SAVINGS];
      sortedSaving.sort((a, b) => Number(b.maxInterestRate) - Number(a.maxInterestRate));
      setBankDataSaving(sortedSaving);
    } else {
      const sortedSaving = [...DUMMY_SAVINGS];
      sortedSaving.sort((a, b) => Number(b.interestRate) - Number(a.interestRate));
      setBankDataSaving(sortedSaving);
    }
  }, [sort, DUMMY_SAVINGS]);

  const onAllClickBank = () => {
    if (!savAllFin) {
      const allBanks = DUMMY_BANK1.map((info) => info);
      setSavSelFin(allBanks);
    } else {
      setSavSelFin([]);
    }
    setSavAllFin(!savAllFin);
  };

  const onClickBank = (bank: string) => {
    if (savAllFin) {
      setSavAllFin(!savAllFin);
    }
    if (savSelFin?.includes(bank)) {
      setSavSelFin(savSelFin.filter((item) => item !== bank));
    } else {
      setSavSelFin([...savSelFin, bank]);
    }
  };

  const onInputAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    let inputValue = event.target.value.replace(/,/g, '');
    if (inputValue === '' || regex.test(inputValue)) {
      inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAmount(inputValue);
    }
  };

  const onHeartClick = (id: number) => {
    //id로 즐겨찾기
    console.log(id);
  };

  const PlusSubBtn = (data: string) => {
    if (savFilter?.includes(data)) {
      setSavFilter(savFilter.filter((item) => item !== data));
    } else {
      setSavFilter([...savFilter, data]);
    }
  };

  const toggleFn = (number: number) => {
    if (number === 2) {
      router.push('/financial-products/savings');
    } else if (number === 3) {
      router.push('/financial-products/cma');
    } else {
      router.push('/financial-products/deposits');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <FinanceToggle activeToggle={2} size={size} toggleFn={toggleFn} />
      {size === 'Large' ? (
        <div className='flex justify-between w-850'>
          <div className='mt-55 relative'>
            <span className='absolute top-20 left-55 text-main heading-medium'>
              적금은 월 단위로 일정 금액을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !
            </span>
            <BubbleP />
          </div>
          <BankGoldtori width='178px' />
        </div>
      ) : (
        <div className='flex justify-between mt-10 w-330 tablet:w-789 tablet:mt-23'>
          <div className='mt-15 relative tablet:mt-37'>
            <span className='absolute top-14 left-20 text-main label-small w-190 tablet:top-32 tablet:left-45 tablet:label-xl tablet:w-430'>
              적금은 월 단위로 일정 금액을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !
            </span>
            <BubbleT className='h-63 tablet:h-145' />
          </div>
          <BankGoldtori className='w-113 tablet:w-260' />
        </div>
      )}
      <Rope
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        allBtnClick={savAllFin}
        onAllClickBank={onAllClickBank}
        selectedBanks={savSelFin}
        bankInfo={DUMMY_BANK1}
        onClickBank={onClickBank}
      />
      <Filter
        size={size}
        amount={amount}
        onInputAmountHandler={onInputAmountHandler}
        activeFilterIndex={savFilterIndex}
        setActiveFilterIndex={setSavFilterIndex}
        subIsOn={savFilter}
        setSubIsOn={setSavFilter}
        filterTerms={SavingTerms}
        PlusSubBtn={PlusSubBtn}
        onInputOn={true}
      />
      {size === 'Large' ? (
        <div className='mt-39 mb-10 flex justify-between w-850'>
          <div className='label-medium text-typoSecondary'>{bankDataSaving.length}개</div>
          {sort ? (
            <button className='flex' onClick={() => setSort(!sort)}>
              <span className='mr-3 label-medium text-typoSecondary'>최고 금리 순</span>
              <ArrowDown className='w-24' />
            </button>
          ) : (
            <button className='flex' onClick={() => setSort(!sort)}>
              <span className='mr-3 label-medium text-typoSecondary'>기본 금리 순</span>
              <ArrowDown className='w-24' />
            </button>
          )}
        </div>
      ) : (
        <div className='mt-21 mb-10 flex justify-between w-338 tablet:w-780 tablet:mt-48 tablet:mb-23'>
          <div className='paragraph-small text-typoSecondary tablet:paragraph-xl'>{bankDataSaving.length}개</div>
          {sort ? (
            <button className='flex' onClick={() => setSort(!sort)}>
              <span className='mr-3 paragraph-small text-typoSecondary tablet:paragraph-xl tablet:mr-7'>
                최고 금리 순
              </span>
              <ArrowDown className='w-19 tablet:w-43' />
            </button>
          ) : (
            <button className='flex' onClick={() => setSort(!sort)}>
              <span className='mr-3 paragraph-small text-typoSecondary tablet:paragraph-xl tablet:mr-7'>
                기본 금리 순
              </span>
              <ArrowDown className='w-19 tablet:w-43' />
            </button>
          )}
        </div>
      )}
      {bankDataSaving.map((data, index) => {
        return (
          <DepositSaving
            key={index}
            size={size}
            isLiked={data.isLiked}
            productName={data.productName}
            bankName={data.bankName}
            maxInterestRate={data.maxInterestRate}
            interestRate={data.interestRate}
            onHeartClick={() => onHeartClick(data.id)}
            onClick={() => router.push(`/financial-products/savings/${data.id}`)}
          />
        );
      })}
      {isOpen && (
        <div className='fixed w-full h-full left-0 top-0 flex items-center justify-center z-modal bg-bgBlind overflow-hidden'>
          <MoreBankModal
            closeModal={() => setIsOpen(!isOpen)}
            size={size}
            bankInfo={DUMMY_BANK1}
            bankInfo2={DUMMY_BANK2}
            bankAllFin={savAllFin}
            bankAllSave={savAllSave}
            setBankAllFin={setSavAllFin}
            setBankAllSave={setSavAllSave}
            bankSelFin={savSelFin}
            bankSelSave={savSelSave}
            setBankSelFin={setSavSelFin}
            setBankSelSave={setSavSelSave}
          />
        </div>
      )}
    </div>
  );
};

export default WhatToDoPage;
