'use client';

import Login from '@/components/organisms/modal/Login';
import BackDrop from '@/components/organisms/modal/backdrop';
import ModalView from '@/components/organisms/modal/modalView';
import LOCALHOST_KEYS from '@/constants/localhostKeys';
import { KAKAO_REDIRECT_URI_DEPLOY, KAKAO_REDIRECT_URI_DEVELOPMENT } from '@/constants/redirectUri';
import useUser from '@/hooks/useUser';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

// 로그인이 필요한 페이지에 사용
export default function WithLoginModal({ children, closeFn }: { children?: React.ReactNode; closeFn?: () => void }) {
  const { user, isLoading, isError } = useUser();
  const [showModal, setShowModal] = useState(true);
  const pathname = usePathname();

  const loginFn = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NODE_ENV === 'development' ? KAKAO_REDIRECT_URI_DEVELOPMENT : KAKAO_REDIRECT_URI_DEPLOY,
    });
  };

  const handleClose = () => {
    setShowModal(false);
    closeFn && closeFn();
  };

  useEffect(() => {
    if (isError) {
      localStorage.setItem(LOCALHOST_KEYS.redirectUrl, pathname);
    }
  }, [pathname, isError]);

  if (user) return children;

  if (isError && showModal) {
    return (
      <>
        <BackDrop>
          <ModalView>
            <Login loginFn={loginFn} closeFn={handleClose} />
          </ModalView>
        </BackDrop>
        <Script
          src='https://developers.kakao.com/sdk/js/kakao.js'
          onLoad={() => {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
          }}
        />
      </>
    );
  }
}
