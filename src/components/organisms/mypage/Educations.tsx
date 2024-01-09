import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React from 'react';
import Accordian from '@/components/organisms/mypage/accordian';

const Educations = () => {
  return (
    <div>
      <ul className='mb-23 tablet:mb-39 '>
        <Accordian title='금융 교육' count={1}>
          <PolicyItem img={''} name={'배고팡'} description={'배곺ㅇㄴㅁㅍㅇ'} like={true} />
        </Accordian>
      </ul>
      <ul className='mb-23 tablet:mb-39'>
        <Accordian title='금융 뉴스' count={1} />
      </ul>
    </div>
  );
};

export default Educations;
