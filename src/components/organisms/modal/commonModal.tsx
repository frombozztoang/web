'use client';

import KakaoBtn from '@/components/atom/button/KakaoBtn';
import CloseIcon from '@/public/icons/modal_close.svg';
import BackDrop from './backdrop';
import ModalView from './modalView';

const CheckBookmark = ({
  yesClickFn,
  closeFn,
  desText,
  yesText,
  noText,
  ...props
}: {
  desText: string;
  yesText: string;
  noText: string;
  yesClickFn: () => void;
  closeFn: () => void;
}) => {
  return (
    <BackDrop>
      <ModalView>
        <div
          {...props}
          className='relative bg-white rounded-10 flex flex-col items-center justify-center w-372 h-236 desktop:w-409 desktop:h-235  '
        >
          <button onClick={closeFn} className='absolute top-13 right-13'>
            <CloseIcon />
          </button>
          <button onClick={closeFn}>{/* <CloseIcon className='absolute top-18 right-18' /> */}</button>
          <div className='text-black w-200 text-center paragraph-medium'>{desText}</div>
          <div className='flex mt-35'>
            <button
              className='w-130 h-40 text-center mr-21 rounded-10 border-[#048848] border-1 text-main label-medium'
              onClick={yesClickFn}
            >
              {yesText}
            </button>
            <button
              className='w-130 h-40 text-center rounded-10 bg-[#048848] text-white label-medium'
              onClick={closeFn}
            >
              {noText}
            </button>
          </div>
        </div>
      </ModalView>
    </BackDrop>
  );
};

export default CheckBookmark;
