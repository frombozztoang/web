'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Clickheart2 from '@/public/icons/clickheart2.svg';
import { insertText } from 'slate';

const Education = () => {
  const datas = require('@/public/data/dummydata.json');

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      let truncatedText = text.slice(0, maxLength) + '...';
      let modifiedText = truncatedText.slice(0, 29) + '\n' + truncatedText.slice(29);
      return modifiedText;
    }
  };

  const [heartStates, setHeartStates] = useState<Record<number, boolean>>({});

  const handleHeartClick = (id: number) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });
  };

  return (
    <div className='desktop:py-39 tablet:py-26 py-20'>
      <div className='tablet:flex tablet:flex-wrap tablet:w-[430px] desktop:w-[890px] desktop:flex-wrap desktop:flex '>
        {datas.map((data: any, id: number) => (
          <div
            key={id}
            className='flex-col tablet:ml-20 w-[336px] my-12 desktop:w-[425px] tablet:w-371 desktop:my-10 border-2 border-color-[#EAEAEA] rounded-lg dark:border-[#383838]'
          >
            <Link
              key={id}
              href={{
                pathname: `/educations/${id}`,
                query: {
                  id: data.id,
                },
              }}
            >
              <div className='flex-wrap  w-full flex h-[163px] tablet:h-180 desktop:h-[210px] bg-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B]'>
                <h2 className='text-[26px] mr-[140px] tablet:text-[29px] tablet:p-20 desktop:text-[34px] text-typoTertiary font-bold p-10 desktop:p-[15px] flex-wrap desktop:mr-[170px]'>
                  {data.title}
                </h2>
                <div className='absolute w-168 h-135 ml-[170px] tablet:w-186 tablet:h-150 tablet:ml-[195px] tablet:mt-[48.5px] mt-[44.3px] desktop:ml-[220px] desktop:mt-[58px] desktop:w-216 desktop:h-173'>
                  <ModifiedGlasses_goldtori />
                </div>
              </div>
            </Link>
            <div className='flex bg-[#CDE7DA] h-[71px] tablet:h-79 desktop:h-92 p-10 pt-[20px] gap-[25px] dark:bg-[#343434] '>
              <Link
                key={id}
                href={{
                  pathname: `/learnWithUs/education`,
                  query: {
                    id: data.id,
                  },
                }}
              >
                <div className='w-[240px] desktop:w-[340px] tablet:w-[290px] text-typoPrimary text-[12px] tablet:text-[14px] desktop:text-[16px] desktop:paragraph-medium dark:text-[#D6D6D6]'>
                  {truncateText(data.content, 59)}
                </div>
              </Link>
              <div
                className='h-29 w-29 tablet:h-32 tablet:w-32 desktop:h-37 desktop:w-37'
                onClick={() => handleHeartClick(id)}
              >
                {heartStates[id] ? <Clickheart2 /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
