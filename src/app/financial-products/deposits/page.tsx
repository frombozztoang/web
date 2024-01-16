'use client';

import React, { useEffect, useState } from 'react';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import Rope from '@/components/molecules/rope/Rope';
import DepositSaving from '@/components/molecules/whattodo/DepositSaving';
import MoreBankModal from '@/components/organisms/whattodo/MoreBankModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import ArrowDown from '@/public/icons/arrow-down-2.svg';
import { useRouter } from 'next/navigation';
import BackDrop from '@/components/organisms/modal/backdrop';
import Pagination from '@/components/molecules/pagination/Pagination';
import { getBankApi } from '@/api/financial-productsApi';
import { getDepositsApi } from '@/api/depositsApi';
import { TgetBankApiResponse, TgetDepositSavingResponse } from '@/types/financial-productsTypes';
import { deleteBankBookmarkApi, postBankBookmarkApi } from '@/api/bookmarkApi';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const WhatToDoPage = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [amountStr, setAmoutStr] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open
  const [sort, setSort] = useState('MAX'); //MAX:최고금리순 DEFAULT:기본금리순

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  //은행 정보
  const [bankFinInfo, setBankFinInfo] = useState<TgetBankApiResponse[]>(); //1금융권
  const [bankSaveInfo, setBankSaveInfo] = useState<TgetBankApiResponse[]>(); //저축은행

  //예금
  const [depAllFin, setDepAllFin] = useState(false);
  const [depAllSave, setDepAllSave] = useState(false);
  const [depSelFin, setDepSelFin] = useState<string[]>([]);
  const [depSelSave, setDepSelSave] = useState<string[]>([]);
  const [depSel, setDepSel] = useState<string>();

  //예금 목록
  const [bankDataDeposit, setBankDataDeposit] = useState<TgetDepositSavingResponse[] | undefined>();
  const [totalElements, setTotalElements] = useState<number | null>(null); //예금 결과 개수

  //검색 필터
  const [depFilterIndex, setDepFilterIndex] = useState<number | undefined>(undefined);
  const [depFilter, setDepFilter] = useState<
    {
      text: string;
      value: string;
    }[]
  >([]); //예금 텍스트 필터 데이터
  const [depValueFilter, setDepValueFilter] = useState<string>(); //예금 값 필터 데이터

  const DEPOSIT_FILTER = [
    {
      filter: '기간 및 금액',
      sub: [
        { text: '전체', value: '' },
        { text: '1개월', value: '&terms=1' },
        { text: '3개월', value: '&terms=3' },
        { text: '6개월', value: '&terms=6' },
        { text: '12개월', value: '&terms=12' },
        { text: '24개월', value: '&terms=24' },
        { text: '36개월', value: '&terms=36' },
      ],
    },
    {
      filter: '상품 유형',
      sub: [
        { text: '누구나 가입', value: '&types=누구나 가입' },
        { text: '특판', value: '&types=특판' },
        { text: '주택청약', value: '&types=주택청약' },
      ],
    },
  ];

  const bankInfoFetchData = async () => {
    try {
      const bankFin = await getBankApi('020000');
      setBankFinInfo(bankFin);
      const bankSave = await getBankApi('030300');
      setBankSaveInfo(bankSave);
    } catch (error) {
      console.error('Error fetching bankInfoFetchData:', error);
    }
  };

  useEffect(() => {
    bankInfoFetchData();
  }, []);

  const bankListFetchData = async () => {
    try {
      const data = await getDepositsApi(`size=10&page=${pageNum}&interestRateType=${sort}${depValueFilter}${depSel}`);
      if (data) {
        setBankDataDeposit(data.content);
        setPageTotalNum(data.totalPages);
        setTotalElements(data.totalElements);
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };

  useEffect(() => {
    bankListFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, sort, depValueFilter, depSel]);

  const DepSelect = () => {
    const queryStringArray = depSelFin.map((bankName) => `&bankNames=${bankName}`);
    const queryStringArray2 = depSelSave.map((bankName) => `&bankNames=${bankName}`);
    const combinedQueryStringArray = queryStringArray.concat(queryStringArray2);
    const queryString = combinedQueryStringArray.join('');
    setDepSel(queryString);
  };

  useEffect(() => {
    DepSelect();
    setPageNum(0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depSelFin, depSelSave]);

  const onAllClickBank = () => {
    if (!depAllFin && bankFinInfo) {
      const allBanks = bankFinInfo.map((info) => info.bankName);
      setDepSelFin(allBanks);
    } else {
      setDepSelFin([]);
    }
    setDepAllFin(!depAllFin);
  };

  const onClickBank = (bank: string) => {
    if (depAllFin) {
      setDepAllFin(!depAllFin);
    }
    if (depSelFin?.includes(bank)) {
      setDepSelFin(depSelFin.filter((item) => item !== bank));
    } else {
      setDepSelFin([...depSelFin, bank]);
    }
  };

  const onInputAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
    const regex = /^[0-9\b]+$/;
    let inputValue = event.target.value.replace(/,/g, '');
    if (inputValue === '' || regex.test(inputValue)) {
      inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAmoutStr(inputValue);
    }
  };

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deleteBankBookmarkApi(id);
      } else {
        apiResult = await postBankBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setBankDataDeposit(bankDataDeposit?.map((item) => (item.id === id ? { ...item, isLiked: !isLiked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const PlusSubBtn = (text: string, value: string) => {
    setDepFilter((prevDepFilter) => {
      if (text === '전체') {
        if (prevDepFilter.some((filter) => filter.text === '전체')) {
          return [];
        } else {
          return DEPOSIT_FILTER[0].sub;
        }
      } else {
        const newDepFilter = prevDepFilter.filter((filter) => filter.text !== '전체');
        const existingFilter = newDepFilter.find((filter) => filter.text === text);
        if (existingFilter) {
          return newDepFilter.filter((filter) => filter.text !== text);
        } else {
          return [...newDepFilter, { text, value }];
        }
      }
    });
  };

  const DepValueFilter = () => {
    const valuesArray = depFilter.map((filter) => filter.value);
    const combinedValues = valuesArray.join('');
    setDepValueFilter(combinedValues);
  };

  useEffect(() => {
    DepValueFilter();
    setPageNum(0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depFilter]);

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
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <FinanceToggle activeToggle={1} toggleFn={toggleFn} />
      <div className='flex justify-between mt-10 w-330 tablet:w-438 tablet:mt-12 desktop:w-850 desktop:mt-10'>
        <div className='mt-13 relative tablet:mt-21 desktop:mt-45'>
          <span className='absolute top-14 left-25 text-main label-small w-185 tablet:top-17 tablet:left-26 tablet:label-medium tablet:w-237 desktop:top-20 desktop:left-70 desktop:w-600 desktop:heading-medium'>
            예금은 처음 한 번에 돈을 저축 후 만기에 이자와 함께 돌려받는 상품이에요 !
          </span>
          <div className='h-63 w-228 tablet:w-291 tablet:h-80 desktop:w-616 desktop:h-62 rounded-100 fill-secondary border-2 border-border01 dark:fill-dark-border01 dark:border-dark-border01'></div>
        </div>
        <BankGoldtori className='w-113 tablet:w-144 desktop:w-178' />
      </div>
      <Rope
        onClick={() => setIsOpen(!isOpen)}
        allBtnClick={depAllFin}
        onAllClickBank={onAllClickBank}
        selectedBanks={depSelFin}
        bankInfo={bankFinInfo}
        onClickBank={onClickBank}
      />
      <Filter
        amount={amountStr}
        onInputAmountHandler={onInputAmountHandler}
        activeFilterIndex={depFilterIndex}
        setActiveFilterIndex={setDepFilterIndex}
        subIsOn={depFilter}
        filterTerms={DEPOSIT_FILTER}
        plusSubBtn={PlusSubBtn}
        onInputOn={true}
      />
      {totalElements && (
        <div className='flex justify-between w-338 mt-21 mb-10 tablet:w-430 tablet:mt-26 tablet:mb-12 desktop:w-850 desktop:mt-39 desktop:mb-10'>
          <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:label-medium'>
            {totalElements}개
          </div>
          {sort === 'MAX' ? (
            <button className='flex' onClick={() => setSort('DEFAULT')}>
              <span className='mr-3 paragraph-small text-typoSecondary tablet:paragraph-medium desktop:label-medium'>
                최고 금리 순
              </span>
              <ArrowDown className='stroke-typoSecondary w-19 tablet:w-24' />
            </button>
          ) : (
            <button className='flex' onClick={() => setSort('MAX')}>
              <span className='mr-3 paragraph-small text-typoSecondary tablet:paragraph-medium desktop:label-medium'>
                기본 금리 순
              </span>
              <ArrowDown className='stroke-typoSecondary w-19 tablet:w-24' />
            </button>
          )}
        </div>
      )}
      {bankDataDeposit?.map((data, index) => {
        return (
          <DepositSaving
            key={index}
            isLiked={data.isLiked}
            bankLogoUrl={data.bankLogoUrl}
            productName={data.productName}
            bankName={data.bankName}
            maxInterestRate={data.maxInterestRate}
            interestRate={data.interestRate}
            onHeartClick={() => onHeartClick(data.id, data.isLiked)}
            onClick={() => router.push(`/financial-products/deposits/${data.id}`)}
          />
        );
      })}
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      {isOpen && (
        <BackDrop>
          <MoreBankModal
            closeModal={() => setIsOpen(!isOpen)}
            bankInfo={bankFinInfo}
            bankInfo2={bankSaveInfo}
            bankAllFin={depAllFin}
            bankAllSave={depAllSave}
            setBankAllFin={setDepAllFin}
            setBankAllSave={setDepAllSave}
            bankSelFin={depSelFin}
            bankSelSave={depSelSave}
            setBankSelFin={setDepSelFin}
            setBankSelSave={setDepSelSave}
          />
        </BackDrop>
      )}
    </div>
  );
};

export default WhatToDoPage;
