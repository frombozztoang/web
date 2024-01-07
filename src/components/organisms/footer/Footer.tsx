import React from 'react';
import Image, { StaticImageData } from 'next/image';
import logoLight from '@/public/logos/logo_light.png';
import Link from 'next/link';
import mail from '@/public/icons/mail.png';
import instagram from '@/public/icons/instagram.png';
import depthLogo from '@/public/logos/logo_DEPth.png';

interface FooterLinkProps {
  href: string;
  iconSrc: StaticImageData;
  text: string;
  withUnderline?: boolean;
}

const FooterLink = ({ href, iconSrc, text, withUnderline = false }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      target='_blank'
      className={`min-w-max  mr-[58.5px] tablet:mr-50 flex items-center ${
        withUnderline ? 'underline' : ''
      } tablet:flex`}
      passHref
    >
      <div className='tablet:flex'>
        <Image
          className='mr-10 mb-2 tablet:mb-0 object-contain'
          src={iconSrc}
          alt={text}
          width={withUnderline ? 61 : 16}
          height={withUnderline ? 11 : 16}
        />
        <div>{text}</div>
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className='bottom-0 bg-mainFooter w-full py-12 px-24 tablet:p-64 paragraph-small'>
      <Image src={logoLight} alt='Logo Light' className='w-71 h-24 tablet:w-auto tablet:h-auto object-contain' />
      <div className='mt-10 tablet:mt-32 flex'>
        <FooterLink href='https://www.google.com' iconSrc={mail} text='메일 보내기' />
        <FooterLink href='https://www.google.com' iconSrc={instagram} text='금융원정대 인스타그램' />
        <FooterLink href='https://www.google.com' iconSrc={depthLogo} text='뎁스 홈페이지' withUnderline />
      </div>
    </div>
  );
};

export default Footer;
