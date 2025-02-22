'use client';
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import SlideReview from '../SlideReview'
import PropTypes from 'prop-types'
import { li } from 'framer-motion/client';

function PostReview({ linkReview, titlePost }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const dataPost = [
    { title: 'Merry Christmas', date: '01/12/2025' },
    { title: 'Merry Christmas', date: '01/12/2025' },
    { title: 'Merry Christmas', date: '01/12/2025' }
  ]
  return (
    <div>
      <Link href={linkReview} className='flex flex-row items-center gap-5 mt-16 mx-4 xl:px-16'>
        {titlePost}
      </Link>
      <div className='px-4 py-10 xl:px-16'>
      <Slider {...settings}>
        {dataPost.map(({title, date}, index) =>
        <div key={index} className='px-3'>
          <SlideReview titleReview={
            <>
              <span className='text-lg font-semibold hover:text-[--primary-color] cursor-pointer'>{title}</span>
              <span className='text-sm'>{date}</span>
            </>
          } />
        </div> 
        )}
      </Slider>
      </div>
    </div>
  )
}

PostReview.propTypes = {
  linkReview: PropTypes.string,
  titlePost: PropTypes.string
}

export default PostReview

