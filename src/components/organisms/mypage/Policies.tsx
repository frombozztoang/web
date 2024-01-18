'use client';
import { deletePolicyBookmarkApi } from '@/api/bookmarkApi';
import { getPolicyBookmarkApi } from '@/api/mypageApi';

import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import { TPoliciesBookmark, TPoliciesBookmarkApiResponse } from '@/types/mypageTypes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CommonModal from '../modal/commonModal';

const Policies = () => {
  const [policyBookmarks, setPolicyBookmarks] = useState<TPoliciesBookmark[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const onHeartClick = (id: number) => {
    setShowModal(true);
    setSelectedId(id);
  };
  const deletePolicyBookmark = async (id: number) => {
    try {
      await deletePolicyBookmarkApi(id);
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error fetching deletePolicyBookmark:', error);
    }
  };
  const fetchData = async () => {
    try {
      const data = (await getPolicyBookmarkApi()) as TPoliciesBookmarkApiResponse;
      if (data) {
        setPolicyBookmarks(data.data);
      }
    } catch (error) {
      console.error('Error fetching Policies:', error);
    }
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {showModal && (
        <CommonModal
          desText={'즐겨찾기를 삭제하시겠습니까?'}
          yesText={'예'}
          noText={'아니오'}
          yesClickFn={() => {
            if (selectedId !== null) {
              deletePolicyBookmark(selectedId);
            }
          }}
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <h1 className='label-medium text-typoSecondary mb-10'>전체 {policyBookmarks?.length || 0}</h1>
      {policyBookmarks?.map((i, index) => (
        <PolicyItem
          key={index}
          name={i.contentName}
          description={i.content}
          like={i.isLiked}
          id={i.policyInfoId}
          link={'/policies'}
          img={''}
          onClick={() => onHeartClick(i.policyInfoId)}
        />
      ))}
    </div>
  );
};

export default Policies;
