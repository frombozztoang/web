// Policy 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
import Default_goldtoriv1 from '@/public/icons/default_goldtoriv1.svg';
import { getPolicysApi } from '@/api/policyApi';
import { postPolicyBookmarkApi, deletePolicyBookmarkApi } from '@/api/bookmarkApi';
import Pagination from '@/components/molecules/pagination/Pagination';
import { TPolicyResponse } from '@/types/policyTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const Policy = () => {
  const router = useRouter();
  const [policyData, setPolicyData] = useState<TPolicyResponse[] | undefined>([]);
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deletePolicyBookmarkApi(id);
      } else {
        apiResult = await postPolicyBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setPolicyData(policyData?.map((item) => (item.policyInfoId === id ? { ...item, isLiked: !isLiked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getPolicysApi(`size=8&page=${pageNum}&searchKeyword=${searchValue}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setPolicyData(data.content);
      }
    } catch (error) {
      console.error('Error fetching Financial Products:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, searchValue]);

  return (
    <div className='flex-col w-342 tablet:w-438 desktop:w-884 '>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <SearchFieldForPolicy searchValue={searchValue} setSearchValue={setSearchValue} setPageNum={setPageNum} />
      <h1 className='mt-20 tablet:mt-25 desktop:mt-39 heading-medium desktop:heading-large border-typoPrimary dark:text-[#D6D6D6] dark:border-[#383838] '>
        청년 금융 정책
      </h1>
      <hr className='mt-3 mb-20 tablet:mb-25 desktop:mt-10 desktop:mb-20' />
      <div className='flex justify-start flex-wrap gap-12 tablet:gap-15 desktop:gap-x-24 desktop:gap-y-10 mb-30 desktop:mb-39'>
        {policyData?.map((item, index) => (
          <div
            key={index}
            className='w-342 tablet:w-full desktop:w-430 cursor-pointer'
            onClick={() => router.push(`/policies/${item.policyInfoId}`)}
          >
            <div className='flex justify-between rounded-t-lg h-166 tablet:h-212 desktop:h-208 bg-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B] dark:border-[#383838]'>
              <h2 className='heading-large desktop:text-29 tablet:text-29 w-200 tablet:w-255 text-typoTertiary font-bold pt-18 pl-18 tablet:pt-18 tablet:pl-18 desktop:pt-22 desktop:pl-22'>
                {item.policyName}
              </h2>
              <div className='items-end flex relative'>
                <Default_goldtoriv1 className='absolute top-18 -right-8 tablet:top-22 tablet:-right-10 w-171 h-166 tablet:w-219 tablet:h-212 desktop:w-215 desktop:h-208' />
              </div>
            </div>
            <div className='flex justify-between relative z-toggle items-center h-73 desktop:h-94 gap-25 desktop:gap-20 rounded-b-lg bg-mainLevel100 dark:bg-[#343434]'>
              <p className='ml-11 tablet:ml-14 w-277 paragraph-small tablet:w-355 tablet:paragraph-medium desktop:w-349 desktop:paragraph-medium text-typoPrimary overflow-hidden text-ellipsis line-clamp-2 dark:text-[#D6D6D6]'>
                {item.policyContent}
              </p>
              <button
                className='mr-9 tablet:mr-11'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(item.policyInfoId, item.isLiked);
                }}
              >
                {item.isLiked ? (
                  <Heartclick className='w-29 h-29 tablet:w-32 tablet:h-32 desktop:w-37 desktop:h-37' />
                ) : (
                  <Heartdefault className='w-29 h-29 tablet:w-32 tablet:h-32 desktop:w-37 desktop:h-37' />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Policy;
