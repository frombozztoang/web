import { cls } from '@/utils/cls';
import React from 'react';

export default function ChatBubble({
  profile,
  marginBottom,
  children,
  ...props
}: { profile: 'me' | 'bot'; marginBottom: number } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cls(
        'text-10 desktop:label-medium rounded-7 p-6 whitespace-pre-wrap desktop:p-11',
        profile === 'me' ? ' bg-mainLevel400 text-white' : 'bg-white text-darkComponent',
      )}
      style={{ marginBottom }}
    >
      {children}
    </div>
  );
}
