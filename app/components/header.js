"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';
import logo from "@/public/images/quicklotter-logo.svg";





function Header() {
  const pathname = usePathname()
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  <Image src={logo} alt="Logo" width={120} height={50} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className={`${pathname === '/' ? styles.bgActive : ''} ${styles.navItem}  rounded-lg p-2`}>
                   Home
                </Link>
                <Link href="/generator" className={`${pathname === '/generator' ? styles.bgActive : ''} ${styles.navItem}  rounded-lg p-2`}>
                   Generator
                </Link>
                <Link href="/analysis" className={`${pathname === '/analysis' ? styles.bgActive : ''} ${styles.navItem}  rounded-lg p-2`}>
                  Analysis
                </Link>
                <Link href="/overview" className={`${pathname === '/overview' ? styles.bgActive : ''} ${styles.navItem}  rounded-lg p-2`}>
                  Overview
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#7E0C6E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )  : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#7E0C6E"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link href="/" className={`
              ${pathname === '/' ? styles.bgActive : ''} 
              ${styles.navItem} block rounded-lg p-2`}>
                  Home
                </Link>
              <Link href="/generator" className={`
                ${pathname === '/generator' ? styles.bgActive : ''}
                ${styles.navItem} block rounded-lg p-2`}>
                  Generator
                </Link>
              <Link href="/analysis" className={`
                ${pathname === '/analysis' ? styles.bgActive : ''} 
                ${styles.navItem} block rounded-lg p-2`}>
                  Analysis
                </Link>
              <Link href="/overview" className={`
                ${pathname === '/overview' ? styles.bgActive : ''}
                ${styles.navItem} block rounded-lg p-2`}>
                  Overview
                </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;


