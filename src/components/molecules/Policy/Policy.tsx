// Policy 컴포넌트
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
import Default_goldtoriv1 from '@/public/icons/default_goldtoriv1.svg';
import { getPolicysApi, postPolicyBookmarkApi, deletePolicyBookmarkApi } from '@/api/policylistapi/policylistapi';
import { getPolicydetailApi } from '@/api/policylistapi/policydetail';
import Pagination from '@/components/molecules/pagination/Pagination';

type TPolicyResponse = {
  id: number;
  policyName: string;
  policyContent: string;
  isLiked: boolean;
};

export type TPolicyApiResponse = {
  content: TPolicyResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: true;
  empty: false;
};
const Policy = () => {
  const [policyData, setPolicyData] = useState<TPolicyResponse[] | undefined>([]);

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
        setPolicyData(policyData?.map((item) => (item.id === id ? { ...item, isLiked: !isLiked } : item)));
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };
  const handleClick = (policyInfoId: number) => {
    // 클릭한 콘테이너의 policyInfoId 값을 fetchPolicyDetail 함수에 전달합니다.
    getPolicydetailApi(policyInfoId);
  };
  const fetchData = async () => {
    try {
      const data = await getPolicysApi(`size=8&page=${pageNum}`);
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
  }, [pageNum]);

  // 검색어로 필터링된 컨텐츠 가져오기
  const [searchQuery, setSearchQuery] = useState('');
  const filteredContents = policyData ? policyData.filter((item) => item.policyName.includes(searchQuery)) : [];

  return (
    <div className='flex-col mb-[30px] w-[342px] tablet:w-438 desktop:w-884 '>
      <SearchFieldForPolicy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='border-b-[3px] border-typoPrimary my-20 pb-5 tablet:my-25 heading-medium desktop:heading-large font-bold  w-full dark:text-[#D6D6D6] dark:border-[#383838] '>
        청년 금융 정책
      </div>
      <div className='flex justify-start flex-wrap w-full gap-[28px] my-15 desktop:gap-24 '>
        {filteredContents.map((item: any, id: number) => (
          <div
            key={id}
            className='flex-col w-342 desktop:w-[430px]  tablet:w-full border-mainLevel100 border-1 rounded-lg dark:bg-[#383838] dark:border-[#383838]'
          >
            <Link
              key={id}
              href={{
                pathname: `/policies/${item.policyInfoId}`,
              }}
              onClick={() => handleClick(item.policyInfoId)}
            >
              <div className='flex-wrap flex w-full rounded-t-lg h-166  tablet:h-212 desktop:h-[208px] bg-mainLevel300 border-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B] dark:border-[#383838] '>
                <h2 className='heading-xl desktop:text-[34px] tablet:text-34 tablet:w-220 desktop:w-230 text-typoTertiary font-bold p-[10px] flex-wrap w-190'>
                  {item.policyName}
                </h2>
                <div className='absolute h-171 w-171 ml-[180px] mt-[35.5px]  tablet:ml-[230px] tablet:mt-[44.7px] tablet:w-219 tablet:h-219 desktop:ml-[225px] desktop:mt-[44px] desktop:w-215 desktop:h-215'>
                  <Default_goldtoriv1 />
                </div>
              </div>
            </Link>
            <div className='-z-10 flex bg-mainLevel100 h-[73px] pt-20 px-11 desktop:h-94 tablet:py-11 tablet:px-12 gap-[25px] desktop:gap-20 desktop:px-8 desktop:py-20 rounded-b-lg dark:bg-[#343434] dark:border-[#383838]'>
              <Link
                key={id}
                href={{
                  pathname: `/policies/${item.policyInfoId}`,
                }}
                onClick={() => handleClick(item.policyInfoId)}
              >
                <p className='-z-10 w-[250px] text-left paragraph-small desktop: tablet:h-53 tablet:w-350 tablet:paragraph-medium h-[40px] desktop:h-[50px] desktop:w-[350px] desktop:paragraph-medium text-typoPrimary overflow-hidden text-ellipsis line-clamp-2 dark:text-[#D6D6D6]'>
                  {item.policyContent}
                </p>
              </Link>
              <div
                className='z-0 w-29 h-29 ml-15 mt-2 tablet:w-[32px] tablet:h-32 tablet:ml-[1px] tablet:mt-8 desktop:w-37 desktop:h-37 desktop:mt-6'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(item.id, item.isLiked);
                }}
              >
                {item.isLiked ? <Heartclick /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Policy;
