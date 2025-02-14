'use client';
import React, { useState } from 'react'
import GeckoLogo from '@/assets/Gecko.logo.webp'
import FlagOfVietnam from '@/assets/flag-of-vietnam.webp'
import FlagOfEnglish from '@/assets/flag-of-english.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const dropDown = () => {
    setIsVisible1(!isVisible1);
  };
  const [isVisible2, setIsVisible2] = useState(false);
  const fade = () => {
    setIsVisible2(true)
  };
  const hide = () => {
    setIsVisible2(!isVisible2)
  };
  const [isVisible3, setIsVisible3] = useState(false);
  const drop = () => {
    setIsVisible3(!isVisible3)
  };

  return (
    <nav className='sticky shadow-md flex justify-between items-center h-24 px-3 top-0 z-50 bg-white select-none'>
      <FontAwesomeIcon icon={faBars} onClick={fade} className='lg:hidden flex h-8 justify-center cursor-pointer hover:text-[--primary-color]' />
      {/* Navigation mobile-screen */}
      {isVisible2 && (
        <div className=' absolute left-0 top-0 h-screen w-full bg-black/50'>
          <div className=' absolute left-0 top-0 h-screen w-1/2 bg-white p-8 animate-fade-in'>
            <FontAwesomeIcon icon={faXmark} className=' text-3xl mb-10 hover:text-red-500 cursor-pointer' onClick={hide} />
            <div className=' flex flex-col'>
              <a href="/" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2'>Trang chủ</a>
              <a href="/about" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2'>Về chúng tôi</a>
              <a href="/course" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2'>Khóa học</a>
              <a href="/contact" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2'>Liên hệ</a>
              <a href="/post" className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-2'>Tin tức</a>
              <div>
                <div className='flex justify-between items-center' onClick={drop}>
                  <span className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer my-1'>Thư viện</span>
                  <FontAwesomeIcon icon={faAngleDown} className=' text-sm' />
                </div>
                {isVisible3 && (
                <ul className='ml-4'>
                  <li className='hover:text-[--primary-color] cursor-pointer my-2 text-sm'>
                    <a href="/library/photoLibrary">Thư viện ảnh</a>
                    </li>
                  <li className='hover:text-[--primary-color] cursor-pointer my-2 text-sm'>
                    <a href="">Thư viện tài liệu</a>
                    </li>
                </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-grow items-center justify-center'>
        <a href="/" className=''>
          <img src={GeckoLogo.src} alt="Gecko Logo" className="h-12 xl:ml-10 lg:block object-contain" />
        </a>
        {/* Navigation full-screen */}
        <div className='hidden lg:flex gap-7 w-full items-center justify-end'>
          <a href="/">
            <div className='cursor-pointer relative gap-2 text-base font-semibold text-[--primary-color]'>Trang chủ</div>
          </a>
          <a href="/about">
            <div className='cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold'>Về chúng tôi</div>
          </a>
          <a href="/course">
            <div className='cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold'>Khóa học</div>
          </a>
          <a href="/contact">
            <div className='cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold'>Liên hệ</div>
          </a>
          <a href="/post">
            <div className='cursor-pointer hover:text-[--primary-color] relative gap-2 text-base font-semibold'>Tin tức</div>
          </a>
          <div className='cursor-pointer flex relative gap-2 text-base font-semibold group'>
            <p className='group-hover:text-[--primary-color]'>Thư viện</p>
            <FontAwesomeIcon icon={faAngleDown} className='h-2 w-2 ml-1 translate-y-2' />
            <span className='absolute h-10 w-20 right-0'></span>
            <div className='absolute min-w-48 bg-white right-0 top-10 hidden group-hover:block'>
              <p className='gap-2 p-3 z-10 text-sm font-[400] hover:bg-[--primary-color] hover:text-white'>Thư viện ảnh</p>
              <p className='gap-2 p-3 z-10 text-sm font-[400] hover:bg-[--primary-color] hover:text-white'>Thư viện tài liệu</p>
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
        {isVisible1 && (
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
