import { toggleMark } from '@/libs/editor/toggleMark';
import { TBlockFormat } from '@/types/editor/editorType';
import { useSlate } from 'slate-react';
import BaseBtn from './baseBtn';
import isBlockActive from '@/libs/editor/isBlockActive';
import toggleListBlock from '@/libs/editor/toggleListBlock';

export default function ListBlockBtn({
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
        toggleListBlock(editor, format);
      }}
    />
  );
}
