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
      className='w-342 h-38 tablet:w-790 tablet:h-88 desktop:w  pt-5 desktop:w-854 desktop:h-88 my-[40px] border-[2px] rounded-[10px]'
    >
      <div className='flex items-center'>
        <input
          className='w-280 h-17 tablet:w-[680px] tablet:h-39 tablet:text-28   tablet:p-15 heading-small desktop:w-[800px] desktop:text-label-large px-[10px] desktop:h-[32px] text-left ml-4  outline-none'
          type='text'
          placeholder='궁금한 정책을 검색해보세요'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className='w-[20px] h-[20px] tablet:w-47 tablet:h-47 desktop:w-37 desktop:h-37 desktop:mr-20'
          type='submit'
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchFieldForPolicy;
