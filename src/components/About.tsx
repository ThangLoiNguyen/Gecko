import React from 'react'
import GeckoPoster from '@/assets/gecko-introduction.webp'
export default function About() {
  return (
    <div className='flex justify-between flex-col-reverse lg:flex-row my-16 md:mx-5 lg:mx-1 xl:mx-20 px-3 xl:px-16'>
      <div className='lg:w-1/2 w-full mt-10 gap-5 lg:mt-0'>
        <h1 className='font-bold text-2xl mb-5 w-[90%]'>Voluptatem dignissimos provident quasi corporis Voluptatem dignissimos</h1>
        <p className='mb-5 w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul className='pl-8 mb-12'>
            <li className='mb-4 list-disc pl-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li className='list-disc pl-3'>Duis aute irure dolor in reprehenderit in voluptate veli</li>

        </ul>
        <a href="/about" className='bg-[--primary-color] rounded-full px-10 py-3 text-white text-sm hover:text-blue-300 transition duration-600'>Tìm hiểu thêm</a>
      </div>
      <div className='w-full gap-5 mb-10 lg:w-1/2 '>
        <img src={GeckoPoster.src} alt="GeckoPoster" className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}
