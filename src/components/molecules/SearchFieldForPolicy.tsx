import React from 'react';
import Search from '@/public/icons/search.svg';

type TSearchFieldForPolicyProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setPageNum: (pageNum: number) => void;
};

const SearchFieldForPolicy: React.FC<TSearchFieldForPolicyProps> = ({ searchValue, setSearchValue, setPageNum }) => {
  return (
    <form className='flex items-center w-342 tablet:w-438 desktop:mb-39 desktop:w-884 border desktop:border-2 rounded-10 bg-border00 border-border02 dark:bg-[#343434] dark:border-[#343434]'>
      <input
        className='w-full px-8 py-10 tablet:px-10 tablet:py-13 desktop:px-20 desktop:py-18 heading-small bg-transparent tablet:heading-medium desktop:label-large text-left outline-none placeholder:text-border04 dark:placeholder:text-[#6B6B6B]'
        type='text'
        placeholder='궁금한 정책을 검색해보세요'
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setPageNum(0);
        }}
      />
      <button
        className='w-20 h-20 mr-10 desktop:mr-45 tablet:mr-12 tablet:w-26 tablet:h-26 desktop:w-37 desktop:h-37'
        type='submit'
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchFieldForPolicy;
