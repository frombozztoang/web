'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
type TPolicy = {
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
const PolicyContent: React.FC<TPolicy> = ({
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
  return (
    <div className='w-342 desktop:w-[855px] tablet:w-[438px]'>
      <div className='mb-39 tablet:mb-59'>
        <div className='border-2 border-border01 rounded pt-80 text w-full dark:bg-[#383838] dark:border-[#383838]'>
          <div className='p-15 mt-[-70px] '>
            <div className='desktop:heading-xl desktop:w-[767px] heading-small tablet:w-[393px] tablet:heading-medium w-307 font-bold border-b-[2px] mb-10 text-typoPrimary border-color-border02 dark:text-[#D6D6D6]'>
              정책 요약
            </div>
            <div className='flex pb-10 '>
              <div className='paragraph-small tablet:paragraph-medium w-75 tablet:w-85 desktop:paragraph-medium desktop:w-[70px] text-typoSecondary'>
                지원 내용
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium tablet:mx-10 marker:text-typoPrimary mr-20 whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {sporCn}
              </div>
            </div>

            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium w-75 tablet:w-85 desktop:paragraph-medium desktop:w-[70px] text-typoSecondary'>
                운영 기간
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium tablet:mx-10 marker:text-typoPrimary mr-20 whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {bizPrdCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium w-75 tablet:w-85 desktop:paragraph-medium desktop:w-[70px] text-typoSecondary'>
                신청 기간
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium tablet:mx-10 marker:text-typoPrimary mr-20 whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {rqutPrdCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium w-75 tablet:w-85 desktop:paragraph-medium desktop:w-[70px] text-typoSecondary'>
                지원 규모
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium tablet:mx-10 marker:text-typoPrimary mr-20 whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {sporScvl}
              </div>
            </div>
          </div>
          <div className='p-15 my-10 '>
            <div className='desktop:heading-xl desktop:w-[767px] heading-small tablet:w-[393px] tablet:heading-medium w-307 font-bold border-b-[2px] mb-10 text-typoPrimary border-color-border02 dark:text-[#D6D6D6]'>
              신청 자격
            </div>
            <div className='flex pb-10 '>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                연령
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {ageInfo}
              </div>
            </div>

            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                거주지 및 소득
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {prcpCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                학력
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {accrRqisCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                전공
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {majrRquisCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                취업 상태
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {empmSttsCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                특화 분야
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {spizRlmRqisCn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                추가 단서 사항
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {aditRscn}
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium tablet:w-130 desktop:paragraph-medium  w-[110px]  desktop:w-[100px] text-typoSecondary'>
                참여 제한 대상
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {prcpLmttTrgtCn}
              </div>
            </div>
          </div>
          <div className='p-15 '>
            <div className='desktop:heading-xl desktop:w-[767px] heading-small tablet:w-[393px] tablet:heading-medium w-307 font-bold border-b-[2px] mb-10 text-typoPrimary border-color-border02 dark:text-[#D6D6D6]'>
              신청 방법
            </div>
            <div className='flex pt-10'>
              <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium  w-[110px]  desktop:w-[90px] text-typoSecondary '>
                신청 절차
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {rqutProcCn}
              </div>
            </div>

            <div className='flex py-10'>
              <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium  w-[110px]  desktop:w-[90px] text-typoSecondary'>
                심사 및 발표
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {jdgnPresCn}
              </div>
            </div>
            <div className='flex py-10'>
              <div className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium  w-[110px]  desktop:w-[90px] text-typoSecondary'>
                신청 사이트
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                <Link href={rqutUrla}>{rqutUrla}</Link>
              </div>
            </div>
            <div className='flex  py-10'>
              <div className='paragraph-small tablet:paragraph-medium desktop:paragraph-medium  w-[110px]  desktop:w-[90px] text-typoSecondary'>
                제출 서류
              </div>
              <div
                className='paragraph-small tablet:paragraph-medium  desktop:paragraph-medium tablet:mx-20 marker:text-typoPrimary mr-20  whitespace-pre-line text-justify dark:text-[#D6D6D6]'
                style={{ width: '90%' }}
              >
                {pstnPaprCn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyContent;
