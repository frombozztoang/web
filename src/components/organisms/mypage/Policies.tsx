import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import React from 'react';

const Policies = () => {
  return (
    <div>
      <h1 className='label-medium text-typoSecondary mb-10'>전체 1</h1>
      <PolicyItem img={''} name={'배고팡'} description={'배곺ㅇㄴㅁㅍㅇ'} like={true} />
    </div>
  );
};

export default Policies;
