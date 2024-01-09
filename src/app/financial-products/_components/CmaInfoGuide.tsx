import React from 'react';
import DefaultBtn from '@/components/atom/button/DefaultBtn';

type TCmaInfoGuideProps = {
  data: string[];
};

const CmaInfoGuide: React.FC<TCmaInfoGuideProps> = ({ data }) => {
  const DUMMY_DATA1 = [
    { title: '수익률', content: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능' },
    { title: '특징', content: '비대면가입, 체크카드발급, 수수료혜택' },
    { title: '가입방법', content: '영업점, 홈페이지, 어플' },
    { title: '예금자보호', content: '대상 아님' },
  ];

  const DUMMY_DATA2 = [
    { title: '혜택명', content: '이체, CD기 수수료 면제' },
    { title: '대상계좌', content: '은행 연결계좌가 없는 계좌 (당사 종합카드 하단에 은행 입금 번호가 없는 계좌)' },
    {
      title: '충족조건 (조건 1충족시)',
      content:
        '1. 총 자산의 평잔이 1,000만원 이상(전전월기준)\n2. 최근 6개월간의 수수료 합산금액이 5만원 이상(전전월 기준)\n3. 전월 CMA전용상품에서 당사 적립식 또는 임의식계좌로 월 10만원 이상 자동이체 또는 전월 타기관에서 당사 CMA전용상품으로 월 10만원 이상 CMS입금을 할 경우',
    },
  ];

  const DUMMY_DATA3 = [
    { title: '혜택명', content: '온라인 타행송금 수수료 면제' },
    {
      title: '수수료 면제 기준 (조건 1충족시)',
      content:
        '1. 총 자산의 평잔이 1,000만원 이상(전전월기준)\n2. 최근 6개월간의 수수료 합산금액이 5만원 이상(전전월 기준)\n3. 전월 CMA전용상품에서 당사 적립식 또는 임의식계좌로 월 10만원 이상 자동이체 또는 전월 타기관에서 당사 CMA전용상품으로 월 10만원 이상 CMS입금을 할 경우\n자세한 상황은 홈페이지 참고 바랍니다.',
    },
  ];

  return (
    <div>
      <h1 className='heading-small tablet:heading-xl desktop:heading-xl text-typoPrimary'>주요 특징</h1>
      <hr className='border-1/2 my-4 w-310 tablet:w-715 tablet:my-9 tablet:border desktop:border border-border01 desktop:w-766 desktop:my-10' />
      <div className='mb-20 w-310 tablet:mb-46 tablet:w-715 desktop:w-776 desktop:mb-63'>
        {DUMMY_DATA1.map((item, index) => {
          return (
            <div key={index} className='flex flex-col desktop:flex-row'>
              <div className='paragraph-small pb-2 text-typoSecondary text-left align-top tablet:paragraph-xl tablet:pb-4 desktop:min-w-94 desktop:max-w-94 desktop:pb-10 desktop:paragraph-medium'>
                {item.title}
              </div>
              <div className='paragraph-small mb-6 text-typoPrimary tablet:mb-13 tablet:paragraph-xl desktop:px-25 desktop:paragraph-medium'>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className='heading-small tablet:heading-xl desktop:heading-xl text-typoPrimary'>수수료 혜택 안내</h1>
      <hr className='border-1/2 my-4 w-310 tablet:w-715 tablet:my-9 tablet:border desktop:border border-border01 desktop:w-766 desktop:my-10' />
      <div className='mb-20 w-310 tablet:mb-46 tablet:w-715 desktop:w-776 desktop:mb-63'>
        {DUMMY_DATA2.map((item, index) => {
          return (
            <div key={index} className='flex flex-col desktop:flex-row'>
              <div className='paragraph-small pb-2 text-typoSecondary text-left align-top tablet:paragraph-xl tablet:pb-4 desktop:min-w-94 desktop:max-w-94 desktop:pb-10 desktop:paragraph-medium break-keep'>
                {item.title}
              </div>
              <div className='paragraph-small mb-6 text-typoPrimary tablet:mb-13 tablet:paragraph-xl desktop:px-25 desktop:paragraph-medium'>
                {item.content.split('\n').map((line, index) => (
                  <div key={index} className='mb-4 tablet:mb-9 desktop:mb-10'>
                    {line}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <hr className='border-1/2 my-4 w-310 tablet:w-715 tablet:my-9 tablet:border desktop:border border-border01 desktop:w-766 desktop:my-10' />
      <div className='mb-20 w-310 tablet:mb-58 tablet:w-715 desktop:w-776 desktop:mb-63'>
        {DUMMY_DATA3.map((item, index) => {
          return (
            <div key={index} className='flex flex-col desktop:flex-row'>
              <div className='paragraph-small pb-2 text-typoSecondary text-left align-top tablet:paragraph-xl tablet:pb-4 desktop:min-w-94 desktop:max-w-94 desktop:pb-10 desktop:paragraph-medium break-keep'>
                {item.title}
              </div>
              <div className='paragraph-small mb-6 text-typoPrimary tablet:mb-13 tablet:paragraph-xl desktop:px-25 desktop:paragraph-medium'>
                {item.content.split('\n').map((line, index) => (
                  <div key={index} className='mb-4 tablet:mb-9 desktop:mb-10'>
                    {line}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <DefaultBtn />
      </div>
    </div>
  );
};

export default CmaInfoGuide;
