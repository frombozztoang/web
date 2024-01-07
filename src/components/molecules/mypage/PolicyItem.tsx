'use client';
import React from 'react';
import Image from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import IsLiked from '@/public/icons/heartClick.svg';
import IsNotLiked from '@/public/icons/heartdefault.svg';

type TPolicyItemProps = {
  img: string;
  name: string;
  description: string;
  like: boolean;
};

const PolicyItem = ({ img, name, description, like }: TPolicyItemProps) => {
  return (
    <div className='bg-secondary w-342 tablet:w-855 px-20 py-16 tablet:px-30 tablet:py-25 flex items-center border-2 rounded-10 border-border01 box-border '>
      {img == null ? (
        <div className=' w-72 h-72 bg-imageBase rounded-xl mr-21 flex items-center justify-center object-cover '>
          <Image src={img} alt='policyImg' />
        </div>
      ) : (
        ''
      )}
      <div className='w-full h-full flex items-center justify-between '>
        <div className='h-full w-full flex-col text-primary '>
          <h1 className=' label-small tablet:label-large mb-[4.92px] tablet:mb-6'>{name}</h1>
          <h2 className='h-20 tablet:h-34 paragraph-small  tablet:paragraph-large overflow-hidden'>{description}</h2>
        </div>
        <div>
          <IsLiked width='25' height='25' viewBox='0 0 37 38' className='tablet:w-37 tablet:h-37 object-contain ' />
        </div>
      </div>
    </div>
  );
};

export default PolicyItem;
