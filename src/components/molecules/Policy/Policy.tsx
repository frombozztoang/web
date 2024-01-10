// Policy 컴포넌트
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import SearchFieldForPolicy from '../SearchFieldForPolicy';
import Default_goldtoriv1 from '@/public/icons/default_goldtoriv1.svg';

const Policy = () => {
  const datas = require('@/public/data/dummyPolicy.json');
  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});

  const handleHeartClick = (index: number) => {
    setHeartStates({
      ...heartStates,
      [index]: !heartStates[index],
    });
  };

  // 검색어로 필터링된 컨텐츠 가져오기
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContents = datas.filter((item: { title: string | string[] }) => item.title.includes(searchQuery));

  return (
    <div className='flex-col my-[30px] w-[342px] tablet:w-789 desktop:w-884'>
      <SearchFieldForPolicy searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='border-b-[3px] border-black pb-3 heading-medium desktop:heading-large font-bold  w-full'>
        청년 금융 정책
      </div>
      <div className='flex justify-start flex-wrap w-full gap-[28px] my-15'>
        {filteredContents.map((item: any, id: number) => (
          <div
            key={id}
            className='flex-col w-342 desktop:w-[420px]  tablet:w-376 border-2 border-color-[#EAEAEA] rounded-lg'
          >
            <Link
              key={id}
              href={{
                pathname: `/policies/${id}`,
                query: {
                  id: item.id,
                },
              }}
            >
              <div className='flex-wrap flex w-full rounded-t-lg h-166  tablet:h-182 desktop:h-[208px] bg-mainLevel300 hover:bg-mainLevel500'>
                <h2 className='text-27 desktop:text-[34px] tablet:text-30 desktop:w-230 text-typoTertiary font-bold p-[15px] flex-wrap w-190'>
                  {item.title}
                </h2>
                <div className='absolute h-171 w-171 ml-[180px] mt-[35px]  tablet:ml-[199px] tablet:mt-[39px] tablet:w-188 target:h-188 desktop:ml-[217px] desktop:mt-[44px] desktop:w-215 desktop:h-215'>
                  <Default_goldtoriv1 />
                </div>
              </div>
            </Link>
            <div className='flex bg-mainLevel100 h-[73px] p-6 desktop:h-92 pt-[20px] gap-[25px] rounded-b-lg'>
              <Link
                key={id}
                href={{
                  pathname: '/learnWithUs/education',
                  query: {
                    title: item.title,
                    content: item.content,
                  },
                }}
              >
                <p className='pb-10 text-13 w-[250px]  tablet:h-40 tablet:w-300 tablet:text-14 h-[40px] desktop:h-[50px] desktop:w-[350px] desktop:text-16 rounded-b-lg text-typoPrimary overflow-hidden text-ellipsis line-clamp-2'>
                  {item.content}
                </p>
              </Link>
              <div
                className='z-10 w-29 h-29 ml-15 tablet:w-[32px] tablet:h-32 tablet:ml-[-10px] desktop:w-37 desktop:h-37 desktop:ml-[-10px]'
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
