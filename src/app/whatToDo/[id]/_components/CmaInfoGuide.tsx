import DefaultBtn from '@/components/atom/button/DefaultBtn';
import React from 'react';

type TCmaInfoGuideProps = {
  size: 'Large' | 'Small';
  data: string[];
};

const CmaInfoGuide: React.FC<TCmaInfoGuideProps> = ({ data, size }) => {
  const data1 = [
    { title: '수익률', content: '연 3.15% (12개월, 세전) 기준일에 따라 수익률 변동 가능' },
    { title: '특징', content: '비대면가입, 체크카드발급, 수수료혜택' },
    { title: '가입방법', content: '영업점, 홈페이지, 어플' },
    { title: '예금자보호', content: '대상 아님' },
  ];

  const data2 = [
    { title: '혜택명', content: '이체, CD기 수수료 면제' },
    { title: '대상계좌', content: '은행 연결계좌가 없는 계좌 (당사 종합카드 하단에 은행 입금 번호가 없는 계좌)' },
    {
      title: '충족조건 (조건 1충족시)',
      content:
        '1. 총 자산의 평잔이 1,000만원 이상(전전월기준)\n2. 최근 6개월간의 수수료 합산금액이 5만원 이상(전전월 기준)\n3. 전월 CMA전용상품에서 당사 적립식 또는 임의식계좌로 월 10만원 이상 자동이체 또는 전월 타기관에서 당사 CMA전용상품으로 월 10만원 이상 CMS입금을 할 경우',
    },
  ];

  const data3 = [
    { title: '혜택명', content: '온라인 타행송금 수수료 면제' },
    {
      title: '수수료 면제 기준 (조건 1충족시)',
      content:
        '1. 총 자산의 평잔이 1,000만원 이상(전전월기준)\n2. 최근 6개월간의 수수료 합산금액이 5만원 이상(전전월 기준)\n3. 전월 CMA전용상품에서 당사 적립식 또는 임의식계좌로 월 10만원 이상 자동이체 또는 전월 타기관에서 당사 CMA전용상품으로 월 10만원 이상 CMS입금을 할 경우\n자세한 상황은 홈페이지 참고 바랍니다.',
    },
  ];

  return size === 'Large' ? (
    <div>
      <h1 className='heading-xl text-typoPrimary'>주요 특징</h1>
      <hr className='w-766 border-1 border-border02 my-10' />
      <table className='table-auto w-776 mb-63'>
        {data1.map((item, index) => {
          return (
            <tr key={index}>
              <th className='pb-10 text-left align-top w-94 paragraph-medium text-typoSecondary'>{item.title}</th>
              <td className='px-25 paragraph-medium text-typoPrimary'>{item.content}</td>
            </tr>
          );
        })}
      </table>
      <h1 className='heading-xl text-typoPrimary'>수수료 혜택 안내</h1>
      <hr className='w-766 border-1 border-border02 my-10' />
      <table className='table-auto w-776 mb-63'>
        {data2.map((item, index) => {
          return (
            <tr key={index}>
              <th className='pb-10 text-left align-top w-94 paragraph-medium text-typoSecondary break-keep'>
                {item.title}
              </th>
              <td className='px-25 paragraph-medium text-typoPrimary'>
                {item.content.split('\n').map((line, index) => (
                  <div key={index} className='mb-10'>
                    {line}
                    <br />
                  </div>
                ))}
              </td>
            </tr>
          );
        })}
      </table>
      <hr className='w-766 border-1 border-border02 my-10' />
      <table className='table-auto w-776 mb-63'>
        {data3.map((item, index) => {
          return (
            <tr key={index}>
              <th className='pb-10 text-left align-top w-94 paragraph-medium text-typoSecondary break-keep'>
                {item.title}
              </th>
              <td className='px-25 paragraph-medium text-typoPrimary'>
                {item.content.split('\n').map((line, index) => (
                  <div key={index} className='mb-10'>
                    {line}
                    <br />
                  </div>
                ))}
              </td>
            </tr>
          );
        })}
      </table>
      <div className='flex justify-center'>
        <DefaultBtn />
      </div>
    </div>
  ) : (
    <div>Small</div>
  );
};

export default CmaInfoGuide;
