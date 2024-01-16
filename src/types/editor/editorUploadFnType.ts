export type TEditorUploadFn = ({ title, content }: { title: string; content: string }) => Promise<Response>;
