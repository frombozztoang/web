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
        'text-20 font-bold rounded-10 p-12 whitespace-pre-wrap',
        profile === 'me' ? 'bg-green-600 text-white' : 'bg-white text-black',
      )}
    >
      {children}
    </div>
  );
}
