'use client';
import React, { useEffect, useState } from 'react'
import GeckoLogo from '@/assets/Gecko.logo.webp'
import FlagOfVietnam from '@/assets/flag-of-vietnam.webp'
import FlagOfEnglish from '@/assets/flag-of-english.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  // VisibleLanguage
  const [isVisibleLanguage, setIsVisibleLanguage] = useState(false);
  const dropDown = () => {
    setIsVisibleLanguage(!isVisibleLanguage);
  };
  // isVisibleNav
  const [isVisibleNavShow, setIsVisibleNavShow] = useState(false);
  const fade = () => {
    setIsVisibleNavShow(true)
  }
  const hide = () => {
    setIsVisibleNavShow(!isVisibleNavShow)
  };
  // VisibleNavLibrary
  const [isVisibleNavLibrary, setIsVisibleNavLibrary] = useState(false);
  const drop = () => {
    setIsVisibleNavLibrary(!isVisibleNavLibrary)
  };
  // ActionPage
  const currentPath = usePathname()
  return (
    <nav className='sticky shadow-md flex justify-between items-center h-24 px-3 top-0 z-50 bg-white select-none'>
      <FontAwesomeIcon icon={faBars} onClick={fade} className='lg:hidden flex h-8 justify-center cursor-pointer hover:text-[--primary-color]' />
      {/* Navigation mobile-screen */}
      {isVisibleNavShow && (
        <div className={` absolute left-0 top-0 h-screen w-full lg:hidden  ${isVisibleNavShow ? 'animate-fade-in' : 'animate-fade-out'}`}>
          <div className=' absolute z-50 right-0 top-0 h-screen bg-black/50 w-1/2' onClick={hide}></div>
          <div className=' absolute left-0 top-0 h-screen w-1/2 bg-white p-8'>
            <FontAwesomeIcon icon={faXmark} className=' text-3xl mb-10 hover:text-red-500 cursor-pointer' onClick={hide} />
            <div className=' flex flex-col'>
              <Link href="/home" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2' onClick={hide}>Trang chủ</Link>
              <Link href="/about" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2' onClick={hide}>Về chúng tôi</Link>
              <Link href="/course" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2' onClick={hide}>Khóa học</Link>
              <Link href="/contact" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2' onClick={hide}>Liên hệ</Link>
              <Link href="/post" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2' onClick={hide}>Tin tức</Link>
              <div>
                <div className='flex justify-between items-center' onClick={drop}>
                  <span className='text-lg font-semibold hover:text-[--primary-color] my-1'>Thư viện</span>
                  <FontAwesomeIcon icon={faAngleDown} className={` text-sm items-center p-3 cursor-pointer ${isVisibleNavLibrary ? 'duration-100 rotate-180' : 'duration-100 rotate-0'}`}/>
                </div>
                {isVisibleNavLibrary && (
                  <ul className='ml-4'>
                    <li className='hover:text-[--primary-color] cursor-pointer my-2 text-sm'>
                      <Link href="/library/photoLibrary" onClick={hide}>Thư viện ảnh</Link>
                    </li>
                    <li className='hover:text-[--primary-color] cursor-pointer my-2 text-sm'>
                      <Link href="/library/documentLibrary" onClick={hide}>Thư viện tài liệu</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-grow items-center justify-center'>
        <Link href="/">
          <img src={GeckoLogo.src} alt="Gecko Logo" className="h-12 xl:ml-10 lg:block object-contain" />
        </Link>
        {/* Navigation full-screen */}
        <div className='hidden lg:flex gap-7 w-full items-center justify-end'>
          <Link href="/home">
            <div className={`cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold 
              ${currentPath === '/home' || currentPath === '/' ? 'text-[--primary-color]' : 'text-black'}`}>Trang chủ</div>
          </Link>
          <Link href="/about">
            <div className={`cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold 
              ${currentPath === '/about' ? 'text-[--primary-color]' : 'text-black'}`}>Về chúng tôi</div>
          </Link>
          <Link href="/course">
            <div className={`cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold 
              ${currentPath === '/course' ? 'text-[--primary-color]' : 'text-black'}`}>Khóa học</div>
          </Link>
          <Link href="/contact">
            <div className={`cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold 
              ${currentPath === '/contact' ? 'text-[--primary-color]' : 'text-black'}`}>Liên hệ</div>
          </Link>
          <Link href="/post">
            <div className={`cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold 
              ${currentPath === '/post' ? 'text-[--primary-color]' : 'text-black'}`}>Tin tức</div>
          </Link>
          <div className='cursor-pointer flex relative gap-2 text-base font-semibold group'>
            <p className={`group-hover:text-[--primary-color]
              ${currentPath === '/library/photoLibrary'|| currentPath === '/library/documentLibrary' ? 'text-[--primary-color]' : 'text-black'}`}>Thư viện</p>
            <FontAwesomeIcon icon={faAngleDown} className='h-2 w-2 ml-1 translate-y-2' />
            <span className='absolute h-10 w-20 right-0'></span>
            <div className='absolute flex-col min-w-48 bg-white right-0 top-10 hidden group-hover:flex'>
              <Link href="/library/photoLibrary"
                className='gap-2 p-3 z-10 text-sm font-[400] hover:bg-[--primary-color] hover:text-white'>Thư viện ảnh</Link>
              <Link href="/library/documentLibrary"
                className='gap-2 p-3 z-10 text-sm font-[400] hover:bg-[--primary-color] hover:text-white'>Thư viện tài liệu</Link>
            </div>
          </div>
        </div>
      </div>
      <div onClick={dropDown}>
        <div className='relative flex bg-[--primary-color] text-white py-3 px-6 rounded-full gap-5 mx-0 w-[100px] md:w-[200px] lg:mx-10 cursor-pointer'>
          <img src={FlagOfVietnam.src} alt="FlagOfVietnam" className='rounded border h-6 w-8' />
          <p className='text-sm hidden md:block'>Tiếng Việt</p>
          <FontAwesomeIcon icon={faAngleDown} className='h-3 w-3 translate-y-1.5' />
        </div>
        {isVisibleLanguage && (
          <div className='absolute animate-drop-down right-[10px] lg:right-[50px] top-20 rounded-lg overflow-hidden bg-white'>
            <div className='flex pr-6 md:pr-20 pl-4 py-3  items-center hover:bg-[--primary-color] hover:text-white cursor-pointer'>
              <img src={FlagOfVietnam.src} alt="FlagOfVietnam" className='h-4 w-6 rounded' />
              <p className='ml-5 text-sm'>Tiếng Việt</p>
            </div>
            <div className='flex pr-6 md:pr-20 pl-4 py-3  items-center hover:bg-[--primary-color] hover:text-white cursor-pointer '>
              <img src={FlagOfEnglish.src} alt="FlagOfEnglish" className='h-4 w-6 rounded' />
              <p className='ml-5 text-sm'>English</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
