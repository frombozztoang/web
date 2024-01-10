'use client';

import NewsHeadLine from '@/components/molecules/News/NewsHeadLine';
import NewsContent from '@/components/molecules/News/NewsContent';
import { useSearchParams } from 'next/navigation';

const News = () => {
  const News = {
    id: 0,
    title: '자유 입출금 통장 알찬사용법',
    content: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '뉴스 일자',
  };
  const serchParams = useSearchParams();
  const id = serchParams.get('id');
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center'>
      <div className=''>
        <NewsHeadLine title={News.title} date={News.date} />
      </div>
      <div>
        <NewsContent content={News.content} />
      </div>
    </div>
  );
};

export default News;
// 디자인 만든거
