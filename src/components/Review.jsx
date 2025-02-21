import React from 'react'
import Link from 'next/link'
import SlideReview from './SlideReview'
import PropTypes from 'prop-types'

function Review({ linkReview, title }) {
  return (
    <div>
      <Link href={linkReview} className='flex flex-row items-center gap-5 mt-16 mx-4 xl:px-16'>
        <span className='text-lg text-[--primary-color] font-bold uppercase sm:text-xl md:text-3xl'>{title}</span>
        <span className='block h-1 w-28 bg-[--primary-color]'></span>
      </Link>
      <div className='flex flex-row gap-6 mt-10 mx-4 xl:px-16'>
        
        <SlideReview
          course='Kindy 3'
          linkToCourse='/course'
        />
        <SlideReview
          course='Kindy 4'
          linkToCourse='/course'
        />
        <SlideReview
          course='Kindy 5'
          linkToCourse='/course'
        />
      </div>
    </div>
  )
}

Review.propTypes = {

}

export default Review

