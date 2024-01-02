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
    <div className='w-855 h-122 px-30 py-25 flex items-center border-2  rounded-10 border-border01 '>
      {img == null ? (
        <div className=' w-72 h-72 bg-imageBase rounded-xl mr-21 flex items-center justify-center object-cover '>
          <Image src={img} alt='policyImg' />
        </div>
      ) : (
        ''
      )}
      <div className='w-full h-full flex items-center justify-between '>
        <div className='h-full w-full flex-col text-primary'>
          <h1 className='label-large mb-6'>{name}</h1>
          <h2 className='h-34  paragraph-large overflow-hidden'>{description}</h2>
        </div>
        <div>
          <IsLiked />
        </div>
      </div>
    </div>
  );
};

export default PolicyItem;
