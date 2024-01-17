import MainBtn from '@/components/atom/button/MainBtn';
import Editor from '@/components/templates/editor/editor';
import { TEditorEditFn } from '@/types/editor/editorUploadFnType';
import { useState } from 'react';

export default function ContentsEditBtn({
  id,
  title,
  content,
  editFn,
}: {
  id: number;
  title: string;
  content: string;
  editFn: TEditorEditFn;
}) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <MainBtn text='수정' isOn onClick={() => setShowEditor(true)} />
      {showEditor && (
        <Editor
          mode='edit'
          id={id}
          title={title}
          content={content}
          closeEditor={() => setShowEditor(false)}
          uploadFn={editFn}
        />
      )}
    </>
  );
}
