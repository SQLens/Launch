import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Container from './container';

export default function Footer() {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const legal = ['Terms', 'Privacy', 'Legal'];
  return (
    <div className='relative'>
      <Container>
        <div className='grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <div>
              {' '}
              <Link
                href='/'
                className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'
              >
                <Image
                  src='/img/SQLens-logo.png'
                  alt='N'
                  width='32'
                  height='32'
                  className='w-8'
                />
                <span>SQLens</span>
              </Link>
            </div>

            <div className='max-w-md mt-4 text-gray-500 dark:text-gray-400'>
              SQLens is a free and open source developed under the OSLabs
              accelerator.
            </div>

            <div className='mt-5'>
              <a
                href='https://vercel.com/?utm_source=web3templates&utm_campaign=oss'
                target='_blank'
                rel='noopener'
                className='relative block w-44'
              >
                <Image
                  src='/img/vercel.svg'
                  alt='Powered by Vercel'
                  width='212'
                  height='44'
                />
              </a>
            </div>
          </div>

          {/* <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                </Link>
              ))}
            </div>
          </div> */}
          <div className=''>
            <div>Follow us</div>
            <div className='flex mt-5 space-x-5 text-gray-400 dark:text-gray-500'>
              <a
                href='https://www.linkedin.com/company/sqlens/'
                target='_blank'
                rel='noopener'
              >
                <span className='sr-only'>Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className='my-10 text-sm text-center text-gray-600 dark:text-gray-400'>
          {/* Copyright © {new Date().getFullYear()}. */}
          Adapted from{' '}
          <a href='https://web3templates.com/' target='_blank' rel='noopener'>
            Web3Templates.
          </a>{' '}
          {/* Illustrations from{' '}
          <a href='https://www.glazestock.com/' target='_blank' rel='noopener '>
            Glazestock
          </a> */}
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z' />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href='https://web3templates.com'
      target='_blank'
      rel='noopener'
      className='absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300'
    >
      <svg
        width='20'
        height='20'
        viewBox='0 0 30 30'
        fill='none'
        className='w-4 h-4'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='29.5385' rx='2.76923' fill='#362F78' />
        <path
          d='M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z'
          fill='#F7FAFC'
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
