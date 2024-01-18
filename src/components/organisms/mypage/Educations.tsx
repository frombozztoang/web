'use client';

import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React, { useEffect, useState } from 'react';
import Accordian from '@/components/organisms/mypage/accordian';

import { getEducationBookmarkApi } from '@/api/mypageApi';
import Link from 'next/link';
import { TEduBookmark, TNewsBookmark } from '@/types/mypageTypes';
import { deleteEducationBookmarkApi } from '@/api/bookmarkApi';

import CommonModal from '../modal/commonModal';

const Educations = () => {
  const [edu, setEdu] = useState<TEduBookmark[] | undefined>([]);
  const [news, setNews] = useState<TNewsBookmark[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const onEduHeartClick = (id: number) => {
    setShowModal(true);
    setSelectedId(id);
  };
  const deleteEduBookmark = async (id: number) => {
    try {
      await deleteEducationBookmarkApi(id, 'EDU_CONTENT');
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error fetching deleteEduBookmark:', error);
    }
  };

  const deleteNewsBookmark = async (id: number) => {
    try {
      await deleteEducationBookmarkApi(id, 'NEWS_CONTENT');
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error fetching NewsBookmark:', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getEducationBookmarkApi();
      setEdu(data?.eduContentBookmarks);
      setNews(data?.newsContentBookmarks);
      console.log(edu);
      console.log(news);
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
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='금융 교육' count={edu ? edu.length : 0}>
          {edu?.map((i, index) => (
            <ul key={index}>
              {showModal && (
                <CommonModal
                  desText={'즐겨찾기를 삭제하시겠습니까?'}
                  yesText={'예'}
                  noText={'아니오'}
                  yesClickFn={() => {
                    if (selectedId !== null) {
                      deleteEduBookmark(selectedId);
                    }
                  }}
                  closeFn={() => {
                    setShowModal(false);
                  }}
                />
              )}
              <PolicyItem
                key={index}
                img={''}
                name={i.title}
                description={i.content}
                like={i.isLiked}
                id={i.educationInfoId}
                link={`/educations`}
                onClick={() => onEduHeartClick(i.educationInfoId)}
                isEditor={true}
              />
            </ul>
          ))}
        </Accordian>
      </ul>
      <ul>
        <Accordian title='금융 뉴스' count={news ? news.length : 0}>
          {news?.map((i, index) => (
            <ul key={index}>
              {showModal && (
                <CommonModal
                  desText={'즐겨찾기를 삭제하시겠습니까?'}
                  yesText={'예'}
                  noText={'아니오'}
                  yesClickFn={() => {
                    if (selectedId !== null) {
                      deleteNewsBookmark(selectedId);
                    }
                  }}
                  closeFn={() => {
                    setShowModal(false);
                  }}
                />
              )}
              <PolicyItem
                key={index}
                img={''}
                name={i.title}
                description={i.content}
                like={i.isLiked}
                id={i.newsContentId}
                link={`/news`}
                onClick={() => onEduHeartClick(i.newsContentId)}
                isEditor={true}
              />
            </ul>
          ))}
        </Accordian>{' '}
      </ul>
    </div>
  );
};

export default Educations;
