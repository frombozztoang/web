export default function WithStopPropagation({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      onClick={(e) => {
        console.log('stopPropagation');
        e.stopPropagation();
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}
