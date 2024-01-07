import React from 'react';
import Heart from '@/public/icons/heart.svg';
import HeartClick from '@/public/icons/heartclick.svg';
import Link from 'next/link';

type TCmaProps = {
  isLiked: boolean;
  productName: string;
  description: string;
  rate: string;
  productId: number;
  productNum: number;
  onHeartClick: () => void;
  size: 'Large' | 'Small';
};

const Cma: React.FC<TCmaProps & React.HTMLAttributes<HTMLDivElement>> = ({
  isLiked,
  productName,
  description,
  rate,
  onHeartClick,
  productId,
  productNum,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <Link
      href={{
        pathname: `/whatToDo/${productId}`,
        query: {
          id: productId,
          product: productNum,
        },
      }}
    >
      <div
        {...props}
        className='flex w-855 px-30 py-25 justify-between items-center gap-417 rounded-10 border-2 border-border01 bg-secondary cursor-pointer'
      >
        <div className='flex flex-row items-center'>
          <div className='w-72 h-72 rounded-13 bg-imageBase'></div>
          <div className='ml-21'>
            <div className='label-large text-typoPrimary'>{productName}</div>
            <div className='mt-5 paragraph-large text-typoPrimary'>{description}</div>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='label-large text-main'>수익률 {rate}%</div>
          <button className='ml-19' onClick={onHeartClick}>
            {isLiked ? <Heart className='w-37 h-37' /> : <HeartClick className='w-37 h-37' />}
          </button>
        </div>
      </div>
    </Link>
  ) : (
    <div
      {...props}
      className='flex w-342 p-16 justify-between items-center gap-341 rounded-10 border-1 border-border01 bg-secondary'
    >
      <div className='flex flex-row items-center'>
        <div className='w-59 h-59 rounded-10 bg-imageBase'></div>
        <div className='ml-10'>
          <div className='label-medium text-typoPrimary'>{productName}</div>
          <div className='mt-4 paragraph-medium text-typoPrimary'>{description}</div>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <div className='label-medium text-main'>수익률 {rate}%</div>
        <button className='ml-10' onClick={onHeartClick}>
          {isLiked ? <Heart className='w-25 h-25' /> : <HeartClick className='w-25 h-25' />}
        </button>
      </div>
    </div>
  );
};

export default Cma;
