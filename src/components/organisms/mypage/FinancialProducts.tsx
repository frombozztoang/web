import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React from 'react';
import Accordian from './Accordian';

const FinancialProducts = () => {
  return (
    <div>
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='예금' count='1'>
          <PolicyItem
            img={''}
            name={'배고팡'}
            description={'배곺ㅇㄴㅁㅍㅇ'}
            like={true}
            maxInterestRate={'3.9'}
            interestRate={'1.2'}
          />
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='적금' count='1' />
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='CMA' count='1' />
      </ul>
    </div>
  );
};

export default FinancialProducts;
