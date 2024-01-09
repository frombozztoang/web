'use client';
import { getFinancialProducts } from '@/api/mypage/getFinancialProducts';
import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React, { useEffect, useState } from 'react';
import Accordian from '@/components/organisms/mypage/accordian';

type TFinancialProductBookmark = {
  financialProductType: 'SAVING' | 'DEPOSIT';
  companyName: string;
  productName: string;
  interestRate: string;
  maximumPreferredInterestRate: string;
};

type TCmaBookmark = {
  companyName: string;
  productName: string;
  cmaType: string;
  maximumPreferredInterestRate: string;
  specialCondition: string;
};

export type TFinancialProductsApiResponse = {
  financialProductBookmarks: TFinancialProductBookmark[];
  cmaBookmarks: TCmaBookmark[];
};

const FinancialProducts = () => {
  const [cmaBookmark, setCmaBookmark] = useState<TCmaBookmark[] | undefined>([]);
  const [financialBookmark, setFinancialBookmark] = useState<TFinancialProductBookmark[] | undefined>([]);
  const [depositCount, setDepositCount] = useState<number>(0);
  const [cmaCount, setCmaCount] = useState<number>(0);
  const [savingCount, setSavingCount] = useState<number>(0);

  const fetchData = async () => {
    try {
      const data = await getFinancialProducts();
      setFinancialBookmark(data?.financialProductBookmarks);
      setCmaBookmark(data?.cmaBookmarks);
      setDepositCount(
        data?.financialProductBookmarks.filter((item) => item.financialProductType === 'DEPOSIT').length || 0,
      );
      setSavingCount(
        data?.financialProductBookmarks.filter((item) => item.financialProductType === 'SAVING').length || 0,
      );
    } catch (error) {
      console.error('Error fetching Financial Products:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='예금' count={depositCount}>
          {financialBookmark?.map((i, index) =>
            i.financialProductType === 'DEPOSIT' ? (
              <PolicyItem
                key={index}
                img={''}
                name={i.productName}
                description={i.companyName}
                like={true}
                maxInterestRate={i.maximumPreferredInterestRate}
                interestRate={i.interestRate}
              />
            ) : null,
          )}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='적금' count={savingCount}>
          {financialBookmark?.map((i, index) =>
            i.financialProductType === 'SAVING' ? (
              <PolicyItem
                key={index}
                img={''}
                name={i.productName}
                description={i.companyName}
                like={true}
                maxInterestRate={i.maximumPreferredInterestRate}
                interestRate={i.interestRate}
              />
            ) : null,
          )}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='CMA' count={1} />
      </ul>
    </div>
  );
};

export default FinancialProducts;
