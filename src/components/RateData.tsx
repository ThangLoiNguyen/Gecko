'use client';
import React from 'react'
import Slider from 'react-slick';
import ParentReview from '@/assets/parent-review.webp'
export default function RateData() {
    var settings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    const dataRate = [
        { name: 'James', rate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
        { name: 'James', rate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
        { name: 'James', rate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
        { name: 'James', rate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
        { name: 'James', rate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    ]
    return (
        <div>
            <div className='flex flex-row items-center gap-5 mt-16 mx-4 xl:px-16'>
                <span className='text-lg text-[--primary-color] font-bold uppercase sm:text-xl md:text-3xl'>Đánh giá của phụ huynh</span>
                <span className='block h-1 w-40 bg-[--primary-color]'></span>
            </div>
            <div className='lg:mx-20 md:mx-10 my-10'>
                <Slider {...settings}>
                    {dataRate.map(({ name, rate }, index) => (
                        <div key={index}>
                            <div className=' relative flex flex-col gap-2 mx-10 border rounded-xl'>
                                <img src={ParentReview.src} alt="Parent Review" className='absolute h-20 w-20 top-16 lg:top-1/2 translate-y-[-50%] -left-6 rounded-lg' />
                                <div className=' flex flex-col pl-20 pr-5 py-5'>
                                <span className='text-lg font-bold'>{name}</span>
                                <span className='text-sm'>{rate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
