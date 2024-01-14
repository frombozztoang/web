import React, { useState } from 'react';
import Search from '@/public/icons/search.svg';
const SearchFieldForPolicy = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기에 검색을 처리하는 로직을 추가할 수 있습니다.
    // 예를 들어, API 호출을 통해 검색 결과를 가져오는 등의 작업을 할 수 있습니다.
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className='w-342 tablet:w-438 desktop:mb-39 desktop:w-884 border-[2px] rounded-[10px] dark:bg-[#343434] dark:border-[#343434]'
    >
      <div className='flex items-center  '>
        <input
          className='w-full px-20 py-18 placeholder:text-border04 heading-small tablet:heading-medium desktop:label-large text-left outline-none dark:placeholder:text-[#6B6B6B] dark:bg-[#343434] '
          type='text'
          placeholder='궁금한 정책을 검색해보세요'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className='w-[20px] h-[20px] mr-10 desktop:mr-45 tablet:mr-12 tablet:w-26 tablet:h-26 desktop:w-37 desktop:h-37'
          type='submit'
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchFieldForPolicy;
