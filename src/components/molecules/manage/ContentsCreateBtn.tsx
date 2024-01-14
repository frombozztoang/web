import MainBtn from '@/components/atom/button/MainBtn';
import Editor from '@/components/templates/editor/editor';
import { useState } from 'react';

export default function ContentsCreateBtn({ createFn }: { createFn: (title: string, content: string) => void }) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <MainBtn text='작성' isOn onClick={() => setShowEditor(true)} />
      {showEditor && <Editor mode='create' closeEditor={() => setShowEditor(false)} uploadFn={createFn} />}
    </>
  );
}
