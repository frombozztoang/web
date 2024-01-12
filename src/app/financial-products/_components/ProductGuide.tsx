import React from 'react';

type TProductGuideProps = {
  savingTerms: number[];
  maxLimit: null | number;
  joinMember: string;
  etcNote: string;
};

const ProductGuide: React.FC<TProductGuideProps> = ({ savingTerms, maxLimit, joinMember, etcNote }) => {
  return (
    <div>
      <h1 className='heading-small mb-4 text-typoPrimary dark:text-dark-typoPrimary tablet:heading-medium tablet:mb-5 desktop:mb-10 desktop:heading-large'>
        상품 안내
      </h1>
      <table className='w-310 table-auto border-t-1 border-b-1 border-typoSecondary tablet:w-397 desktop:w-776'>
        <tbody>
          <tr className='border-b-1 border-border04 dark:border-dark-border04'>
            <th className='paragraph-small w-49 py-3 text-typoSecondary bg-border00 dark:bg-dark-border00 tablet:paragraph-medium tablet:w-63 tablet:py-4 desktop:w-140 desktop:py-7 desktop:label-small'>
              기간
            </th>
            <td className='paragraph-small py-3 px-10 border-l-1 border-typoSecondary text-typoSecondary tablet:paragraph-medium tablet:px-10 tablet:py-4 desktop:py-7 desktop:px-24 desktop:label-small'>
              {savingTerms.map((data, index) => {
                return (
                  <span key={index}>
                    {data}년 {index !== savingTerms.length - 1 ? '/ ' : ''}
                  </span>
                );
              })}
            </td>
          </tr>
          <tr className='border-b-1 border-border04 dark:border-dark-border04'>
            <th className='paragraph-small py-3 text-typoSecondary bg-border00 dark:bg-dark-border00 tablet:paragraph-medium tablet:py-4 desktop:py-7 desktop:label-small'>
              금액
            </th>
            <td className='paragraph-small py-3 px-10 border-l-1 border-typoSecondary text-typoSecondary tablet:paragraph-medium tablet:px-10 tablet:py-4 desktop:py-7 desktop:label-small desktop:px-24'>
              {maxLimit === null ? '' : '최대 ' + maxLimit + '원'}
            </td>
          </tr>
          <tr className='border-b-1 border-border04 dark:border-dark-border04'>
            <th className='paragraph-small py-3 text-typoSecondary bg-border00 dark:bg-dark-border00 tablet:paragraph-medium tablet:py-4 desktop:py-7 desktop:label-small'>
              대상
            </th>
            <td className='paragraph-small py-3 px-10 border-l-1 border-typoSecondary text-typoSecondary tablet:paragraph-medium tablet:px-10 tablet:py-4 desktop:py-7 desktop:label-small desktop:px-24'>
              {joinMember}
            </td>
          </tr>
          <tr>
            <th className='paragraph-small py-3 text-typoSecondary bg-border00 dark:bg-dark-border00 tablet:paragraph-medium tablet:py-4 desktop:py-7 desktop:label-small'>
              유의사항
            </th>
            <td className='paragraph-small py-3 px-10 border-l-1 border-typoSecondary text-typoSecondary tablet:paragraph-medium tablet:px-10 tablet:py-4 desktop:py-7 desktop:label-small desktop:px-24'>
              {etcNote}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductGuide;
