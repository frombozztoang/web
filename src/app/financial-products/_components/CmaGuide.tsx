import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heart_click.svg';

type TCmaGuideProps = {
  isLiked: boolean;
  productName: string;
  bankName: string;
  rate: string;
  onHeartClick: () => void;
};

const CmaGuide: React.FC<TCmaGuideProps> = ({ isLiked, productName, bankName, rate, onHeartClick }) => {
  return (
    <div className='flex justify-between items-center border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary w-342 px-13 py-17 rounded-8 border tablet:w-438 tablet:px-16 tablet:py-22 tablet:rounded-10 desktop:w-855 desktop:px-33 desktop:py-40 desktop:rounded-20 desktop:border-2'>
      <div className='flex flex-row items-center'>
        <div className='bg-imageBase w-35 h-35 rounded-4 tablet:w-44 tablet:h-44 tablet:rounded-5 desktop:w-70 desktop:h-70 desktop:rounded-13'></div>
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
          <div className='text-main label-small tablet:paragraph-medium desktop:label-large whitespace-nowrap'>
            수익률 {rate}%
          </div>
        </div>
        <button className='ml-17 tablet:ml-30 desktop:ml-60' onClick={onHeartClick}>
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

export default CmaGuide;
