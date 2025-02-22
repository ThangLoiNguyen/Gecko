'use client';
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import SlideReview from '../SlideReview'
import { title } from 'process';

function CourseReview({ linkReview, titleCourse }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const dataCourse = [
    title = 'Kindy 3',
    title = 'Kindy 4',
    title = 'Kindy 5'
  ]
  return (
    <div>
      <Link href={linkReview} className='flex flex-row items-center gap-5 mt-16 mx-4 xl:px-16'>
        {titleCourse}
      </Link>
      <div className='px-4 py-10 xl:px-16 gap-3'>
        <Slider {...settings}>
          {dataCourse.map((title, index) =>
            <div key={index} className='px-3'>
              <SlideReview titleReview={
                <>
                  <span className='items-center mb-2'>
                    <Link href='/course'
                      className='bg-[--secondary-color] items-center rounded-md px-8 py-2 text-white uppercase text-base font-bold hover:bg-[--primary-color]'>
                      Course
                    </Link>
                  </span>
                  <span className='text-lg font-semibold'>{title}</span>
                </>
              } />
            </div>)}
        </Slider>
      </div>
    </div>
  )
}

CourseReview.propTypes = {

}

export default CourseReview

