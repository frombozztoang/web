import React from 'react';
import Image from 'next/image';
import mainAnimation from '@/public/gifs/mainAnimation.gif';

const Section1 = () => {
  return (
    <div className='flex items-start justify-center  pb-120 min-w-full '>
      <Image src={mainAnimation} alt='mainAnimation' />
    </div>
  );
};

export default Section1;
