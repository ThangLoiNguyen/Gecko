import About from '@/components/About'
import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import RateData from '@/components/RateData'
import TotalData from '@/components/TotalData'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Giới thiệu"
        box=''
        link="/about" />
      <About
        buttonAbout='' />
      <div className='flex lg:flex-row flex-col gap-5 mx-16 my-10'>
        <div className='flex flex-1 flex-col gap-5 bg-[--primary-color] p-10'>
          <span className='text-xl font-bold'>Voluptatem dignissimos provident</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit.</span>
        </div>
        <div className=' flex flex-[3] flex-row gap-5'>
          <div className=' flex flex-col border px-3 lg:py-20 py-5 text-center items-center'>
            <span className='flex h-16 w-16 rounded-full bg-[--secondary-color] mb-10'></span>
            <span className='text-xl font-bold'>Voluptatem dignissimos provide</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit. Lorem ipsum dolor sit amet, consectetur adipiscing eli</span>
          </div>
          <div className=' flex flex-col border px-3 lg:py-20 py-5 text-center items-center'>
            <span className='flex h-16 w-16 rounded-full bg-[--secondary-color] mb-10'></span>
            <span className='text-xl font-bold'>Voluptatem dignissimos provide</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit. Lorem ipsum dolor sit amet, consectetur adipiscing eli</span>
          </div>
          <div className=' flex flex-col border px-3 lg:py-20 py-5 text-center items-center'>
            <span className='flex h-16 w-16 rounded-full bg-[--secondary-color] mb-10'></span>
            <span className='text-xl font-bold'>Voluptatem dignissimos provide</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tate velit. Lorem ipsum dolor sit amet, consectetur adipiscing eli</span>
          </div>
        </div>
      </div>
      <div>
        <TotalData />
      </div>
      <div>
        <RateData />
      </div>
      <div className='mt-28'>
        <Footer />
      </div>
    </div>
  )
}
