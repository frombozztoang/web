'use client';

import React, { useEffect, useState } from 'react';
import DepositSavingGuide from '../../_components/DepositSavingGuide';
import ProductGuide from '../../_components/ProductGuide';
import InterestRateGuide from '../../_components/InterestRateGuide';
import { TgetDepositSavingIdApiResponse } from '@/types/financial-productsTypes';
import { getDepositIdApi, getDepositIdCalculateApi } from '@/api/depositsApi';
import { deleteBankBookmarkApi, postBankBookmarkApi } from '@/api/bookmarkApi';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const Des = ({ params }: { params: { id: number } }) => {
  const [depositInfo, setDepositInfo] = useState<TgetDepositSavingIdApiResponse | undefined>();
  const [amount, setAmount] = useState(0);
  const [amountStr, setAmountStr] = useState('');
  const [defaultCal, setDefaultCal] = useState('0');
  const [maxCal, setMaxCal] = useState('0');
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const depositFetchData = async () => {
    try {
      const data = await getDepositIdApi(params.id);
      if (data) {
        setDepositInfo(data);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error fetching depositsFetchData:', error);
    }
  };

  useEffect(() => {
    depositFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const depositCalculateFetchData = async () => {
    try {
      const data = await getDepositIdCalculateApi(params.id, `amount=${amount}`);
      if (data) {
        setDefaultCal(Number(data.defaultInterestCalculation).toLocaleString());
        setMaxCal(Number(data.maxInterestCalculation).toLocaleString());
      }
    } catch (error) {
      console.error('Error fetching depositsFetchData:', error);
    }
  };

  const onInputAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    const regex = /^[0-9\b]+$/;
    let inputReplace = inputValue.replace(/,/g, '');

    if (inputReplace === '' || regex.test(inputReplace)) {
      setAmount(Number(inputReplace));
      inputReplace = inputReplace.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAmountStr(inputReplace);
    }
  };

  const AmountHandler = () => {
    depositCalculateFetchData();
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
      {depositInfo && (
        <>
          <DepositSavingGuide
            isLiked={isLiked}
            bankLogoUrl={depositInfo.bankLogoUrl}
            productName={depositInfo.productName}
            bankName={depositInfo.bankName}
            maxInterestRate={depositInfo.maxInterestRate}
            interestRate={depositInfo.interestRate}
            onHeartClick={() => onHeartClick(params.id, isLiked)}
          />
          <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-438 tablet:py-22 tablet:px-20 tablet:rounded-10 tablet:mt-32 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary'>
            <ProductGuide
              savingTerms={depositInfo.savingTerms}
              maxLimit={depositInfo.maxLimit}
              joinMember={depositInfo.joinMember}
              etcNote={depositInfo.etcNote}
            />
            <InterestRateGuide
              amountStr={amountStr}
              onInputAmountHandler={onInputAmountHandler}
              AmountHandler={AmountHandler}
              defaultInterestCalculation={defaultCal}
              maxInterestCalculation={maxCal}
              bankHomepageUrl={depositInfo.bankHomepageUrl}
              isOn={true}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Des;
