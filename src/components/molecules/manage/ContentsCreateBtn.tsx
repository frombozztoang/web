import MainBtn from '@/components/atom/button/MainBtn';
import Editor from '@/components/templates/editor/editor';
import { TEditorUploadFn } from '@/types/editor/editorUploadFnType';
import { useState } from 'react';

export default function ContentsCreateBtn({ createFn }: { createFn: TEditorUploadFn }) {
  const [showEditor, setShowEditor] = useState(false);
  const handleCloseEditor = () => {
    setShowEditor(false);
    window.location.reload();
  };

  return (
    <>
      <MainBtn text='작성' isOn onClick={() => setShowEditor(true)} />
      {showEditor && <Editor mode='create' closeEditor={handleCloseEditor} uploadFn={createFn} />}
    </>
  );
}
