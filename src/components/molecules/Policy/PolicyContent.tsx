type TPolicyProps = {
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

const PolicyContent: React.FC<TPolicyProps> = ({
  sporCn,
  bizPrdCn,
  rqutPrdCn,
  sporScvl,
  ageInfo,
  prcpCn,
  accrRqisCn,
  majrRquisCn,
  empmSttsCn,
  spizRlmRqisCn,
  aditRscn,
  prcpLmttTrgtCn,
  rqutProcCn,
  jdgnPresCn,
  rqutUrla,
  pstnPaprCn,
}) => {
  const POLICY_DATA1 = [
    { title: '지원 내용', content: sporCn },
    { title: '운영 기간', content: bizPrdCn },
    { title: '신청 기간', content: rqutPrdCn },
    { title: '지원 규모', content: sporScvl },
  ];

  const POLICY_DATA2 = [
    { title: '연령', content: ageInfo },
    { title: '거주지 및 소득', content: prcpCn },
    { title: '학력', content: accrRqisCn },
    { title: '전공', content: majrRquisCn },
    { title: '취업 상태', content: empmSttsCn },
    { title: '특화 분야', content: spizRlmRqisCn },
    { title: '추가 단서 사항', content: aditRscn },
    { title: '참여 제한 대상', content: prcpLmttTrgtCn },
  ];

  const POLICY_DATA3 = [
    { title: '신청 절차', content: rqutProcCn },
    { title: '심사 및 발표', content: jdgnPresCn },
    { title: '신청 사이트', content: rqutUrla },
    { title: '제출 서류', content: pstnPaprCn },
  ];

  return (
    <div className='w-342 tablet:w-438 desktop:w-855 p-17 tablet:p-22 desktop:p-44 border border-border01 rounded-4 tablet:rounded-5 desktop:rounded-10 desktop:border-2 dark:bg-[#383838] dark:border-[#383838]'>
      <h1 className='heading-small tablet:heading-medium desktop:heading-xl text-typoPrimary dark:text-dark-typoPrimary'>
        정책 요약
      </h1>
      <hr className='border-border02 mt-4 tablet:mt-5 desktop:mt-10' />
      {POLICY_DATA1.map((item, index) => {
        return (
          <div className='mt-10 flex' key={index}>
            <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium desktop:w-100 text-typoSecondary flex-shrink-0'>
              {item.title}
            </div>
            <div className='ml-19 tablet:ml-24 desktop:ml-20 paragraph-small tablet:paragraph-medium desktop:paragraph-medium text-typoPrimary whitespace-pre-line dark:text-dark-typoPrimary'>
              {item.content}
            </div>
          </div>
        );
      })}
      <h1 className='mt-25 tablet:mt-32 desktop:mt-63 heading-small tablet:heading-medium desktop:heading-xl text-typoPrimary dark:text-dark-typoPrimary'>
        신청 자격
      </h1>
      <hr className='border-border02 mt-4 tablet:mt-5 desktop:mt-10' />
      {POLICY_DATA2.map((item, index) => {
        return (
          <div className='mt-10 flex' key={index}>
            <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium w-77 tablet:w-105 desktop:w-100 text-typoSecondary flex-shrink-0'>
              {item.title}
            </div>
            <div className='desktop:ml-20 paragraph-small tablet:paragraph-medium desktop:paragraph-medium text-typoPrimary whitespace-pre-line dark:text-dark-typoPrimary'>
              {item.content}
            </div>
          </div>
        );
      })}
      <h1 className='mt-25 tablet:mt-32 desktop:mt-63 heading-small tablet:heading-medium desktop:heading-xl text-typoPrimary dark:text-dark-typoPrimary'>
        신청 방법
      </h1>
      <hr className='border-border02 mt-4 tablet:mt-5 desktop:mt-10' />
      {POLICY_DATA3.map((item, index) => {
        return (
          <div className='mt-10 flex' key={index}>
            <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium w-66 tablet:w-90 desktop:w-100 text-typoSecondary flex-shrink-0'>
              {item.title}
            </div>
            <div className='desktop:ml-20 paragraph-small tablet:paragraph-medium desktop:paragraph-medium text-typoPrimary whitespace-pre-line overflow-auto scrollbar-hide dark:text-dark-typoPrimary'>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PolicyContent;
