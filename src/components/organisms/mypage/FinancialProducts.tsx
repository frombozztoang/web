'use client';

import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React, { useEffect, useState } from 'react';
import Accordian from '@/components/organisms/mypage/accordian';
import { getFinancialProductsBookmarkApi } from '@/api/mypageApi';
import { TCmaBookmark, TFinancialProductBookmark, TFinancialProductsBookmarkApiResponse } from '@/types/mypageTypes';
import Link from 'next/link';
import {
  deleteBankBookmarkApi,
  deleteCmaBookmarkApi,
  postBankBookmarkApi,
  postCmaBookmarkApi,
} from '@/api/bookmarkApi';

type TBookmarks = {
  cma: TCmaBookmark[];
  deposit: TFinancialProductBookmark[];
  saving: TFinancialProductBookmark[];
};

const FinancialProducts = () => {
  const [bookmarks, setBookmarks] = useState<TBookmarks>({ cma: [], deposit: [], saving: [] });
  const [isLiked, setIsLiked] = useState(true);

  const onBankHeartClick = async (id: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await deleteBankBookmarkApi(id);
      } else {
        await postBankBookmarkApi(id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const onCmaHeartClick = async (id: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await deleteCmaBookmarkApi(id);
      } else {
        await postCmaBookmarkApi(id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = (await getFinancialProductsBookmarkApi()) as TFinancialProductsBookmarkApiResponse;
      const cma = data?.cmaBookmarks || [];
      const deposit = data?.financialProductBookmarks.filter((item) => item.financialProductType === 'DEPOSIT') || [];
      const saving = data?.financialProductBookmarks.filter((item) => item.financialProductType === 'SAVING') || [];

      setBookmarks({ cma, deposit, saving });
    } catch (error) {
      console.error('Error fetching Financial Products:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPolicyItems = (
    items: TFinancialProductBookmark[] | TCmaBookmark[],
    productType: 'DEPOSIT' | 'SAVING' | 'CMA',
  ) =>
    items.map((item, index) => {
      let id: number;
      let link: string;
      let onHeartClick: () => void;
      if ('cmaId' in item) {
        id = item.cmaId;
        link = 'cma';
        onHeartClick = () => onCmaHeartClick(id, isLiked);
      } else {
        id = item.financialProductId;
        item.financialProductType === 'DEPOSIT' ? (link = 'deposits') : (link = 'savings');
        onHeartClick = () => onBankHeartClick(id, isLiked);
      }
      return (
        <PolicyItem
          key={index}
          img={''}
          name={item.productName}
          id={id}
          link={link}
          description={item.companyName}
          onClick={onHeartClick}
          like={isLiked}
          maxInterestRate={item.maximumPreferredInterestRate}
          interestRate={
            productType === 'CMA'
              ? (item as TCmaBookmark).specialCondition
              : (item as TFinancialProductBookmark).interestRate
          }
        />
      );
    });
  return (
    <div>
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='예금' count={bookmarks.deposit.length}>
          {renderPolicyItems(bookmarks.deposit, 'DEPOSIT')}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='적금' count={bookmarks.saving.length}>
          {renderPolicyItems(bookmarks.saving, 'SAVING')}
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='CMA' count={bookmarks.cma.length}>
          {renderPolicyItems(bookmarks.cma, 'CMA')}
        </Accordian>
      </ul>
    </div>
  );
};

export default FinancialProducts;
