'use client';

import React, { useEffect, useState } from 'react';
import DepositSavingGuide from '../../_components/DepositSavingGuide';
import ProductGuide from '../../_components/ProductGuide';
import InterestRateGuide from '../../_components/InterestRateGuide';
import { TgetDepositSavingIdApiResponse } from '@/types/financial-productsTypes';
import { getSavingIdApi } from '@/api/savingsApi';
import { deleteBankBookmarkApi, postBankBookmarkApi } from '@/api/bookmarkApi';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const Des = ({ params }: { params: { id: number } }) => {
  const [savingInfo, setSavingInfo] = useState<TgetDepositSavingIdApiResponse | undefined>();
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const savingFetchData = async () => {
    try {
      const data = await getSavingIdApi(params.id);
      if (data) {
        setSavingInfo(data);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error fetching savingFetchData:', error);
    }
  };

  useEffect(() => {
    savingFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deleteBankBookmarkApi(id);
      } else {
        apiResult = await postBankBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setIsLiked(!isLiked);
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
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
      {savingInfo && (
        <>
          <DepositSavingGuide
            isLiked={isLiked}
            bankLogoUrl={savingInfo.bankLogoUrl}
            productName={savingInfo.productName}
            bankName={savingInfo.bankName}
            maxInterestRate={savingInfo.maxInterestRate}
            interestRate={savingInfo.interestRate}
            onHeartClick={() => onHeartClick(params.id, isLiked)}
          />
          <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-438 tablet:py-22 tablet:px-20 tablet:rounded-10 tablet:mt-32 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary'>
            <ProductGuide
              savingTerms={savingInfo.savingTerms}
              maxLimit={savingInfo.maxLimit}
              joinMember={savingInfo.joinMember}
              etcNote={savingInfo.etcNote}
            />
            <InterestRateGuide bankHomepageUrl={savingInfo.bankHomepageUrl} isOn={false} />
          </div>
        </>
      )}
    </div>
  );
};
export default Des;
