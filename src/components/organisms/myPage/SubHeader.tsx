import SubBtn from '@/components/atom/button/SubBtn';
import React, { useState } from 'react';

export const subHeaderItems = [
  { label: '금융, 뭐하지?', index: 0 },
  { label: '금융, 배우자!', index: 1 },
  { label: '금융, 고마워!', index: 2 },
];

const SubHeader = () => {
  const [subHeaderItem, setSubHeaderITem] = useState(0);
  const handleSubHeaderItem = (index: number) => {
    setSubHeaderITem(index);
  };
  return (
    <div className='flex flex-col w-342 tablet:w-854'>
      <div className='heading-large border-b-2 border-black pb-10 mb-10 dark:text-dark-primary dark:border-white '>
        즐겨찾기
      </div>
      <div className='flex justify-between tablet:justify-start'>
        {subHeaderItems.map((i) => (
          <SubBtn
            key={i.index}
            text={i.label}
            isOn={i.index === subHeaderItem}
            mr='tablet:mr-10'
            onClick={() => handleSubHeaderItem(i.index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
