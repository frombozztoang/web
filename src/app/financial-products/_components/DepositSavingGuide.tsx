import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heart_click.svg';
import Image from 'next/image';

type TDepositSavingGuideProps = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  bankLogoUrl: string;
  maxInterestRate: string;
  interestRate: string;
  onHeartClick: () => void;
};

const DepositSavingGuide: React.FC<TDepositSavingGuideProps> = ({
  isLiked,
  productName,
  bankName,
  bankLogoUrl,
  maxInterestRate,
  interestRate,
  onHeartClick,
}) => {
  return (
    <div className='flex justify-between items-center border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary w-342 px-13 py-17 rounded-8 border tablet:w-438 tablet:px-16 tablet:py-22 tablet:rounded-10 desktop:w-855 desktop:px-33 desktop:py-40 desktop:rounded-20 desktop:border-2'>
      <div className='flex flex-row items-center'>
        <Image
          width={100}
          height={100}
          className='w-35 h-35 rounded-4 tablet:w-44 tablet:h-44 tablet:rounded-5 desktop:w-70 desktop:h-70 desktop:rounded-13'
          src={bankLogoUrl}
          alt={bankName}
        />
        <div className='ml-7 tablet:ml-9 desktop:ml-19'>
          <div className='text-typoPrimary dark:text-dark-typoPrimary heading-small tablet:heading-medium desktop:heading-xl'>
            {productName}
          </div>
          <div className='paragraph-small text-typoPrimary dark:text-dark-typoPrimary tablet:paragraph-medium desktop:paragraph-large'>
            {bankName}
          </div>
        </div>
      </div>
      <div className='flex items-center pl-5'>
        <div>
          <div className='text-typoSecondary dark:text-dark-typoSecondary mb-4 paragraph-small tablet:paragraph-medium tablet:mb-0 desktop:mb-16 desktop:heading-medium'>
            최고
          </div>
          <div className='text-main label-small tablet:paragraph-medium desktop:label-large whitespace-nowrap'>
            연 {maxInterestRate}%
          </div>
        </div>
        {interestRate && (
          <>
            <div className='border-l-1 border-border02 dark:border-dark-border02 h-35 mx-8 tablet:h-48 tablet:mx-7 desktop:h-70 desktop:mx-15'></div>
            <div>
              <div className='text-typoSecondary dark:text-dark-typoSecondary mb-4 paragraph-small tablet:paragraph-medium tablet:mb-0 desktop:mb-16 desktop:heading-medium'>
                기본
              </div>
              <div className='text-main label-small tablet:paragraph-medium desktop:label-large whitespace-nowrap'>
                연 {interestRate}%
              </div>
            </div>
          </>
        )}
        <button className='ml-10 tablet:ml-15 desktop:ml-50' onClick={onHeartClick}>
          {isLiked ? (
            <HeartClick className='w-25 :h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          ) : (
            <Heart className='w-25 :h-25 tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          )}
        </button>
      </div>
    </div>
  );
};

export default DepositSavingGuide;
