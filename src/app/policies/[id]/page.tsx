'use client';

import PolicyHeadLine from '@/components/molecules/Policy/PolicyHeadLine';
import PolicyContent from '@/components/molecules/Policy/PolicyContent';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPolicydetailApi } from '@/api/policylistapi/policydetail';
import { deletePolicyBookmarkApi, postPolicyBookmarkApi } from '@/api/policylistapi/policylistapi';
export type TPolicy = {
  isLiked: boolean;
  polyBizSjNm: string;
  polyItcnCn: string;
  sporCn: string;
  bizPrdCn: string;
  rqutPrdCn: string;
  sporScvl: string;
  ageInfo: string;
  prcpCn: string;
  accrRqisCn: string;
  majrRquisCn: string;
  empmSttsCn: string;
  spizRlmRqisCn: string;
  aditRscn: string;
  prcpLmttTrgtCn: string;
  rqutProcCn: string;
  jdgnPresCn: string;
  rqutUrla: string;
  pstnPaprCn: string;
};
const Policy = ({ params }: { params: { id: number } }) => {
  const [policyInfo, setpoliyInfo] = useState<TPolicy | undefined>();
  const [isLiked, setIsLiked] = useState(false);
  const fetchData = async () => {
    try {
      const data = await getPolicydetailApi(params.id);
      if (data) {
        setpoliyInfo(data);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error fetching depositsFetchData:', error);
    }
  };
  useEffect(() => {
    console.log('useEffect is running');
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      let apiResult;
      if (isLiked) {
        apiResult = await deletePolicyBookmarkApi(id);
      } else {
        apiResult = await postPolicyBookmarkApi(id);
      }
      if (apiResult !== undefined) {
        setIsLiked(!isLiked);
      } else {
        console.log('로그인 해주세요');
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };
  console.log(params.id);
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center desktop:mt-[-70px]'>
      <div>
        {policyInfo && (
          <PolicyHeadLine
            polyBizSjNm={policyInfo.polyBizSjNm}
            polyItcnCn={policyInfo.polyItcnCn}
            isLiked={isLiked}
            onHeartClick={() => onHeartClick(params.id, policyInfo.isLiked)}
          />
        )}
      </div>
      <div>
        {policyInfo && (
          <PolicyContent
            sporCn={policyInfo.sporCn}
            bizPrdCn={policyInfo.bizPrdCn}
            rqutPrdCn={policyInfo.rqutPrdCn}
            sporScvl={policyInfo.sporScvl}
            ageInfo={policyInfo.ageInfo}
            prcpCn={policyInfo.prcpCn}
            accrRqisCn={policyInfo.accrRqisCn}
            majrRquisCn={policyInfo.majrRquisCn}
            empmSttsCn={policyInfo.empmSttsCn}
            spizRlmRqisCn={policyInfo.spizRlmRqisCn}
            aditRscn={policyInfo.aditRscn}
            prcpLmttTrgtCn={policyInfo.prcpLmttTrgtCn}
            rqutProcCn={policyInfo.rqutProcCn}
            jdgnPresCn={policyInfo.jdgnPresCn}
            rqutUrla={policyInfo.rqutUrla}
            pstnPaprCn={policyInfo.pstnPaprCn}
          />
        )}
      </div>
      <p className='paragraph-small mb-39 w-380 tablet:mb-56 tablet:-mt-25 tablet:text-15 tablet:w-470 desktop:block desktop:paragraph-medium text-center desktop:w-500 whitespace-normal  desktop:mb-200 dark:text-[#D6D6D6]'>
        해당 내용은 온통청년(https://www.youthcenter.go.kr/) 에서 가져왔습니다. 자세한 정보는 신청 사이트를
        참고해주세요.
      </p>
    </div>
  );
};

export default Policy;
