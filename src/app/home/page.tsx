import About from '@/components/About'
import Navigation from '@/components/Navigation'
import Slider from '@/components/Slider'
import Review from '@/components/Review'
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="font-sans w-full">
            <Navigation />
            <Slider />
            <About
                buttonAbout={
                    <>
                        <Link href="/about" className='bg-[--primary-color] rounded-full px-10 py-3 text-white text-sm hover:text-blue-300 transition duration-600'>Tìm hiểu thêm</Link>
                    </>
                }
            />
            <div className='flex justify-around bg-[#f9f9f9] w-full py-10 md:px-16'>
                <div className=' flex flex-col gap-2 items-center'>
                    <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>1010</span>
                    <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Học sinh</span>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <span className='text-[--primary-color]  font-bold text-3xl sm:text-5xl'>12</span>
                    <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Khóa học</span>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>24</span>
                    <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Sự kiện</span>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>24</span>
                    <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Giảng viên</span>
                </div>
            </div>
            <Review
            linkReview = '/course'
            title = 'Khoá học phổ biến'
            />
        </div>
    )
}
