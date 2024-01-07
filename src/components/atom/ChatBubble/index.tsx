import { cls } from '@/utils/cls';
import React from 'react';

export default function ChatBubble({
  profile,
  children,
  ...props
}: { profile: 'me' | 'bot' } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cls(
        'label-medium rounded-10 p-12 whitespace-pre-wrap',
        profile === 'me' ? ' bg-mainLevel400 text-white' : 'bg-white text-darkComponent',
      )}
    >
      {children}
    </div>
  );
}
