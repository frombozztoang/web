import React from 'react';

const DefaultBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={`flex justify-center items-center px-12 py-8 rounded-4 label-small bg-main text-secondary dark:text-dark-secondary tablet:px-15 tablet:py-10 tablet:rounded-5 tablet:label-medium desktop:p-16 desktop:gap-10 desktop:rounded-10 desktop:heading-large`}
    >
      공식홈에서 자세히 살펴보기
    </button>
  );
};

export default DefaultBtn;
