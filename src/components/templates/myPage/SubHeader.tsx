import SubBtn from '@/components/atom/button/SubBtn';
import React, { useState } from 'react';

const subHeaderItems = [
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
    <div className='flex flex-col w-854 mb-63'>
      <div className='heading-large border-b-2 border-black pb-10 mb-10 '>즐겨찾기</div>
      <div className='label-medium flex'>
        {subHeaderItems.map((i) => (
          <div className='mr-10'>
            <SubBtn text={i.label} isOn={i.index === subHeaderItem} onClick={() => handleSubHeaderItem(i.index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
