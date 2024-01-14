// Policy 컴포넌트
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
import Default_goldtoriv1 from '@/public/icons/default_goldtoriv1.svg';
import fetchPolicyData from '@/api/policylistapi/policylistapi';
import fetchPolicyDetail from '@/api/policylistapi/policydetail';
type TPolicy = {
  isLiked: Boolean;
  polyBizSjNm: string;
  polyItcnCn: string;
  sporCn: string;
  bizPrdCn: string;
  rqutPrdCn: string;
  sporScvl: string;
  ageInfo: string;
  prcpCn: string;
  accrRqisCn: string;
  majrRquisCn: string;
  empmSttsCn: string;
  spizRlmRqisCn: string;
  aditRscn: string;
  prcpLmttTrgtCn: string;
  rqutProcCn: string;
  jdgnPresCn: string;
  rqutUrla: string;
  pstnPaprCn: string;
};
const Policy = () => {
  const [policyData, setPolicyData] = useState([]);
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});

  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };
  const handleClick = (policyInfoId: number) => {
    // 클릭한 콘테이너의 policyInfoId 값을 fetchPolicyDetail 함수에 전달합니다.
    fetchPolicyDetail(policyInfoId);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPolicyData();
      setPolicyData(data);
    };
    fetchData();
  }, []);
  // 검색어로 필터링된 컨텐츠 가져오기
  const [searchQuery, setSearchQuery] = useState('');
  const filteredContents = policyData.filter((item: { policyName: string }) => item.policyName.includes(searchQuery));

  return (
    <div className='flex-col mb-[30px] w-[342px] tablet:w-438 desktop:w-884 '>
      <SearchFieldForPolicy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='border-b-[3px] border-black my-20 pb-5 tablet:my-25 heading-medium desktop:heading-large font-bold  w-full dark:text-[#D6D6D6] dark:border-[#383838] '>
        청년 금융 정책
      </div>
      <div className='flex justify-start flex-wrap w-full gap-[28px] my-15 desktop:gap-24 '>
        {filteredContents.map((item: any, id: number) => (
          <div
            key={id}
            className='flex-col w-342 desktop:w-[430px]  tablet:w-full border-1 rounded-lg dark:bg-[#383838] dark:border-[#383838]'
          >
            <Link
              key={id}
              href={{
                pathname: `/policies/${id}`,
                query: {
                  id: item.policyInfoId,
                },
              }}
              onClick={() => handleClick(item.policyInfoId)}
            >
              <div className='flex-wrap flex w-full rounded-t-lg h-166  tablet:h-212 desktop:h-[208px] bg-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B] dark:border-[#383838] '>
                <h2 className='heading-xl desktop:text-[34px] tablet:text-34 tablet:w-220 desktop:w-230 text-typoTertiary font-bold p-[15px] flex-wrap w-190'>
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
                  pathname: '/learnWithUs/education',
                  query: {
                    title: item.policyName,
                    content: item.policyContent,
                  },
                }}
              >
                <p className='-z-10 w-[250px] text-left paragraph-small desktop: tablet:h-53 tablet:w-350 tablet:paragraph-medium tablet:text-14 h-[40px] desktop:h-[50px] desktop:w-[350px] desktop:paragraph-medium text-typoPrimary overflow-hidden text-ellipsis line-clamp-2 dark:text-[#D6D6D6]'>
                  {item.policyContent}
                </p>
              </Link>
              <div
                className='z-0 w-29 h-29 ml-15 mt-2 tablet:w-[32px] tablet:h-32 tablet:ml-[1px] tablet:mt-8 desktop:w-37 desktop:h-37 desktop:mt-6'
                onClick={() => handleHeartClick(id)}
              >
                {heartStates[id] ? <Heartclick /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
