import { HTMLAttributes } from 'react';
import { useSlate } from 'slate-react';
import ImagePlusIcon from '@/public/icons/editor/editor--image_plus.svg';

export default function ImageBlock({
  textAlign,
  element,
  ...props
}: {
  textAlign: any;
  element: any;
} & HTMLAttributes<HTMLElement>) {
  const editor = useSlate();
  console.log(props.children);

  return (
    <>
      {props.children}
      <div
        style={{ ...props.style, textAlign }}
        className=' bg-page1 w-full py-15 px-20 flex justify-start items-center gap-15'
      >
        <ImagePlusIcon />
        <span className=' text-black text-16'>이미지 추가</span>
      </div>
    </>
  );
}
