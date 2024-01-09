import React from 'react';

const DefaultBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`flex justify-center items-center px-12 py-8 rounded-4 label-small bg-main text-secondary tablet:px-27 tablet:py-18 tablet:rounded-9 tablet:label-xl desktop:p-16 desktop:gap-10 desktop:rounded-10 desktop:heading-large`}
    >
      공식홈에서 자세히 살펴보기
    </button>
  );
};

export default DefaultBtn;
