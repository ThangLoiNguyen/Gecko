import React from 'react'
import Gecko from '@/assets/Gecko.logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { div } from 'framer-motion/client';
export default function Footer() {
    return (
        <div className='flex flex-col lg:flex-row gap-5 bg-[#fafafa] px-8 xl:px-32 pt-10 pb-5'>
            <div className='flex flex-row w-full justify-between lg:w-2/3'>
                <div className='flex flex-col gap-5 w-1/2'>
                    <img src={Gecko.src} alt="Gecko" className='w-44 object-contain' />
                    <div>
                        <FontAwesomeIcon icon={faLocation} className='text-[--primary-color]' />
                        <span className='ml-6'>Số 3, Tứ Hiệp, Cương Ngô, Thanh Trì, Hà Nội</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className='text-[--primary-color]' />
                        <span className='ml-6'>0978310234</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className='text-[--primary-color]' />
                        <span className='ml-6'>info@gecko.edu.vn</span>
                    </div>
                    <div className='flex flex-row gap-5 w-1/2'>
                        <a href="https://www.facebook.com/GeckoEnglishCenter">
                            <FontAwesomeIcon icon={faFacebook} className='text-4xl text-blue-600' />
                        </a>
                        <a href="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faYoutube} className='text-4xl text-red-600' />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} className='text-4xl text-rose-400' />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-1/3 items-center'>
                    <span className='w-72 text-lg font-medium'>Danh mục</span>
                    <Link href={"/home"} className='w-72 text-base hover:text-[--primary-color]'>Trang chủ</Link>
                    <Link href={'/about'} className='w-72 text-base hover:text-[--primary-color]'>Về chúng tôi</Link>
                    <Link href={'/course'} className='w-72 text-base hover:text-[--primary-color]'>Khóa học</Link>
                    <Link href={'/contact'} className='w-72 text-base hover:text-[--primary-color]'>Liên Hệ</Link>
                    <Link href={'/post'} className='w-72 text-base hover:text-[--primary-color]'>Tin tức</Link>
                    <span className='w-72 text-base hover:text-[--primary-color]'>Thư viện</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-full lg:w-1/3'>
                <span className='text-sm font-bold'>Đăng ký nhận thông tin</span>
                <span className='text-sm'>Đăng ký để nhận những thông tin mới nhất</span>
                <form action="" className=' relative flex flex-row'>
                    <input type="text" placeholder='' className=' rounded-full w-full py-3 pl-5 pr-36 bg-[#ffffff] outline-none border-2 focus:border-[--primary-color]' />
                    <button className='absolute right-0 top-0 bg-[--primary-color] text-white text-sm font-bold px-5 py-4 rounded-full -translate-y-[0.5px] hover:bg-[--secondary-color]'>Gửi thông tin</button>
                </form>
            </div>
        </div>
    )
}
