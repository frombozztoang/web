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
        'label-xs desktop:label-medium rounded-7 desktop:rounded-12 px-8 py-6 whitespace-pre-wrap desktop:p-10 flex items-center mt-2',
        profile === 'me' ? ' bg-mainLevel400 text-white' : 'bg-white text-darkComponent',
      )}
      style={{ marginBottom }}
    >
      {children}
    </div>
  );
}
