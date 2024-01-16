import React from 'react';
import LoadingGif from '@/public/gifs/loading.gif';
import Image from 'next/image';

const loading = () => {
  return (
    <div className='flex items-center justify-start flex-col '>
      <Image src={LoadingGif} alt='loading component' />
    </div>
  );
};

export default loading;
