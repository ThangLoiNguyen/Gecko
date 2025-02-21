import React from 'react'
import GeckoPoster from '@/assets/gecko-introduction.webp'
import PropTypes from 'prop-types'
import Link from 'next/link'

function SlideReview({ course , linkToCourse }) {
    return (
        <div className='border rounded-lg overflow-hidden'>
            <img src={GeckoPoster.src} alt="GeckoPoster" className='object-cover' />
            <div className='flex flex-col mt-5 mx-5 gap-2 mb-10'>
                <span className='items-center mb-2'>
                    <Link href={linkToCourse} 
                    className='bg-[--secondary-color] items-center rounded-md px-8 py-2 text-white uppercase text-base font-bold hover:bg-[--primary-color]'>
                        Course
                    </Link>
                </span>
                <span className='text-lg font-semibold'>{course}</span>
                <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>
        </div>
    )
}

SlideReview.propTypes = {

}

export default SlideReview

