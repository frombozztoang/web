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
import CommonModal from '../modal/commonModal';

type TBookmarks = {
  cma: TCmaBookmark[];
  deposit: TFinancialProductBookmark[];
  saving: TFinancialProductBookmark[];
};

const FinancialProducts = () => {
  const [bookmarks, setBookmarks] = useState<TBookmarks>({ cma: [], deposit: [], saving: [] });
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const onBankHeartClick = (id: number) => {
    setShowModal(true);
    setSelectedId(id);
  };

  const deleteBankBookmark = async (id: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await deleteBankBookmarkApi(id);
        console.log('예금적금 삭제 ', id);
      } else {
        await postBankBookmarkApi(id);
      }
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const deleteCmaBookmark = async (id: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await deleteCmaBookmarkApi(id);
      } else {
        await postCmaBookmarkApi(id);
      }
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const onCmaHeartClick = async (id: number, isLiked: boolean) => {};

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
      let isLiked: boolean;
      let onHeartClick: () => void;
      if ('cmaId' in item) {
        id = item.cmaId;
        link = '/financial-products/cma';
        isLiked = item.isLiked;
      } else {
        id = item.financialProductId;
        item.financialProductType === 'DEPOSIT'
          ? (link = '/financial-products/deposits')
          : (link = '/financial-products/savings');
        isLiked = item.isLiked;
      }
      return (
        <ul key={index}>
          {showModal && (
            <CommonModal
              desText={'즐겨찾기를 삭제하시겠습니까?'}
              yesText={'예'}
              noText={'아니오'}
              yesClickFn={
                'cmaId' in item
                  ? () => {
                      if (selectedId !== null) {
                        deleteCmaBookmark(selectedId, isLiked);
                      }
                    }
                  : () => {
                      if (selectedId !== null) {
                        deleteBankBookmark(selectedId, isLiked);
                      }
                    }
              }
              closeFn={() => {
                setShowModal(false);
              }}
            />
          )}
          <PolicyItem
            key={index}
            img={item.bankLogoUrl}
            name={item.productName}
            id={id}
            link={link}
            description={item.companyName}
            onClick={() => onBankHeartClick(id)}
            like={isLiked}
            maxInterestRate={item.maximumPreferredInterestRate}
            interestRate={
              productType === 'CMA'
                ? (item as TCmaBookmark).specialCondition
                : (item as TFinancialProductBookmark).interestRate
            }
          />
        </ul>
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
