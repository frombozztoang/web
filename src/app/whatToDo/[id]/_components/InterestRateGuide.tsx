'use client';

import React, { useState } from 'react';
import InputAmount from '@/components/molecules/inputfield/InputAmount';
import DefaultBtn from '@/components/atom/button/DefaultBtn';

type TInterestRateGuideProps = {
  size: 'Large' | 'Small';
};

const InterestRateGuide: React.FC<TInterestRateGuideProps & React.HTMLAttributes<HTMLDivElement>> = ({
  size,
  ...props
}) => {
  const [amount, setAmount] = useState(0);
  const [amountStr, setAmoutStr] = useState('');

  const onInputAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
    const regex = /^[0-9\b]+$/;
    let inputValue = event.target.value.replace(/,/g, '');
    if (inputValue === '' || regex.test(inputValue)) {
      inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAmoutStr(inputValue);
    }
  };

  const AmountHandler = () => {
    console.log(amount);
  };

  return size === 'Large' ? (
    <div {...props}>
      <h1 className='heading-large text-typoPrimary'>금리 안내</h1>
      <hr className='w-766 mt-10 mb-39 border-1 border-typoPrimary' />
      <h1 className='mb-10 heading-large text-typoPrimary'>예치 금액</h1>
      <InputAmount amount={amountStr} onInputAmountHandler={onInputAmountHandler} onClick={AmountHandler} />
      <div className='bg-mainLevel200 rounded-10 py-17 mt-39'>
        <div className='flex justify-between'>
          <div className='ml-13 label-medium text-typoSecondary'>기본 세후 수령액</div>
          <div className='mr-23 label-medium text-typoSecondary'>@@@@원</div>
        </div>
        <hr className='w-751 my-10 ml-12 border border-bgBlind' />
        <div className='flex justify-between'>
          <div className='ml-13 label-medium text-typoSecondary'>최고 세후 수령액</div>
          <div className='mr-23 label-medium text-typoSecondary'>@@@@원</div>
        </div>
      </div>
      <table className='table-auto w-776 border-t-1 border-border02 mt-39 mb-63'>
        <tr className='border-b-1 border-border02 h-33'>
          <th className='border-r-1 border-border02 label-small text-typoPrimary bg-border00'>기간</th>
          <th className='label-small text-typoPrimary bg-border00'>금리</th>
        </tr>
        <tr className='border-b-1 border-border02 h-33'>
          <td className='border-r-1 border-border02 label-small text-typoSecondary'></td>
          <td className='label-small text-typoSecondary'></td>
        </tr>
        <tr className='border-b-1 border-border02 h-33'>
          <td className='border-r-1 border-border02 label-small text-typoSecondary'></td>
          <td className='label-small text-typoSecondary'></td>
        </tr>
      </table>
      <div className='flex justify-center'>
        <DefaultBtn />
      </div>
    </div>
  ) : (
    <div {...props}>Small</div>
  );
};

export default InterestRateGuide;
