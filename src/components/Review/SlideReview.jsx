import React from 'react'
import GeckoPoster from '@/assets/gecko-introduction.webp'
import PropTypes from 'prop-types'

function SlideReview({titleReview}) {
    return (
        <div className='border rounded-lg overflow-hidden h-96'>
            <img src={GeckoPoster.src} alt="GeckoPoster" className='object-cover h-1/2 w-full' />
            <div className='flex flex-col mt-5 mx-5 gap-2 mb-10 h-1/2'>
                {titleReview}
                <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>
        </div>
    )
}

SlideReview.propTypes = {

}

export default SlideReview

