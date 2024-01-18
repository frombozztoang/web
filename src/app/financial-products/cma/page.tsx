'use client';

import React, { useEffect, useState } from 'react';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import RopeCma from '@/components/molecules/rope/RopeCma';
import MoreCmaModal from '@/components/organisms/whattodo/MoreCmaModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import { useRouter } from 'next/navigation';
import Cma from '@/components/molecules/whattodo/Cma';
import BackDrop from '@/components/organisms/modal/backdrop';
import Pagination from '@/components/molecules/pagination/Pagination';
import { getBankApi } from '@/api/financial-productsApi';
import { getCmasApi } from '@/api/cmaApi';
import { TgetBankApiResponse, TgetCmaResponse } from '@/types/financial-productsTypes';
import { deleteCmaBookmarkApi, postCmaBookmarkApi } from '@/api/bookmarkApi';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const WhatToDoPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open
  const [showModal, setShowModal] = useState(false);

  const [dataNull, setDataNull] = useState(false);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  //은행 정보
  const [bankCmaInfo, setBankCmaInfo] = useState<TgetBankApiResponse[]>(); //증권사

  //CMA
  const [cmaAllFin, setCmaAllFin] = useState(false);
  const [cmaSelFin, setCmaSelFin] = useState<string[]>([]);
  const [cmaSel, setCmaSel] = useState<string>();

  //CMA 목록
  const [bankDataCma, setBankDataCma] = useState<TgetCmaResponse[] | undefined>([]);
  const [totalElements, setTotalElements] = useState<number | null>(null); //예금 결과 개수

  //검색 필터
  const [cmaFilterIndex, setCmaFilterIndex] = useState<number | undefined>(undefined);
  const [cmaFilter, setCmaFilter] = useState<
    {
      text: string;
      value: string;
    }[]
  >([]); //CMA 텍스트 필터 데이터
  const [cmaValueFilter, setCmaValueFilter] = useState<string>(); //CMA 값 필터 데이터

  const CMA_FILTER = [
    {
      filter: '상품 유형',
      sub: [
        { text: 'RP형', value: '&cmaTypes=RP' },
        { text: '발행어음형', value: '&cmaTypes=BALHAENG' },
        { text: '종금형', value: '&cmaTypes=JONGGEUM' },
      ],
    },
  ];

  const bankInfoFetchData = async () => {
    try {
      const data = await getBankApi('040000');
      setBankCmaInfo(data);
    } catch (error) {
      console.error('Error fetching bankInfoFetchData:', error);
    }
  };

  useEffect(() => {
    bankInfoFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bankListFetchData = async () => {
    try {
      const data = await getCmasApi(`size=10&page=${pageNum}${cmaValueFilter}${cmaSel}`);
      if (data) {
        if (data.content.length === 0) {
          setBankDataCma([]);
          setPageTotalNum(0);
          setTotalElements(null);
          setDataNull(true);
        } else {
          setBankDataCma(data.content);
          setPageTotalNum(data.totalPages);
          setTotalElements(data.totalElements);
          setDataNull(false);
        }
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };

  useEffect(() => {
    bankListFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, cmaValueFilter, cmaSel]);

  const DepSelect = () => {
    const queryStringArray = cmaSelFin.map((bankName) => `&bankNames=${bankName}`);
    const queryString = queryStringArray.join('');
    setCmaSel(queryString);
  };

  useEffect(() => {
    DepSelect();
    setPageNum(0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmaSelFin]);

  const onClickBank = (bank: string) => {
    if (cmaAllFin) {
      setCmaAllFin(!cmaAllFin);
    }
    if (cmaSelFin?.includes(bank)) {
      setCmaSelFin(cmaSelFin.filter((item) => item !== bank));
    } else {
      setCmaSelFin([...cmaSelFin, bank]);
    }
  };

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deleteCmaBookmarkApi(id);
      } else {
        apiResult = await postCmaBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setBankDataCma(bankDataCma?.map((item) => (item.id === id ? { ...item, isLiked: !isLiked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const PlusSubBtn = (text: string, value: string) => {
    setCmaFilter((prevCmaFilter) => {
      const existingFilter = prevCmaFilter.find((filter) => filter.text === text);

      if (existingFilter) {
        return prevCmaFilter.filter((filter) => filter.text !== text);
      } else {
        return [...prevCmaFilter, { text, value }];
      }
    });
  };

  const CmaValueFilter = () => {
    const valuesArray = cmaFilter.map((filter) => filter.value);
    const combinedValues = valuesArray.join('');
    setCmaValueFilter(combinedValues);
  };

  useEffect(() => {
    CmaValueFilter();
    setPageNum(0);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmaFilter]);

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
      <FinanceToggle activeToggle={3} toggleFn={toggleFn} />
      <div className='flex justify-between mt-10 w-330 tablet:w-438 tablet:mt-12 desktop:w-850 desktop:mt-10'>
        <div className='mt-13 relative tablet:mt-21 desktop:mt-45'>
          <span className='absolute top-14 left-20 text-main label-small w-190 tablet:top-17 tablet:left-19 tablet:label-medium tablet:w-250 desktop:top-20 desktop:left-55 desktop:w-600 desktop:heading-medium'>
            CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !
          </span>
          <div className='h-63 w-228 tablet:w-291 tablet:h-80 desktop:w-616 desktop:h-62 rounded-100 fill-secondary border-2 border-border01 dark:fill-dark-border01 dark:border-dark-border01'></div>
        </div>
        <BankGoldtori className='w-113 tablet:w-144 desktop:w-178' />
      </div>
      <RopeCma
        onClick={() => setIsOpen(!isOpen)}
        selectedBanks={cmaSelFin}
        bankInfo={bankCmaInfo}
        onClickBank={onClickBank}
      />
      <Filter
        activeFilterIndex={cmaFilterIndex}
        setActiveFilterIndex={setCmaFilterIndex}
        subIsOn={cmaFilter}
        filterTerms={CMA_FILTER}
        plusSubBtn={PlusSubBtn}
        onInputOn={false}
      />
      {dataNull ? (
        <div className='text-typoSecondary label-medium mt-100 tablet:label-large tablet:mt-130 desktop:label-xl desktop:mt-[300px]'>
          찾는 내용이 없습니다.
        </div>
      ) : (
        <>
          {' '}
          {totalElements && (
            <div className='flex justify-between w-338 mt-21 mb-10 tablet:w-430 tablet:mt-26 tablet:mb-12 desktop:w-850 desktop:mt-39 desktop:mb-10'>
              <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:label-medium'>
                {totalElements}개
              </div>
            </div>
          )}
          {bankDataCma?.map((data, index) => {
            return (
              <Cma
                key={index}
                isLiked={data.isLiked}
                bankLogoUrl={data.bankLogoUrl}
                productName={data.productName}
                description={data.bankName}
                rate={data.maturityInterestRate}
                onHeartClick={() => onHeartClick(data.id, data.isLiked)}
                onClick={() => router.push(`/financial-products/cma/${data.id}`)}
              />
            );
          })}
          <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
        </>
      )}
      {isOpen && (
        <BackDrop>
          <MoreCmaModal
            closeModal={() => setIsOpen(!isOpen)}
            bankInfo={bankCmaInfo}
            bankAllCma={cmaAllFin}
            setBankAllCma={setCmaAllFin}
            bankSelCma={cmaSelFin}
            setBankSelCma={setCmaSelFin}
          />
        </BackDrop>
      )}
    </div>
  );
};

export default WhatToDoPage;
