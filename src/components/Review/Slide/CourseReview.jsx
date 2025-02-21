'use client';
import React from 'react'
import Link from 'next/link'
import SlideReview from '../SlideReview'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CourseReview({ linkReview, title }) {
  const [Slide, setSlide] = React.useState([
    <SlideReview
      titleReview={
        <>
          <span className='items-center mb-2'>
            <Link href='/course'
              className='bg-[--secondary-color] items-center rounded-md px-8 py-2 text-white uppercase text-base font-bold hover:bg-[--primary-color]'>
              Course
            </Link>
          </span>
          <span className='text-lg font-semibold'>Kindy 3</span>
        </>
      }
    />,
    <SlideReview
      titleReview={
        <>
          <span className='items-center mb-2'>
            <Link href='/course'
              className='bg-[--secondary-color] items-center rounded-md px-8 py-2 text-white uppercase text-base font-bold hover:bg-[--primary-color]'>
              Course
            </Link>
          </span>
          <span className='text-lg font-semibold'>Kindy 4</span>
        </>
      }
    />,
    <SlideReview
      titleReview={
        <>
          <span className='items-center mb-2'>
            <Link href='/course'
              className='bg-[--secondary-color] items-center rounded-md px-8 py-2 text-white uppercase text-base font-bold hover:bg-[--primary-color]'>
              Course
            </Link>
          </span>
          <span className='text-lg font-semibold'>Kindy 5</span>
        </>
      }
    />
  ]);

  const rightRoll = () => {
    let newSlide = [...Slide];
    newSlide.push(newSlide.shift());
    setSlide(newSlide);
  }
  const leftRoll = () => {
    let newSlide = [...Slide];
    newSlide.unshift(newSlide.pop());
    setSlide(newSlide);
  }

  return (
    <div>
      <Link href={linkReview} className='flex flex-row items-center gap-5 mt-16 mx-4 xl:px-16'>
        <span className='text-lg text-[--primary-color] font-bold uppercase sm:text-xl md:text-3xl'>{title}</span>
        <span className='block h-1 w-40 bg-[--primary-color]'></span>
      </Link>
      <div className='relative flex flex-row gap-6 mt-10 mx-4 xl:px-16'>
        {Slide.map((item, index) =>
          <div key={index}>
            {item}</div>
        )}
        <div className='absolute top-1/2 justify-between flex w-full left-0 -translate-y-4'>
          <button className='ml-10'>
            <FontAwesomeIcon icon={faArrowLeft} className='bg-gray-600 text-xl px-2 py-1.5 hover:scale-125 duration-100 hover:text-[--secondary-color] rounded-full' onClick={leftRoll} />
          </button>
          <button className='mr-10'>
            <FontAwesomeIcon icon={faArrowRight} className='bg-gray-600 text-xl px-2 py-1.5 hover:scale-125 duration-100 hover:text-[--secondary-color] rounded-full' onClick={rightRoll} />
          </button>
        </div>
      </div>
    </div>
  )
}

CourseReview.propTypes = {

}

export default CourseReview

