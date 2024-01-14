'use client';

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

type Props = {
  children: React.ReactNode;
};

export default function QueryProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
