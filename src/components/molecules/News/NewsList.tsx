// NewsList 컴포넌트
'use client';
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import Heartclick from '@/public/icons/clickheart2.svg';
import Link from 'next/link';
import fetchNewsListData from '@/api/newslistapi/newslistapi';

const NewsList = () => {
  const [NewsData, setNewsData] = useState([]);

  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});
  const handleHeartClick = (id: number) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsListData();
      setNewsData(data);
    };
    fetchData();
  }, []);

  return (
    <div className='desktop:py-39 tablet:py-46 py-20 w-342 tablet:w-[438px] desktop:w-[855px] '>
      {NewsData?.map((data: any, id: number) => (
        <div
          key={id}
          className='flex w-full mb-10 border-2 border-color-[#D6D6D6] rounded-[10px] hover:border-main hover:border-2 dark:bg-[#343434] dark:border-[#383838]'
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
            <div className='bg-[#6C6C6C] w-87 h-full tablet:w-[112px] desktop:w-[167px] border-border-02 rounded-l-[10px]  '>
              이미지칸
            </div>
          </Link>
          <div className='flex justify-evenly '>
            <Link
              key={id}
              href={{
                pathname: `/news/${id}`,
                query: {
                  id: data.id,
                },
              }}
            >
              <div className='flex-col bg-secondary px-12 w-[210px] tablet:w-[300px] desktop:w-[630px] dark:bg-[#343434]'>
                <h2 className='heading-small tablet:heading-medium desktop:heading-xl font-bold mt-[5px] pb-14 dark:text-[#D6D6D6]'>
                  {data.title}
                </h2>
                <div className='text-typoSecondary paragraph-small tablet:paragraph-medium desktop:paragraph-large'>
                  <div className='w-150 h-[30px] tablet:w-180 tablet:h-[26px] desktop:w-600 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {data.content}
                  </div>
                  <div className='pb-4'>{data.date}</div>
                </div>
              </div>
            </Link>
            <p
              className='z-10 mt-28 h-[26px] w-[26px] tablet:h-33 tablet:w-33 desktop:w-37 tablet:ml-[-15px] tablet:mt-35 desktop:h-37 desktop:mt-[50px]'
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
