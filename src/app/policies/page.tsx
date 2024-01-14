'use client';
import React from 'react';
import Policy from '@/components/molecules/Policy/Policy';
import SearchFieldForPolicy from '@/components/molecules/SearchFieldForPolicy';
const ThankYouPage = () => {
  const onSearch = (searchTerm: string) => {
    alert(`검색어: ${searchTerm}`);
  };
  return (
    <div className='flex flex-col items-center justify-center mb-[-60px]'>
      <div className='flex flex-col justify-center items-center'>
        <Policy></Policy>
      </div>
    </div>
  );
};

export default ThankYouPage;
