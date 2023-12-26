import Link from 'next/link';
import React from 'react';
import '../app/globals.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/introduction'>서비스 소개</Link>
        </li>
        <li>
          <Link href='/whatToDo'>금융, 뭐하지?</Link>
        </li>
        <li>
          <Link href='/learnWithUs'>금융, 배우자!</Link>
        </li>
        <li>
          <Link href='/ThankYou'>금융, 고마워!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
