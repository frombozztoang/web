import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heart_click.svg';

type TDepositSavingProps = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  maxInterestRate: string;
  interestRate: string;
  onHeartClick: () => void;
};

const DepositSaving: React.FC<TDepositSavingProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isLiked,
  productName,
  bankName,
  maxInterestRate,
  interestRate,
  onHeartClick,
  ...props
}) => {
  return (
    <div
      {...props}
      className='flex w-342 p-16 mb-10 justify-between items-center gap-341 rounded-12 border-2 border-border01 dark:border-dark-border01 bg-secondary dark:bg-dark-secondary cursor-pointer tablet:w-438 tablet:p-20 tablet:rounded-15 tablet:mb-12 desktop:w-855 desktop:px-30 desktop:py-25 desktop:mb-20 desktop:gap-417 desktop:rounded-10'
    >
      <div className='flex flex-row items-center'>
        <div className='w-59 h-59 rounded-12 bg-imageBase tablet:w-75 tablet:h-75 tablet:rounded-13 desktop:w-72 desktop:h-72 desktop:rounded-13'></div>
        <div className='ml-10 tablet:ml-12 desktop:ml-21'>
          <div className='label-medium text-typoPrimary dark:text-dark-typoPrimary desktop:label-large'>
            {productName}
          </div>
          <div className='mt-4 paragraph-medium text-typoPrimary dark:text-dark-typoPrimary tablet:mt-6 desktop:mt-5 desktop:paragraph-large'>
            {bankName}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col text-right'>
          <div className='label-medium text-main desktop:label-large'>최고 {maxInterestRate}%</div>
          <div className='mt-5 paragraph-small text-typoPrimary dark:text-dark-typoPrimary tablet:paragraph-medium desktop:paragraph-medium desktop:mt-5'>
            기본 {interestRate}%
          </div>
        </div>
        <button
          className='ml-10 tablet:ml-12 desktop:ml-19'
          onClick={(event) => {
            event.stopPropagation();
            onHeartClick();
          }}
        >
          {isLiked ? (
            <Heart className='w-25 h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          ) : (
            <HeartClick className='w-25 h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          )}
        </button>
      </div>
    </div>
  );
};

export default DepositSaving;
