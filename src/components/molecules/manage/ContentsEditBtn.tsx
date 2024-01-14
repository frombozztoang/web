import MainBtn from '@/components/atom/button/MainBtn';
import Editor from '@/components/templates/editor/editor';
import { useState } from 'react';

export default function ContentsEditBtn({
  title,
  content,
  editFn,
}: {
  title: string;
  content: string;
  editFn: (title: string, content: string) => void;
}) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <MainBtn text='수정' isOn onClick={() => setShowEditor(true)} />
      {showEditor && (
        <Editor
          mode='edit'
          title={title}
          content={content}
          closeEditor={() => setShowEditor(false)}
          uploadFn={editFn}
        />
      )}
    </>
  );
}
