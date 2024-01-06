'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import Rope from '@/components/molecules/rope/Rope';
import DepositSaving from '@/components/molecules/whattodo/DepositSaving';
import Cma from '@/components/molecules/whattodo/Cma';
import MoreBankModal from '@/components/organisms/whattodo/MoreBankModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import ArrowDown from '@/public/icons/arrow-down-2.svg';

type TDepositSaving = {
  id: number;
  productName: string;
  bankName: string;
  maxInterestRate: string;
  interestRate: string;
  isHeart: boolean;
};

type TCma = {
  id: number;
  productName: string;
  description: string;
  rate: string;
  isHeart: boolean;
};

const WhatToDoPage = () => {
  const router = useRouter();
  const [num, setNum] = useState(1); //1:예금, 2:적금, 3:CMA
  const [amount, setAmount] = useState('');

  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open
  const [size, setSize] = useState<'Large' | 'Small'>('Large');

  //예금
  const [depAllFin, setDepAllFin] = useState(false);
  const [depAllSave, setDepAllSave] = useState(false);
  const [depSelFin, setDepSelFin] = useState<string[]>([]);
  const [depSelSave, setDepSelSave] = useState<string[]>([]);

  //적금
  const [savAllFin, setSavAllFin] = useState(false);
  const [savAllSave, setSavAllSave] = useState(false);
  const [savSelFin, setSavSelFin] = useState<string[]>([]);
  const [savSelSave, setSavSelSave] = useState<string[]>([]);

  //CMA
  const [cmaAllFin, setCmaAllFin] = useState(false);
  const [cmaAllSave, setCmaAllSave] = useState(false);
  const [cmaSelFin, setCmaSelFin] = useState<string[]>([]);
  const [cmaSelSave, setCmaSelSave] = useState<string[]>([]);

  //예금, 적금, CMA 목록
  const [bankDataDeposit, setBankDataDeposit] = useState<TDepositSaving[]>([]);
  const [bankDataSaving, setBankDataSaving] = useState<TDepositSaving[]>([]);
  const [bankDataCma, setBankDataCma] = useState<TCma[]>([]);

  //검색 필터
  const [depFilterIndex, setDepFilterIndex] = useState<number | undefined>(undefined);
  const [depFilter, setDepFilter] = useState<string[]>([]); //예금 필터 데이터
  const [savFilterIndex, setSavFilterIndex] = useState<number | undefined>(undefined);
  const [savFilter, setSavFilter] = useState<string[]>([]); //적금 필터 데이터
  const [cmaFilterIndex, setCmaFilterIndex] = useState<number | undefined>(undefined);
  const [cmaFilter, setCmaFilter] = useState<string[]>([]); //CMA 필터 데이터
  const DepositTerms = [
    { filter: '기간 및 금액', sub: ['전체', '3개월', '6개월', '12개월', '24개월', '36개월'] },
    { filter: '상품 유형', sub: ['특판', '방문없이 가입', '누구나 가입'] },
    {
      filter: '우대조건',
      sub: [
        '비대면 가입',
        '은행 앱 사용',
        '급여연동',
        '연금',
        '공과금연동',
        '카드사용',
        '첫거래',
        '입출금통장',
        '재에치',
      ],
    },
  ];
  const SavingTerms = [
    { filter: '기간 및 금액', sub: ['전체', '3개월', '6개월', '12개월', '24개월', '36개월'] },
    {
      filter: '상품 유형',
      sub: ['특판', '방문없이 가입', '청년 적금', '군인 적금', '주택 청약', '자유 적금', '정기 적금', '청년 도약 계좌'],
    },
    {
      filter: '우대조건',
      sub: [
        '비대면 가입',
        '은행 앱 사용',
        '급여연동',
        '입출금통장',
        '공과금연동',
        '카드사용',
        '첫거래',
        '청약보유',
        '추천, 쿠폰',
        '자동이체/달성',
      ],
    },
  ];
  const CmaTerms = [
    { filter: '상품 유형', sub: ['RP형', '종금어음형', '종금형'] },
    { filter: '우대조건', sub: ['비대면 가입', '예금자 보호', '주식 거래 가능', '체크카드 발급', '수수료 해택'] },
  ];

  const BankInfo = [
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

  const BankInfo2 = [
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

  const Deposit = [
    {
      id: 0,
      productName: '상품명',
      bankName: '은행명',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
    {
      id: 1,
      productName: '상품명2',
      bankName: '은행명2',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: true,
    },
    {
      id: 2,
      productName: '상품명3',
      bankName: '은행명3',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
    {
      id: 3,
      productName: '상품명4',
      bankName: '은행명4',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
    {
      id: 4,
      productName: '상품명5',
      bankName: '은행명5',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
  ];

  const Saving = [
    {
      id: 0,
      productName: '상품명적금',
      bankName: '은행명',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
    {
      id: 1,
      productName: '상품명적금2',
      bankName: '은행명2',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: true,
    },
    {
      id: 2,
      productName: '상품명적금3',
      bankName: '은행명3',
      maxInterestRate: '최고 0.00%',
      interestRate: '기본 0.00%',
      isHeart: false,
    },
  ];

  const CmaData = [
    {
      id: 0,
      productName: 'CMA1',
      description: '간단한 설명',
      rate: '수익률 0.00%',
      isHeart: true,
    },
    {
      id: 1,
      productName: 'CMA2',
      description: '간단한 설명',
      rate: '수익률 0.00%',
      isHeart: true,
    },
    {
      id: 2,
      productName: 'CMA3',
      description: '간단한 설명',
      rate: '수익률 0.00%',
      isHeart: false,
    },
    {
      id: 3,
      productName: 'CMA4',
      description: '간단한 설명',
      rate: '수익률 0.00%',
      isHeart: false,
    },
  ];

  useEffect(() => {
    setBankDataDeposit(Deposit);
    setBankDataSaving(Saving);
    setBankDataCma(CmaData);
  }, []);

  const onAllClickBank = () => {
    if (num === 1) {
      if (!depAllFin) {
        const allBanks = BankInfo.map((info) => info);
        setDepSelFin(allBanks);
      } else {
        setDepSelFin([]);
      }
      setDepAllFin(!depAllFin);
    } else if (num === 2) {
      if (!savAllFin) {
        const allBanks = BankInfo.map((info) => info);
        setSavSelFin(allBanks);
      } else {
        setSavSelFin([]);
      }
      setSavAllFin(!savAllFin);
    } else if (num === 3) {
      if (!cmaAllFin) {
        const allBanks = BankInfo.map((info) => info);
        setCmaSelFin(allBanks);
      } else {
        setCmaSelFin([]);
      }
      setCmaAllFin(!cmaAllFin);
    }
  };

  const onClickBank = (bank: string) => {
    if (num === 1) {
      if (depAllFin) {
        setDepAllFin(!depAllFin);
      }
      if (depSelFin?.includes(bank)) {
        setDepSelFin(depSelFin.filter((item) => item !== bank));
      } else {
        setDepSelFin([...depSelFin, bank]);
      }
    } else if (num === 2) {
      if (savAllFin) {
        setSavAllFin(!savAllFin);
      }
      if (savSelFin?.includes(bank)) {
        setSavSelFin(savSelFin.filter((item) => item !== bank));
      } else {
        setSavSelFin([...savSelFin, bank]);
      }
    } else if (num === 3) {
      if (cmaAllFin) {
        setCmaAllFin(!cmaAllFin);
      }
      if (cmaSelFin?.includes(bank)) {
        setCmaSelFin(cmaSelFin.filter((item) => item !== bank));
      } else {
        setCmaSelFin([...cmaSelFin, bank]);
      }
    }
  };

  const toggleFn = (number: number) => {
    setNum(number);
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
    if (num === 1) {
      if (depFilter?.includes(data)) {
        setDepFilter(depFilter.filter((item) => item !== data));
      } else {
        setDepFilter([...depFilter, data]);
      }
    } else if (num === 2) {
      if (savFilter?.includes(data)) {
        setSavFilter(savFilter.filter((item) => item !== data));
      } else {
        setSavFilter([...savFilter, data]);
      }
    } else if (num === 3) {
      if (cmaFilter?.includes(data)) {
        setCmaFilter(cmaFilter.filter((item) => item !== data));
      } else {
        setCmaFilter([...cmaFilter, data]);
      }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {num === 1 ? (
        <>
          <FinanceToggle activeToggle={num} size={size} toggleFn={toggleFn} />
          {size === 'Large' ? (
            <div className='flex justify-between w-850'>
              <div>예금은 처음 한 번에 돈을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !</div>
              <BankGoldtori width='178px' />
            </div>
          ) : (
            <div className='flex justify-between w-330'>
              <div>예금은 처음 한 번에 돈을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !</div>
              <BankGoldtori width='113px' />
            </div>
          )}
          <Rope
            size={size}
            onClick={() => setIsOpen(!isOpen)}
            allBtnClick={depAllFin}
            onAllClickBank={onAllClickBank}
            selectedBanks={depSelFin}
            bankInfo={BankInfo}
            onClickBank={onClickBank}
          />
          <Filter
            style={{ marginTop: '10px' }}
            size={size}
            amount={amount}
            onInputAmountHandler={onInputAmountHandler}
            activeFilterIndex={depFilterIndex}
            setActiveFilterIndex={setDepFilterIndex}
            subIsOn={depFilter}
            setSubIsOn={setDepFilter}
            filterTerms={DepositTerms}
            PlusSubBtn={PlusSubBtn}
          />
          {size === 'Large' ? (
            <div className='mt-39 mb-10 flex justify-between w-850'>
              <div className='label-medium text-typoSecondary'>{bankDataDeposit.length}개</div>
              <div className='flex'>
                <span className='mr-3 label-medium text-typoSecondary'>최고 금리 순</span>
                <ArrowDown width='24px' />
              </div>
            </div>
          ) : (
            <div className='mt-39 mb-10 flex justify-between w-330'>
              <div className='paragraph-small text-typoSecondary'>{bankDataDeposit.length}개</div>
              <div className='flex'>
                <span className='mr-3 paragraph-small text-typoSecondary'>최고 금리 순</span>
                <ArrowDown width='19px' />
              </div>
            </div>
          )}
          {bankDataDeposit.map((data, index) => {
            return (
              <DepositSaving
                key={index}
                style={{ marginBottom: '20px' }}
                size={size}
                isHeart={data.isHeart}
                productName={data.productName}
                bankName={data.bankName}
                maxInterestRate={data.maxInterestRate}
                interestRate={data.interestRate}
                onHeartClick={() => onHeartClick(data.id)}
                onClick={() => router.push(`/whatToDo/${data.id}`)}
              />
            );
          })}
          {isOpen && (
            <div className='fixed w-full h-full left-0 top-0 flex items-center justify-center z-modal bg-bgBlind'>
              <MoreBankModal
                closeModal={() => setIsOpen(!isOpen)}
                size={size}
                bankInfo={BankInfo}
                bankInfo2={BankInfo2}
                bankAllFin={depAllFin}
                bankAllSave={depAllSave}
                setBankAllFin={setDepAllFin}
                setBankAllSave={setDepAllSave}
                bankSelFin={depSelFin}
                bankSelSave={depSelSave}
                setBankSelFin={setDepSelFin}
                setBankSelSave={setDepSelSave}
              />
            </div>
          )}
        </>
      ) : num === 2 ? (
        <>
          <FinanceToggle activeToggle={num} size={size} toggleFn={toggleFn} />
          {size === 'Large' ? (
            <div className='flex justify-between w-850'>
              <div>적금은 월 단위로 일정 금액을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !</div>
              <BankGoldtori width='178px' />
            </div>
          ) : (
            <div className='flex justify-between w-330'>
              <div>적금은 월 단위로 일정 금액을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !</div>
              <BankGoldtori width='113px' />
            </div>
          )}
          <Rope
            size={size}
            onClick={() => setIsOpen(!isOpen)}
            allBtnClick={savAllFin}
            onAllClickBank={onAllClickBank}
            selectedBanks={savSelFin}
            bankInfo={BankInfo}
            onClickBank={onClickBank}
          />
          <Filter
            style={{ marginTop: '10px' }}
            size={size}
            amount={amount}
            onInputAmountHandler={onInputAmountHandler}
            activeFilterIndex={savFilterIndex}
            setActiveFilterIndex={setSavFilterIndex}
            subIsOn={savFilter}
            setSubIsOn={setSavFilter}
            filterTerms={SavingTerms}
            PlusSubBtn={PlusSubBtn}
          />
          {size === 'Large' ? (
            <div className='mt-39 mb-10 flex justify-between w-850'>
              <div className='label-medium text-typoSecondary'>{bankDataSaving.length}개</div>
              <div className='label-medium text-typoSecondary'>최고 금리 순</div>
            </div>
          ) : (
            <div className='mt-39 mb-10 flex justify-between w-330'>
              <div>{bankDataSaving.length}개</div>
              <div>최고 금리 순</div>
            </div>
          )}
          {bankDataSaving.map((data, index) => {
            return (
              <DepositSaving
                key={index}
                style={{ marginBottom: '20px' }}
                size={size}
                isHeart={data.isHeart}
                productName={data.productName}
                bankName={data.bankName}
                maxInterestRate={data.maxInterestRate}
                interestRate={data.interestRate}
                onHeartClick={() => onHeartClick(data.id)}
              />
            );
          })}
          {isOpen && (
            <div className='fixed w-full h-full left-0 top-0 flex items-center justify-center z-modal bg-bgBlind'>
              <MoreBankModal
                closeModal={() => setIsOpen(!isOpen)}
                size={size}
                bankInfo={BankInfo}
                bankInfo2={BankInfo2}
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
        </>
      ) : (
        <>
          <FinanceToggle activeToggle={num} size={size} toggleFn={toggleFn} />
          {size === 'Large' ? (
            <div className='flex justify-between w-850'>
              <div>CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !</div>
              <BankGoldtori width='178px' />
            </div>
          ) : (
            <div className='flex justify-between w-330'>
              <div>CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !</div>
              <BankGoldtori width='113px' />
            </div>
          )}
          <Rope
            size={size}
            onClick={() => setIsOpen(!isOpen)}
            allBtnClick={cmaAllFin}
            onAllClickBank={onAllClickBank}
            selectedBanks={cmaSelFin}
            bankInfo={BankInfo}
            onClickBank={onClickBank}
          />
          <Filter
            style={{ marginTop: '10px' }}
            size={size}
            amount={amount}
            onInputAmountHandler={onInputAmountHandler}
            activeFilterIndex={cmaFilterIndex}
            setActiveFilterIndex={setCmaFilterIndex}
            subIsOn={cmaFilter}
            setSubIsOn={setCmaFilter}
            filterTerms={CmaTerms}
            PlusSubBtn={PlusSubBtn}
          />
          {size === 'Large' ? (
            <div className='mt-39 mb-10 flex justify-between w-850'>
              <div className='label-medium text-typoSecondary'>{bankDataCma.length}개</div>
              <div className='label-medium text-typoSecondary'>최고 금리 순</div>
            </div>
          ) : (
            <div className='mt-39 mb-10 flex justify-between w-330'>
              <div>{bankDataCma.length}개</div>
              <div>최고 금리 순</div>
            </div>
          )}
          {bankDataCma.map((data, index) => {
            return (
              <Cma
                key={index}
                style={{ marginBottom: '20px' }}
                size={size}
                isHeart={data.isHeart}
                productName={data.productName}
                description={data.description}
                rate={data.rate}
                onHeartClick={() => onHeartClick(data.id)}
              />
            );
          })}
          {isOpen && (
            <div className='fixed w-full h-full left-0 top-0 flex items-center justify-center z-modal bg-bgBlind'>
              <MoreBankModal
                closeModal={() => setIsOpen(!isOpen)}
                size={size}
                bankInfo={BankInfo}
                bankInfo2={BankInfo2}
                bankAllFin={cmaAllFin}
                bankAllSave={cmaAllSave}
                setBankAllFin={setCmaAllFin}
                setBankAllSave={setCmaAllSave}
                bankSelFin={cmaSelFin}
                bankSelSave={cmaSelSave}
                setBankSelFin={setCmaSelFin}
                setBankSelSave={setCmaSelSave}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WhatToDoPage;
