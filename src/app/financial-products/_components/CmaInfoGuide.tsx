import React from 'react';
import DefaultBtn from '@/components/atom/button/DefaultBtn';
import { cls } from '@/utils/cls';

type TCmaInfoGuideProps = {
  bankHomepageUrl: string;
  maturityInterestRate: string;
  specialCondition: string;
  joinWay: string;
  depositProtection: string;
  etcNote: string;
};

const CmaInfoGuide: React.FC<TCmaInfoGuideProps> = ({
  bankHomepageUrl,
  maturityInterestRate,
  specialCondition,
  joinWay,
  depositProtection,
  etcNote,
}) => {
  const DUMMY_DATA1 = [
    { title: '수익률', content: '연 ' + maturityInterestRate + '%  (12개월, 세전) 기준일에 따라 수익률 변동 가능' },
    { title: '특징', content: specialCondition },
    { title: '가입방법', content: joinWay },
    { title: '예금자보호', content: depositProtection },
  ];

  return (
    <div>
      <h1 className='heading-small tablet:heading-medium desktop:heading-xl text-typoPrimary dark:text-dark-typoPrimary'>
        주요 특징
      </h1>
      <hr className='my-4 w-310 tablet:w-397 tablet:my-5 border-border01 dark:border-dark-border02 desktop:w-766 desktop:my-10' />
      <div className='mb-20 w-310 tablet:mb-25 tablet:w-397 desktop:w-776 desktop:mb-63'>
        {DUMMY_DATA1.map((item, index) => {
          return (
            <div key={index} className='flex flex-col desktop:flex-row'>
              <div className='paragraph-small pb-2 text-typoSecondary text-left align-top tablet:paragraph-medium tablet:pb-4 desktop:min-w-94 desktop:max-w-94 desktop:pb-10 desktop:paragraph-medium'>
                {item.title}
              </div>
              <div className='paragraph-small mb-6 text-typoPrimary dark:text-dark-typoPrimary tablet:mb-7 tablet:paragraph-medium desktop:px-25 desktop:paragraph-medium'>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className='heading-small tablet:heading-medium desktop:heading-xl text-typoPrimary dark:text-dark-typoPrimary'>
        수수료 혜택 안내
      </h1>
      <hr className='my-4 w-310 tablet:w-397 tablet:my-5 border-border01 dark:border-dark-border02 desktop:w-766 desktop:my-10' />
      <div className='mb-25 w-310 tablet:mb-32 tablet:w-397 desktop:w-776 desktop:mb-63'>
        {etcNote !== 'null' &&
          etcNote.split('\r\n').map((item, index) => {
            let MARGIN = 'mb-6 tablet:mb-7 desktop:mb-10';

            if (item === '') {
              MARGIN = 'mb-24 tablet:mb-25 desktop:mb-50';
            }

            return (
              <div key={index} className='flex'>
                <div
                  className={cls(
                    'paragraph-small text-typoPrimary dark:text-dark-typoPrimary tablet:paragraph-medium desktop:paragraph-medium',
                    MARGIN,
                  )}
                >
                  {item}
                </div>
              </div>
            );
          })}
        <div>자세한 내용은 홈페이지 참고 바랍니다.</div>
      </div>
      <div className='flex justify-center'>
        <DefaultBtn onClick={() => window.open(bankHomepageUrl)} />
      </div>
    </div>
  );
};

export default CmaInfoGuide;
