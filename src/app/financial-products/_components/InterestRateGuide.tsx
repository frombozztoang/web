'use client';

import React from 'react';
import InputAmount from '@/components/molecules/inputfield/InputAmount';
import DefaultBtn from '@/components/atom/button/DefaultBtn';

type TInterestRateGuideProps = {
  size: 'Large' | 'Small';
  amountStr: string;
  onInputAmountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  AmountHandler: () => void;
};

const InterestRateGuide: React.FC<TInterestRateGuideProps> = ({
  size,
  amountStr,
  onInputAmountHandler,
  AmountHandler,
}) => {
  return (
    <div className='mt-20 tablet:mt-46 desktop:mt-64'>
      <h1 className='heading-small tablet:heading-xl desktop:heading-large text-typoPrimary'>금리 안내</h1>
      <hr className='mt-3 w-310 mb-15 tablet:w-715 tablet:mt-7 tablet:mb-36 desktop:w-766 desktop:mt-10 desktop:mb-39 border-1 border-border04' />
      <h1 className='mb-3 paragraph-small tablet:paragraph-xl tablet:mb-7 desktop:mb-10 desktop:heading-medium text-typoPrimary'>
        예치 금액
      </h1>
      <InputAmount size={size} amount={amountStr} onInputAmountHandler={onInputAmountHandler} onClick={AmountHandler} />
      <div className='w-310 tablet:w-715 rounded-7 mt-15 py-6 tablet:mt-36 tablet:py-15 tablet:rounded-10 bg-mainLevel200 desktop:rounded-10 desktop:py-17 desktop:mt-39 desktop:w-775'>
        <div className='flex justify-between'>
          <div className='paragraph-small ml-12 tablet:paragraph-xl tablet:ml-27 desktop:ml-13 desktop:label-medium text-typoPrimary'>
            기본 세후 수령액
          </div>
          <div className='mr-10 paragraph-small tablet:mr-25 tablet:paragraph-xl desktop:mr-23 desktop:label-medium text-typoPrimary'>
            @@@@원
          </div>
        </div>
        <hr className='w-300 border-1/2 my-3 ml-5 tablet:ml-12 tablet:my-9 tablet:w-694 desktop:w-751 desktop:my-10 desktop:ml-12 desktop:border border-bgBlind' />
        <div className='flex justify-between'>
          <div className='paragraph-small ml-12 tablet:paragraph-xl tablet:ml-27 desktop:ml-13 desktop:label-medium text-typoPrimary'>
            최고 세후 수령액
          </div>
          <div className='mr-10 paragraph-small tablet:mr-25 tablet:paragraph-xl desktop:mr-23 desktop:label-medium text-typoPrimary'>
            @@@@원
          </div>
        </div>
      </div>
      <table className='w-306 mt-15 mb-20 tablet:w-707 tablet:mt-36 tablet:mb-46 table-auto border-t-1 border-border02 desktop:w-776 desktop:mt-39 desktop:mb-63'>
        <thead>
          <tr className='h-21 border-b-1 border-border02 tablet:h-50 desktop:h-33'>
            <th className='paragraph-small tablet:paragraph-xl border-r-1 border-border02 desktop:label-small text-typoPrimary bg-border00'>
              기간
            </th>
            <th className='paragraph-small tablet:paragraph-xl desktop:label-small text-typoPrimary bg-border00'>
              금리
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-21 border-b-1 border-border02 tablet:h-50 desktop:h-33'>
            <td className='paragraph-small tablet:paragraph-xl border-r-1 border-border02 desktop:label-small text-typoSecondary'></td>
            <td className='paragraph-small tablet:paragraph-xl desktop:label-small text-typoSecondary'></td>
          </tr>
          <tr className='h-21 border-b-1 border-border02 tablet:h-50 desktop:h-33'>
            <td className='paragraph-small tablet:paragraph-xl border-r-1 border-border02 desktop:label-small text-typoSecondary'></td>
            <td className='paragraph-small tablet:paragraph-xl desktop:label-small text-typoSecondary'></td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-center'>
        <DefaultBtn />
      </div>
    </div>
  );
};

export default InterestRateGuide;
