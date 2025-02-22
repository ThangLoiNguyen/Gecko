import About from '@/components/About'
import Navigation from '@/components/Navigation'
import Slider from '@/components/Slider'
import PostReview from '@/components/Review/Slide/PostReview'
import CourseReview from '@/components/Review/Slide/CourseReview'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import TotalData from '@/components/TotalData'

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
            <TotalData/>
            <div className='mb-20'>
                <CourseReview
                    linkReview={'/course'}
                    titleCourse=
                    {
                        <>
                            <span className='text-lg text-[--primary-color] font-bold uppercase sm:text-xl md:text-3xl'>Khoá học nổi bật</span>
                            <span className='block h-1 w-40 bg-[--primary-color]'></span>
                        </>
                    }
                />
                <PostReview
                    linkReview={'/post'}
                    titlePost=
                    {
                        <>
                            <span className='text-lg text-[--primary-color] font-bold uppercase sm:text-xl md:text-3xl'>Tin tức nổi bật</span>
                            <span className='block h-1 w-40 bg-[--primary-color]'></span>
                        </>
                    }
                />
            </div>
            <Footer />
        </div>
    )
}
