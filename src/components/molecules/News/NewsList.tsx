// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Link from 'next/link';

const NewsList = () => {
  const datas = require('@/public/data/dummydata.json');

  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (id: number) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });
  };

  return (
    <div className='desktop:py-39 tablet:py-46 py-20 w-342 tablet:w-[771px] desktop:w-[855px]'>
      {datas?.map((data: any, id: number) => (
        <div
          key={id}
          className='flex w-full mb-10 border-2 border-color-[#D6D6D6] rounded-[10px] hover:border-main hover:border-2'
        >
          <Link
            key={id}
            href={{
              pathname: `news/${id}`,
              query: {
                id: data.id,
              },
            }}
          >
            <div className='bg-[#6C6C6C] w-87 h-full tablet:w-[196px] desktop:w-[167px] destkop:h-[167px] border-02 rounded-l-[10px]'>
              이미지칸
            </div>
          </Link>
          <div className='flex justify-evenly'>
            <Link
              key={id}
              href={{
                pathname: `/news/${id}`,
                query: {
                  id: data.id,
                },
              }}
            >
              <div className='flex-col bg-secondary px-12 w-[210px] tablet:w-[510px] desktop:w-[630px]'>
                <h2 className='heading-small tablet:text-[27px] desktop:heading-xl font-bold mt-[5px] pb-14'>
                  {data.title}
                </h2>
                <p className='text-typoSecondary paragraph-small tablet:text-[27px] desktop:paragraph-large'>
                  <p className='w-150 h-[30px] tablet:w-400 tablet:h-[40px]  overflow-hidden text-ellipsis whitespace-nowrap'>
                    {data.content}
                  </p>
                  <p className='pb-4'>{data.date}</p>
                </p>
              </div>
            </Link>
            <p
              className='z-10 mt-28 h-[26px] w-[26px] tablet:h-60 tablet:w-60 desktop:w-37 desktop:h-37 desktop:mt-[50px]'
              onClick={() => handleHeartClick(id)}
            >
              {heartStates[id] ? <Heartclick /> : <Heartdefault />}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
