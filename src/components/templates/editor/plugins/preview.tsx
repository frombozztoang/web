import BackDrop from '@/components/organisms/modal/backdrop';
import ModalView from '@/components/organisms/modal/modalView';
import { cls } from '@/utils/cls';
import SlateCompiler from '@/libs/editor/slateCompiler';
import { Descendant } from 'slate';
import CloseIcon from '@/public/icons/close2.svg';

export default function Preview({
  title,
  editorValue,
  closePreview,
  ...props
}: { title?: string; editorValue: Descendant[]; closePreview: () => void } & React.HTMLAttributes<HTMLDivElement>) {
  const slateCompiler = new SlateCompiler();
  const html = slateCompiler.toHtml(editorValue);
  console.log(title);

  return (
    <BackDrop onBackdropClick={closePreview}>
      <ModalView {...props}>
        <div className='relative overflow-y-scroll prose p-40 bg-white h-full w-full max-w-full post-box'>
          <button onClick={closePreview} className='absolute top-20 right-20'>
            <CloseIcon width='20' height='20' />
          </button>
          <h1 className={!title?.length ? 'text-gray' : ''}>{title?.length ? title : '제목을 입력하세요'}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </ModalView>
    </BackDrop>
  );
}
