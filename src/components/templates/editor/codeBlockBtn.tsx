import { TBlockFormat } from '@/types/editor/editorType';
import { useSlate } from 'slate-react';
import BaseBtn from './baseBtn';
import isBlockActive from '@/libs/editor/isBlockActive';
import toggleCodeBlock from '@/libs/editor/toggleCodeBlock';

// bold, italic, underline, strikeThrough
export default function CodeBlockBtn({
  format,
  ...props
}: { format: TBlockFormat } & React.HTMLAttributes<HTMLButtonElement>) {
  const editor = useSlate();
  return (
    <BaseBtn
      {...props}
      active={isBlockActive(editor, format)}
      format={format}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleCodeBlock(editor);
      }}
    />
  );
}
