'use client';

import { postKakaoLogin } from '@/api/loginApi';
import { user } from '@/class/user';
import LOCALHOST_KEYS from '@/constants/localhostKeys';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const code = searchParams.get('code') as string;
  useEffect(() => {
    try {
      (async () => {
        const { status, accessToken, isAdmin } = await postKakaoLogin(code); // 서버에 로그인 요청
        if (status === 200) {
          user.setAccessToken(accessToken);
          user.setIsAdmin(isAdmin);
          const redirectUrl = localStorage.getItem(LOCALHOST_KEYS.redirectUrl) || '/';
          localStorage.removeItem(LOCALHOST_KEYS.redirectUrl);
          router.push(redirectUrl);
        }
      })();
    } catch {
      // 에러 처리
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
}
