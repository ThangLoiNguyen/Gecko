import React from 'react'
import SlideBanner from '@/assets/slide_banner.webp'
import Link from 'next/link'

const Slider = () => {
  return (
    <div>
    <div className='relative h-[600px]'>
      <img src={SlideBanner.src} alt="SlideBanner" className='h-full w-full object-cover'/>
      <div className='absolute inset-0 bg-gray-700 opacity-40 w-full'></div>
      <div className='absolute z-10 inset-0 h-full w-full flex flex-col justify-center md:px-16'>
          <div>
              <p className='text-white font-bold text-[36pt]'>GECKO - English & more</p>
              <p className='text-white text-[400] text-[14pt] md:w-[600px] mt-8'>Chuyên đào tạo các khóa học tiếng Anh dành cho trẻ em, luyện thi IELTS...</p>
          </div>
          <div className='mt-8'>
            <Link href="/contact" className='text-white px-16 py-3 border rounded-full text-sm hover:bg-[--primary-color] hover:border-transparent'>Liên hệ</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Slider
