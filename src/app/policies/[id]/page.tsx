'use client';

import PolicyHeadLine from '@/components/molecules/Policy/PolicyHeadLine';
import PolicyContent from '@/components/molecules/Policy/PolicyContent';
import { useSearchParams } from 'next/navigation';
const Policy = () => {
  const policy = {
    id: 0,
    title: '청년내일저축계좌',
    content:
      '저소득청년에 저축을 통한 자산형성을 지원하여 청년이 교육, 주거, 창업 등 미래에 투자하고, 위기에 대비할 수 있도록 지원',
    policyContents:
      '매월 본인 저축 납입자에 한하여 본인저축액 10만원 이상(매월 전월 23일 ~ 현월 22일 입금마감일 이전) 대비 정부지원금을 정액 매칭합니다.중위소득 50%초과~100%이하 : 10만원 정액 매칭중위소득 50%이하 : 30만원 정액 매칭3년간 통장유지, 근로활동 지속, 교육이수, 자금사용계획서 제출시 적립금 전액을 지급합니다.정책대상자별 추가지원금(근로소득공제금(생계급여 수급 청년), 탈수급장려금, 내일키움장려금, 내일키움수익금 등) 지급이 아능합니다.',
    operatingPeriod: '운영기간',
    applicationPeriod: '신2023년 05월 01일 ~ 2023년 05월 26일',
    supportscale: '지원규모',
    age: '만 19세 ~ 34세',
    residenceAndIncome:
      '(가입연령) 신청 당시 만 19~34세 (단, 수급자/차상위자는 만 15~39세까지 허용)(근로‧사업소득) 현재 근로활동중이며, 근로‧사업소득이 월 50만 원 초과～220만 원 이하*단, 기초생활수급자‧차상위계층‧기준중위소득 50%이하자는 현재 근로활동중이며 근로, 사업소득이 월 10만원 이상 발생(가구소득) 기준 중위소득 100퍼센트 이하(재산) 대도시 3.5억 원, 중소도시 2억 원, 농어촌 1.7억 원 이하',
    academicAbillity: '제한없음',
    major: '제한없음',
    employmentStatus: '근로/사업소득 월 50만 원 초과~220만 원 이하',
    specializedFiedl: '제한없음',
    additionalClues: '사업설명회 : 23.6.13.온라인 Zoom 활용신청기한 : 23.6.1.~23.6.9.',
    restiricitionsOnParticipation: '참여요건 미충족자',
    procedures:
      '복지로(www.bokjiro.go.kr)를 통해서 신청 가능방문 신청이 필요한 경우에는 거주지 읍면동 주민센터에서 신청 가능',
    audit: '대상자 선정 결과는 청년 본인 및 동일가구원 소득․재산 조사 등을 실시하여 안내할 예정',
    site: 'https://www.bokjiro.go.kr',
    document: '제출 서류',
  };
  const serchParams = useSearchParams();
  const id = serchParams.get('id');
  return (
    <div className='w-auto h-full flex flex-col items-center justify-center'>
      <div>
        <PolicyHeadLine title={policy.title} content={policy.content} />
      </div>
      <div>
        <PolicyContent
          policyContents={policy.policyContents}
          operatingPeriod={policy.operatingPeriod}
          applicationPeriod={policy.applicationPeriod}
          supportscale={policy.supportscale}
          age={policy.age}
          residenceAndIncome={policy.residenceAndIncome}
          academicAbillity={policy.academicAbillity}
          major={policy.major}
          employmentStatus={policy.employmentStatus}
          specializedFiedl={policy.specializedFiedl}
          additionalClues={policy.additionalClues}
          restiricitionsOnParticipation={policy.residenceAndIncome}
          procedures={policy.procedures}
          audit={policy.audit}
          site={policy.site}
          document={policy.document}
        />
      </div>
      <p className='desktop:block hidden text-center w-500 whitespace-normal  mb-200'>
        해당 내용은 온통청년(https://www.youthcenter.go.kr/) 에서 가져왔습니다. 자세한 정보는 신청 사이트를
        참고해주세요.
      </p>
    </div>
  );
};

export default Policy;
// 디자인 만든거
