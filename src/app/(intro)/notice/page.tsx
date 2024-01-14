'use client';
import React from 'react';
import NoticeTemplates from '@/components/templates/notice/index';
import { getUser } from '@/api/userApi';

const Page = () => {
  const user = getUser();
  console.log('잉', user);
  return (
    <div className='flex flex-col justify-center items-center'>
      <NoticeTemplates />
    </div>
  );
};

export default Page;
