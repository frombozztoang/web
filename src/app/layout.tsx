import type { Metadata } from 'next';
import '../styles/globals.css';
import Footer from '@/components/organisms/footer/Footer';
import Header from '@/components/organisms/header/Header';
import Chatbot from '@/components/templates/chatbot';
import QueryProvider from '@/components/queryProvider';

declare global {
  interface Window {
    Kakao: {
      init: (key: any) => void;
      Auth: {
        authorize: (options: { redirectUri: string }) => void;
      };
    };
  }
}

export const metadata: Metadata = {
  title: '금융원정대',
  description: '금융원정대',
  icons: { icon: '/favicon.ico' },
};

const renderMobileHeaderDiv = () => {
  // Check if the 'mobile-header-open' class is present in the body
  if (document.body.classList.contains('mobile-header-open')) {
    return <div>This is the mobile header div</div>;
  }
  return null;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      {/* h-full -> scroll to top */}
      <body className='h-full bg-bg dark:bg-dark-bg'>
        <QueryProvider>
          <Header />
          <main className='mt-100 tablet:mt-110 desktop:mt-200 min-h-screen px-24 tablet:px-0 box-border'>
            {children}
          </main>
          <Chatbot />
          <footer className='relative  w-full mt-200'>
            <Footer />
          </footer>
          <Chatbot />
        </QueryProvider>
      </body>
    </html>
  );
}
