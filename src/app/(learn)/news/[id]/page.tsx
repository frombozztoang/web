'use client';

import NewsHeadLine from '@/components/molecules/News/NewsHeadLine';
import NewsContent from '@/components/molecules/News/NewsContent';
import { useSearchParams } from 'next/navigation';
import { getNewsIdApi } from '@/api/newslistapi/newsdetail';
import { useEffect, useState } from 'react';
import { TNews } from '@/components/molecules/News/NewsList';
import { postNewsBookmarkApi, deleteNewsBookmarkApi } from '@/api/newslistapi/newslistapi';
const News = ({ params }: { params: { id: number } }) => {
  const [NewsInfo, setNewsInfo] = useState<TNews | undefined>();
  const [bookmarked, setbookmarked] = useState(false);
  const fetchdata = async () => {
    try {
      const data = await getNewsIdApi(params.id);
      if (data) {
        setNewsInfo(data);
        setbookmarked(data.bookmarked);
      }
    } catch (error) {
      console.error('Error fetching savingFetchData:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const onHeartClick = async (id: number, bookmarked: boolean, contentType: 'NEWS_CONTENT') => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteNewsBookmarkApi(id, 'NEWS_CONTENT');
      } else {
        apiResult = await postNewsBookmarkApi(id, 'NEWS_CONTENT');
      }
      if (apiResult !== undefined) {
        setbookmarked(!bookmarked);
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching NewsBookmark:', error);
    }
  };

  return (
    <div className='w-auto h-full flex flex-col items-center justify-center mt-[-10px]'>
      <div className=''>
        {NewsInfo && (
          <NewsHeadLine
            bookmarked={bookmarked}
            title={NewsInfo.title}
            created_at={NewsInfo.created_at}
            onHeartClick={() => onHeartClick(params.id, NewsInfo.bookmarked, 'NEWS_CONTENT')}
          />
        )}
      </div>
      <div>{NewsInfo && <NewsContent content={NewsInfo.content} />}</div>
    </div>
  );
};

export default News;
