'use client';

import React, { useEffect, useMemo, useState } from 'react';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import RopeCma from '@/components/molecules/rope/RopeCma';
import MoreCmaModal from '@/components/organisms/whattodo/MoreCmaModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import { useRouter } from 'next/navigation';
import Cma from '@/components/molecules/whattodo/Cma';
import BubbleP from '@/public/icons/bubble-p.svg';
import BubbleT from '@/public/icons/bubble-t.svg';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';
import BackDrop from '@/components/organisms/modal/backdrop';
import Pagination from '@/components/molecules/pagination/Pagination';

type TCma = {
  id: number;
  productName: string;
  description: string;
  rate: string;
  isLiked: boolean;
};

const WhatToDoPage = () => {
  const router = useRouter();
  const { isDesktop } = useFinMediaQuery();

  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(13); //총 페이지 수

  //CMA
  const [cmaAllFin, setCmaAllFin] = useState(false);
  const [cmaSelFin, setCmaSelFin] = useState<string[]>([]);

  //CMA 목록
  const [bankDataCma, setBankDataCma] = useState<TCma[]>([]);
  const [totalElements, setTotalElements] = useState(0); //예금 결과 개수

  //검색 필터
  const [cmaFilterIndex, setCmaFilterIndex] = useState<number | undefined>(undefined);
  const [cmaFilter, setCmaFilter] = useState<string[]>([]); //CMA 필터 데이터

  const CMA_FILTER = [
    { filter: '상품 유형', sub: ['RP형', '종금어음형', '종금형'] },
    { filter: '우대조건', sub: ['비대면 가입', '예금자 보호', '주식 거래 가능', '체크카드 발급', '수수료 해택'] },
  ];

  const DUMMY_BANK1 = [
    '증권사1',
    '증권사2',
    '증권사3',
    '증권사4',
    '증권사5',
    '증권사6',
    '증권사7',
    '증권사8',
    '증권사9',
    '증권사10',
    '증권사11',
    '증권사12',
  ];

  const DUMMY_CMA = useMemo(
    () => [
      {
        id: 0,
        productName: 'CMA1',
        description: '간단한 설명',
        rate: '3.54',
        isLiked: true,
      },
      {
        id: 1,
        productName: 'CMA2',
        description: '간단한 설명',
        rate: '5.45',
        isLiked: true,
      },
      {
        id: 2,
        productName: 'CMA3',
        description: '간단한 설명',
        rate: '2.43',
        isLiked: false,
      },
      {
        id: 3,
        productName: 'CMA4',
        description: '간단한 설명',
        rate: '6.43',
        isLiked: false,
      },
    ],
    [],
  );

  useEffect(() => {
    setBankDataCma(DUMMY_CMA);
  }, [DUMMY_CMA]);

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

  const onHeartClick = (id: number) => {
    //id로 즐겨찾기
    console.log(id);
  };

  const PlusSubBtn = (data: string) => {
    if (cmaFilter?.includes(data)) {
      setCmaFilter(cmaFilter.filter((item) => item !== data));
    } else {
      setCmaFilter([...cmaFilter, data]);
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
      <FinanceToggle activeToggle={3} toggleFn={toggleFn} />
      <div className='flex justify-between mt-10 w-330 tablet:w-438 tablet:mt-12 desktop:w-850 desktop:mt-10'>
        <div className='mt-16 relative tablet:mt-21 desktop:mt-45'>
          <span className='absolute top-14 left-20 text-main label-small w-190 tablet:top-17 tablet:left-19 tablet:label-medium tablet:w-250 desktop:top-20 desktop:left-55 desktop:w-600 desktop:heading-medium'>
            CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !
          </span>
          {isDesktop ? (
            <BubbleP className='fill-secondary stroke-border01 dark:fill-dark-border01 dark:stroke-dark-border01' />
          ) : (
            <BubbleT className='h-63 tablet:h-80 fill-secondary stroke-border01 dark:fill-dark-border01 dark:stroke-dark-border01' />
          )}
        </div>
        <BankGoldtori className='w-113 tablet:w-144 desktop:w-178' />
      </div>
      <RopeCma
        onClick={() => setIsOpen(!isOpen)}
        selectedBanks={cmaSelFin}
        bankInfo={DUMMY_BANK1}
        onClickBank={onClickBank}
      />
      <Filter
        activeFilterIndex={cmaFilterIndex}
        setActiveFilterIndex={setCmaFilterIndex}
        subIsOn={cmaFilter}
        setSubIsOn={setCmaFilter}
        filterTerms={CMA_FILTER}
        PlusSubBtn={PlusSubBtn}
        onInputOn={false}
      />
      <div className='flex justify-between w-338 mt-21 mb-10 tablet:w-430 tablet:mt-26 tablet:mb-12 desktop:w-850 desktop:mt-39 desktop:mb-10'>
        <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:label-medium'>
          {totalElements}개
        </div>
      </div>
      {bankDataCma.map((data, index) => {
        return (
          <Cma
            key={index}
            isLiked={data.isLiked}
            productName={data.productName}
            description={data.description}
            rate={data.rate}
            onHeartClick={() => onHeartClick(data.id)}
            onClick={() => router.push(`/financial-products/cma/${data.id}`)}
          />
        );
      })}
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      {isOpen && (
        <BackDrop>
          <MoreCmaModal
            closeModal={() => setIsOpen(!isOpen)}
            bankInfo={DUMMY_BANK1}
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
