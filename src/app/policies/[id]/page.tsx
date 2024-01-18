'use client';

import PolicyHeadLine from '@/components/molecules/Policy/PolicyHeadLine';
import PolicyContent from '@/components/molecules/Policy/PolicyContent';
import { useEffect, useState } from 'react';
import { getPolicydetailApi } from '@/api/policyApi';
import { postPolicyBookmarkApi, deletePolicyBookmarkApi } from '@/api/bookmarkApi';
import { TPolicy } from '@/types/policyTypes';
import WithLoginModal from '@/components/templates/login/WithLoginModal';

const Policy = ({ params }: { params: { id: number } }) => {
  const [policyInfo, setpoliyInfo] = useState<TPolicy | undefined>();
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const policyDetailFetchData = async () => {
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
    policyDetailFetchData();
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
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='flex flex-col items-center desktop:-mt-70'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      {policyInfo && (
        <>
          <div>
            {policyInfo && (
              <PolicyHeadLine
                polyBizSjNm={policyInfo.polyBizSjNm}
                polyItcnCn={policyInfo.polyItcnCn}
                isLiked={isLiked}
                onHeartClick={() => onHeartClick(params.id, isLiked)}
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
          <p className='paragraph-xs mt-25 tablet:paragraph-sm tablet:mt-32 desktop:paragraph-medium desktop:mt-35 text-center dark:text-dark-typoPrimary'>
            해당 내용은 온통청년(https://www.youthcenter.go.kr/) 에서 가져왔습니다.
            <br />
            자세한 정보는 신청 사이트를 참고해주세요.
          </p>
        </>
      )}
    </div>
  );
};

export default Policy;
