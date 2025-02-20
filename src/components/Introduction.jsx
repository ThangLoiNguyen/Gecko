import React from 'react'
import PropTypes from 'prop-types'

function Introduction({title, box, link}) {
  return (
    <div className='flex-col h-80 w-full mb-32'>
        <div className='flex bg-[rgba(60,136,72,0.8)] items-center justify-center h-3/4'>
            <div className='prose px-2 flex flex-col gap-5'>
                <h2 className='text-center text-white text-[36pt] font-[700] uppercase'>{title}</h2>
                <p className='text-center text-white w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className='flex bg-[--primary-color] items-center h-1/4 justify-start px-5 md:px-16'>
            <a href="/" className='text-white text-lg font-semibold hover:underline'>Trang chủ</a>
            <div>{box}</div>
            <span className='text-white mx-2'> / </span>
            <a href='{link}' className='text-white text-lg font-semibold hover:underline'>{title}</a>
        </div>
      </div>
  )
}

Introduction.propTypes = {
    title: PropTypes.string,
}

export default Introduction

