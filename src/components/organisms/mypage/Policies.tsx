'use client';
import { getPolicyBookmarkApi } from '@/api/mypageApi';
import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import { TPoliciesBookmark, TPoliciesBookmarkApiResponse } from '@/types/mypageTypes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Policies = () => {
  const [policyBookmarks, setPolicyBookmarks] = useState<TPoliciesBookmark[]>();
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
    console.log('잉', policyBookmarks);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className='label-medium text-typoSecondary mb-10'>전체 {policyBookmarks?.length || 0}</h1>
      {policyBookmarks?.map((i, index) => (
        <Link key={index} href={`/policies/${i.policyInfoId}`}>
          <PolicyItem img={''} name={i.contentName} description={i.content} like={true} id={0} link={''} />
        </Link>
      ))}
    </div>
  );
};

export default Policies;
