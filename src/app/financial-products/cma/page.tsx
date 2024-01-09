'use client';

import React, { useEffect, useMemo, useState } from 'react';
import FinanceToggle from '@/components/atom/toggle/FinanceToggle';
import Rope from '@/components/molecules/rope/Rope';
import MoreBankModal from '@/components/organisms/whattodo/MoreBankModal';
import Filter from '@/components/organisms/filter/Filter';
import BankGoldtori from '@/public/icons/bank_goldtori.svg';
import { useRouter } from 'next/navigation';
import Cma from '@/components/molecules/whattodo/Cma';
import BubbleP from '@/public/icons/bubble-p.svg';
import BubbleT from '@/public/icons/bubble-t.svg';
import useFinMediaQuery from '@/hooks/custom/useFinMediaQuery';

type TCma = {
  id: number;
  productName: string;
  description: string;
  rate: string;
  isLiked: boolean;
};

const WhatToDoPage = () => {
  const router = useRouter();
  const { isDesktop, isTablet, isMobile } = useFinMediaQuery();

  const [isOpen, setIsOpen] = useState(false); //true:더보기 모달창 open
  const [size, setSize] = useState<'Large' | 'Small'>(isDesktop ? 'Large' : 'Small');

  //CMA
  const [cmaAllFin, setCmaAllFin] = useState(false);
  const [cmaAllSave, setCmaAllSave] = useState(false);
  const [cmaSelFin, setCmaSelFin] = useState<string[]>([]);
  const [cmaSelSave, setCmaSelSave] = useState<string[]>([]);

  //CMA 목록
  const [bankDataCma, setBankDataCma] = useState<TCma[]>([]);

  //검색 필터
  const [cmaFilterIndex, setCmaFilterIndex] = useState<number | undefined>(undefined);
  const [cmaFilter, setCmaFilter] = useState<string[]>([]); //CMA 필터 데이터

  const CMA_FILTER = [
    { filter: '상품 유형', sub: ['RP형', '종금어음형', '종금형'] },
    { filter: '우대조건', sub: ['비대면 가입', '예금자 보호', '주식 거래 가능', '체크카드 발급', '수수료 해택'] },
  ];

  //eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onAllClickBank = () => {
    if (!cmaAllFin) {
      const allBanks = DUMMY_BANK1.map((info) => info);
      setCmaSelFin(allBanks);
    } else {
      setCmaSelFin([]);
    }
    setCmaAllFin(!cmaAllFin);
  };

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
    console.log(number);
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
      <FinanceToggle activeToggle={3} size={size} toggleFn={toggleFn} />
      {size === 'Large' ? (
        <div className='flex justify-between w-850'>
          <div className='mt-55 relative'>
            <span className='absolute top-20 left-55 text-main heading-medium'>
              CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !
            </span>
            <BubbleP />
          </div>
          <BankGoldtori width='178px' />
        </div>
      ) : (
        <div className='flex justify-between mt-10 w-330 tablet:w-789 tablet:mt-23'>
          <div className='mt-15 relative tablet:mt-37'>
            <span className='absolute top-14 left-20 text-main label-small w-190 tablet:top-32 tablet:left-46 tablet:label-xl tablet:w-436'>
              CMA는 은행사 대신 증권사가 돈을 관리 해주는 입출금이 자유로운 통장이예요 !
            </span>
            <BubbleT className='h-63 tablet:h-145' />
          </div>
          <BankGoldtori className='w-113 tablet:w-260' />
        </div>
      )}
      <Rope
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        allBtnClick={cmaAllFin}
        onAllClickBank={onAllClickBank}
        selectedBanks={cmaSelFin}
        bankInfo={DUMMY_BANK1}
        onClickBank={onClickBank}
      />
      <Filter
        size={size}
        activeFilterIndex={cmaFilterIndex}
        setActiveFilterIndex={setCmaFilterIndex}
        subIsOn={cmaFilter}
        setSubIsOn={setCmaFilter}
        filterTerms={CMA_FILTER}
        PlusSubBtn={PlusSubBtn}
        onInputOn={false}
      />
      {size === 'Large' ? (
        <div className='mt-39 mb-10 flex justify-between w-850'>
          <div className='label-medium text-typoSecondary'>{bankDataCma.length}개</div>
        </div>
      ) : (
        <div className='mt-21 mb-10 flex justify-between w-338 tablet:w-780 tablet:mt-48 tablet:mb-23'>
          <div className='paragraph-small text-typoSecondary tablet:paragraph-xl'>{bankDataCma.length}개</div>
        </div>
      )}
      {bankDataCma.map((data, index) => {
        return (
          <Cma
            key={index}
            size={size}
            isLiked={data.isLiked}
            productName={data.productName}
            description={data.description}
            rate={data.rate}
            onHeartClick={() => onHeartClick(data.id)}
            onClick={() => router.push(`/financial-products/cma/${data.id}`)}
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
    </div>
  );
};

export default WhatToDoPage;
