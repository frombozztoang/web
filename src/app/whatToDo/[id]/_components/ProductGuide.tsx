import React from 'react';

type TProductGuideProps = {
  size: 'Large' | 'Small';
  savingTerms: number[];
  maxLimit: null | number;
  joinMember: string;
  etcNote: string;
};

const ProductGuide: React.FC<TProductGuideProps> = ({ savingTerms, maxLimit, joinMember, etcNote, size }) => {
  return size === 'Large' ? (
    <div>
      <h1 className='heading-large text-typoPrimary mb-10'>상품 안내</h1>
      <table className='table-auto w-776 border-t-1 border-b-1 border-typoSecondary'>
        <tr className='border-b-1 border-border04'>
          <th className='w-140 py-7 label-small text-typoSecondary bg-border00'>기간</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>
            {savingTerms.map((data, index) => {
              return (
                <span key={index}>
                  {data}년 {index !== savingTerms.length - 1 ? '/ ' : ''}
                </span>
              );
            })}
          </td>
        </tr>
        <tr className='border-b-1 border-border04'>
          <th className='py-7 label-small text-typoSecondary bg-border00'>최고한도</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>
            {maxLimit === null ? '' : '최대 ' + maxLimit + '원'}
          </td>
        </tr>
        <tr className='border-b-1 border-border04'>
          <th className='py-7 label-small text-typoSecondary bg-border00'>대상</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>{joinMember}</td>
        </tr>
        <tr>
          <th className='py-7 label-small text-typoSecondary bg-border00'>유의사항</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>{etcNote}</td>
        </tr>
      </table>
    </div>
  ) : (
    <div>
      <h1 className='heading-large text-typoPrimary mb-10'>상품 안내</h1>
      <table className='table-auto w-776 border-t-1 border-b-1 border-typoSecondary'>
        <tr className='border-b-1 border-border04'>
          <th className='w-140 py-7 label-small text-typoSecondary bg-border00'>기간</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>
            {savingTerms.map((data, index) => {
              return (
                <span key={index}>
                  {data}년 {index !== savingTerms.length - 1 ? '/ ' : ''}
                </span>
              );
            })}
          </td>
        </tr>
        <tr className='border-b-1 border-border04'>
          <th className='py-7 label-small text-typoSecondary bg-border00'>최고한도</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>
            {maxLimit === null ? '' : '최대 ' + maxLimit + '원'}
          </td>
        </tr>
        <tr className='border-b-1 border-border04'>
          <th className='py-7 label-small text-typoSecondary bg-border00'>대상</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>{joinMember}</td>
        </tr>
        <tr>
          <th className='py-7 label-small text-typoSecondary bg-border00'>유의사항</th>
          <td className='py-7 border-l-1 border-typoSecondary px-24 label-small text-typoSecondary'>{etcNote}</td>
        </tr>
      </table>
    </div>
  );
};

export default ProductGuide;
