import React from 'react';
import Image from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import Link from 'next/link';
import mail from '@/public/icons/mail.png';
import instagram from '@/public/icons/instagram.png';
import depthLogo from '@/public/logos/logo_DEPth.png';

const Footer = () => {
  return (
    <div className='bg-mainFooter fixed bottom-0 w-full p-64 gap-4 text-12'>
      <Image src={logoLight} alt='Logo Light' />
      <div className='mt-32 flex'>
        <Link className='mr-50 flex items-center' href='https://www.google.com' target='_blank' passHref>
          <Image className='mr-10 object-cover w-16 h-16' src={mail} alt='mail' />
          메일 보내기
        </Link>

        <Link className='mr-50 flex items-center' href='https://www.google.com' target='_blank' passHref>
          <Image className='mr-10 w-16 h-16' src={instagram} alt='instagram' /> 금융원정대 인스타그램
        </Link>

        <Link className='mr-50 flex items-center underline' href='https://www.google.com' target='_blank' passHref>
          <Image className='mr-10 w-61 h-11' src={depthLogo} alt='depthLogo' /> 뎁스 홈페이지
        </Link>
      </div>
    </div>
  );
};

export default Footer;
