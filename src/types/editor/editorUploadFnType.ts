export type TEditorUploadFn = ({ title, content }: { title: string; content: string }) => Promise<Response>;
export type TEditorEditFn = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}) => Promise<Response>;
