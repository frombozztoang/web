import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heart_click.svg';

type TDepositSavingGuideProps = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  maxInterestRate: string;
  interestRate: string;
  onHeartClick: () => void;
};

const DepositSavingGuide: React.FC<TDepositSavingGuideProps> = ({
  isLiked,
  productName,
  bankName,
  maxInterestRate,
  interestRate,
  onHeartClick,
}) => {
  return (
    <div className='flex justify-between items-center border-border02 bg-secondary w-342 px-13 py-17 rounded-8 border tablet:w-789 tablet:px-30 tablet:py-40 tablet:rounded-18 tablet:border-2 desktop:w-855 desktop:px-33 desktop:py-40 desktop:rounded-20 desktop:border-2'>
      <div className='flex flex-row items-center'>
        <div className='bg-imageBase w-35 h-35 rounded-4 tablet:w-80 tablet:h-80 tablet:rounded-9 desktop:w-70 desktop:h-70 desktop:rounded-13'></div>
        <div className='ml-7 tablet:ml-17 desktop:ml-19'>
          <div className='text-typoPrimary heading-small tablet:heading-xl desktop:heading-xl'>{productName}</div>
          <div className='paragraph-small text-typoPrimary tablet:paragraph-xl desktop:paragraph-large'>{bankName}</div>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <div className='text-typoSecondary mb-4 paragraph-small tablet:paragraph-xl tablet:mb-0 desktop:mb-16 desktop:heading-medium'>
            최고
          </div>
          <div className='text-main label-small tablet:paragraph-xl desktop:label-large'>연 {maxInterestRate}%</div>
        </div>
        <div className='border-l-1 border-border02 h-35 mx-8 tablet:h-87 tablet:mx-13 desktop:h-70 desktop:mx-15 '></div>
        <div>
          <div className='text-typoSecondary mb-4 paragraph-small tablet:paragraph-xl tablet:mb-0 desktop:mb-16 desktop:heading-medium'>
            기본
          </div>
          <div className='text-main label-small tablet:paragraph-xl desktop:label-large'>연 {interestRate}%</div>
        </div>
        <button className='ml-17 tablet:ml-55 desktop:ml-60' onClick={onHeartClick}>
          {isLiked ? (
            <Heart className='w-25 :h-25 tablet:w-59 tablet:h-59 desktop:w-37 desktop:h-37' />
          ) : (
            <HeartClick className='w-25 :h-25 tablet:w-59 tablet:h-59 desktop:w-37 desktop:h-37' />
          )}
        </button>
      </div>
    </div>
  );
};

export default DepositSavingGuide;
