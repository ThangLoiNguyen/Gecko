import React from 'react'
import GeckoPoster from '@/assets/gecko-introduction.webp'

function About({buttonAbout}) {
  return (
    <div className='flex justify-between flex-col-reverse gap-5 lg:flex-row px-3 my-16 md:mx-0 lg:mx-1 xl:mx-0 xl:px-16'>
      <div className=' w-full mt-10 px-4 sm:px-0 lg:w-1/2 lg:mt-0'>
        <h1 className='font-bold text-2xl mb-5 w-[90%]'>Voluptatem dignissimos provident quasi corporis Voluptatem dignissimos</h1>
        <p className='mb-5 w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul className='pl-8 mb-10'>
            <li className='mb-4 list-disc pl-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li className='list-disc pl-3'>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        </ul>
        {buttonAbout}
      </div>
      <div className='w-full lg:w-1/2 '>
        <img src={GeckoPoster.src} alt="GeckoPoster" className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}

About.propTypes = {

}

export default About


