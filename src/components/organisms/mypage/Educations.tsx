'use client';

import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React, { useEffect, useState } from 'react';
import Accordian from '@/components/organisms/mypage/accordian';
import { TEducationBookmark } from '@/types/mypageTypes';
import { getEducationBookmarkApi } from '@/api/mypageApi';
import Link from 'next/link';

type TBookmarkCategory = {
  title: string;
  bookmarks: TEducationBookmark[];
  contentType: 'EDU_CONTENT' | 'NEWS_CONTENT';
};

const Educations = () => {
  const [categories, setCategories] = useState<TBookmarkCategory[]>([
    { title: '금융 교육', bookmarks: [], contentType: 'EDU_CONTENT' },
    { title: '금융 뉴스', bookmarks: [], contentType: 'NEWS_CONTENT' },
  ]);

  const fetchData = async () => {
    try {
      const data = await getEducationBookmarkApi();
      if (data && data.TEducationBookmark) {
        setCategories(
          categories.map((category) => ({
            ...category,
            bookmarks: data.TEducationBookmark.filter((item) => item.contentType === category.contentType),
          })),
        );
      }
    } catch (error) {
      console.error('Error fetching Bookmark data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {categories.map((category, index) => (
        <ul key={index} className='mb-23 tablet:mb-39 '>
          <Accordian title={category.title} count={category.bookmarks.length}>
            {category.bookmarks.map((i, index) => (
              <Link
                key={index}
                href={
                  category.contentType === 'EDU_CONTENT'
                    ? `/educations/${i.educationInfoId}`
                    : `/news/${i.educationInfoId}`
                }
              >
                <PolicyItem key={index} img={''} name={i.title} description={i.content} like={true} id={0} link={''} />
              </Link>
            ))}
          </Accordian>
        </ul>
      ))}
    </div>
  );
};

export default Educations;
