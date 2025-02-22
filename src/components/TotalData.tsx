import React from 'react'

export default function TotalData() {
    return (
        <div className='flex justify-around bg-[#f9f9f9] w-full py-10 md:px-16'>
            <div className=' flex flex-col gap-2 items-center'>
                <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>1010</span>
                <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Học sinh</span>
            </div>
            <div className=' flex flex-col gap-2 items-center'>
                <span className='text-[--primary-color]  font-bold text-3xl sm:text-5xl'>12</span>
                <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Khóa học</span>
            </div>
            <div className=' flex flex-col gap-2 items-center'>
                <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>24</span>
                <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Sự kiện</span>
            </div>
            <div className=' flex flex-col gap-2 items-center'>
                <span className='text-[--primary-color] font-bold text-3xl sm:text-5xl'>24</span>
                <span className='text-[--primary-color] text-gray-400 text-lg sm:text-xl'>Giảng viên</span>
            </div>
        </div>
    )
}
