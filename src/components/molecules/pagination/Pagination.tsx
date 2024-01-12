'use client';

import React, { useState } from 'react';
import PaginationBtn from '@/components/atom/button/PaginationBtn';
import ArrowRight from '@/public/icons/arrow-right.svg';
import ArrowLeft from '@/public/icons/arrow-left.svg';

export type TPaginationProps = {
  pageNum: number;
  pageTotalNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<TPaginationProps> = ({ pageNum, pageTotalNum, setPageNum }) => {
  const [groupPageNum, setGroupPageNum] = useState(0); //그룹의 시작 페이지

  return (
    <div className='mt-15 tablet:mt-19 flex justify-center items-center'>
      {pageTotalNum > 5 && (
        <ArrowRight
          className='mr-10 w-20 h-20 desktop:w-25 desktop:h-25 desktop:mr-25 cursor-pointer'
          onClick={() => {
            if (groupPageNum > 0) {
              setGroupPageNum((prev: number) => Math.max(0, prev - 5));
              setPageNum(groupPageNum - 1);
            }
          }}
        />
      )}
      {Array.from({ length: Math.min(5, pageTotalNum - groupPageNum) }, (_, index) => {
        const pageNumber = groupPageNum + index;
        return (
          <PaginationBtn
            key={pageNumber}
            num={pageNumber + 1}
            isOn={pageNum === pageNumber}
            styles='ml-3 mr-3 tablet:ml-4 tablet:mr-4 desktop:ml-5 desktop:mr-5'
            onClick={() => setPageNum(pageNumber)}
          />
        );
      })}
      {pageTotalNum > 5 && (
        <ArrowLeft
          className='ml-10 w-20 h-20 desktop:w-25 desktop:h-25 desktop:ml-25 cursor-pointer'
          onClick={() => {
            if (groupPageNum + 5 < pageTotalNum) {
              setGroupPageNum((prev) => prev + 5);
              setPageNum(groupPageNum + 5);
            }
          }}
        />
      )}
    </div>
  );
};

export default Pagination;
