import { isMarkActive } from '@/libs/editor/isMarkActive';
import { toggleMark } from '@/libs/editor/toggleMark';
import { TMarkFormat } from '@/types/editor/editorType';
import { useSlate } from 'slate-react';
import BaseBtn from './baseBtn';

// bold, italic, underline, strikeThrough
export default function MarkBtn({
  format,
  ...props
}: { format: TMarkFormat } & React.HTMLAttributes<HTMLButtonElement>) {
  const editor = useSlate();
  return (
    <BaseBtn
      {...props}
      active={isMarkActive(editor, format)}
      format={format}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    />
  );
}
