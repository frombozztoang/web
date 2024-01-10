'use client';

import EducationHeadLine from '@/components/molecules/Education/EducationHeadLine';
import EducationContent from '@/components/molecules/Education/EducationContent';
import { useState } from 'react';
const Education = () => {
  const education = {
    title: '자유 입출금 통장 알찬사용법',
    content:
      '자유 입출금 통장 이름 그대로 돈을 자유롭게 입금하고 출금할 수 있는 통장 자유 입출금 통장의 금리 은행마다 차이는 있지만 대부분 연 0.1%로 거의 미미한 수준이지. 물론 파킹 통장 형식의 입출금 통장의 경우 금리를 더 높게 주기도 해!토리야! 그럼 왜 이렇게 금리가 낮은거야?그건 바로 기간의 정함이 없기 때문이야! 은행은 예금고객 돈으로 대출고객에게 돈을 빌려주면서 이익을 벌고 있어 이런 이익을 예대마진이라고 해. 예대마진은 예금자의 돈이 있어야 가능한데 예금자가 갑자기 돈을 인출한다면 은행에서는 문제가 있을 수 있어. 그래서 예금 잔액의 변동 폭이 큰 자유입출금 통장에는 작은 금리를 부여하기도 해.자유 입출금 통장에서의 특별한 혜택자유입출금통장으로 급여를 받거나 공과금등을 결제하면 이체 수수료 면제등의 혜택이나일부 은행의 경우에는 적금 금리우대나 급여 이체시 추가 포인트(금액), 은행자체 고객등급점수 상향 등의 다양한 혜택을 받을 수 있어!추가로 일부 은행에서는 신규로 계좌개설을 한 고객에게 다양한 경품이나 현금을 지급하기도 해.',
  };
  return (
    <div className='w-auto h-full flex items-center justify-center'>
      <div className='flex-col flex'>
        <div>
          <EducationHeadLine title={education.title} />
        </div>
        <div>
          <EducationContent content={education.content} />
        </div>
      </div>
    </div>
  );
};

export default Education;
// 디자인 만든거
