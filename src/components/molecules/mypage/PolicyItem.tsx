'use client';
import React from 'react';
import Image from 'next/image';
import HeartClick from '@/public/icons/heartdefaultclick.svg';
import Heart from '@/public/icons/heart.svg';
import Link from 'next/link';

type TPolicyItemProps = {
  img: string;
  id: number;
  link: string;
  name: string;
  description: string;
  like: boolean;
  maxInterestRate?: string;
  interestRate?: string;
  onClick?: () => void;
};

const PolicyItem = ({
  img,
  name,
  description,
  like,
  maxInterestRate,
  interestRate,
  onClick,
  id,
  link,
}: TPolicyItemProps) => {
  return (
    <div className=' hover:cursor-pointer mb-10 bg-secondary dark:bg-dark-secondary dark:border-dark-border01 w-342 tablet:w-438 desktop:w-855 px-20 py-16 tablet:py-20 tablet:px-19 desktop:px-30 desktop:py-25 flex items-center border-2 rounded-10 border-border01 box-border '>
      {img == null ? (
        <Link key={id} href={`/financial-products/${link}/${id}`}>
          <div className=' w-72 h-72 bg-imageBase rounded-xl mr-21 flex items-center justify-center object-cover '>
            <Image src={img} alt='policyImg' />
          </div>
        </Link>
      ) : (
        ''
      )}
      <div className='w-full h-full flex items-center justify-between '>
        <Link key={id} href={`/financial-products/${link}/${id}`}>
          <div className='flex items-center justify-between h-full desktop:w-[739px] tablet:w-[350px] w-274'>
            <div className='flex flex-col text-primary  dark:text-dark-primary'>
              <h1 className=' label-small tablet:font-15 desktop:label-large mb-[4.92px]  tablet:mb-6'>{name}</h1>
              <h2 className='h-20 desktop:h-34 paragraph-small tablet:font-15  desktop:paragraph-large overflow-hidden'>
                {description}
              </h2>
            </div>
            <div className='flex items-center'>
              {maxInterestRate && interestRate && (
                <div className='flex flex-col whitespace-nowrap mr-19 text-right'>
                  <h1 className='mb-5 tablet:mb-6 desktop:mb-7 label-small tablet:text-13 desktop:label-large text-main'>
                    최고 {maxInterestRate}%
                  </h1>
                  <h3 className='paragraph-small tablet:text-13 desktop:paragraph-medium text-primary  dark:text-dark-primary '>
                    기본 {interestRate}%
                  </h3>
                </div>
              )}
            </div>
          </div>
        </Link>
        <div onClick={onClick}>
          {like ? (
            <HeartClick className=' tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          ) : (
            <Heart className='tablet:w-33 tablet:h-33 desktop:w-37 desktop:h-37' />
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyItem;
