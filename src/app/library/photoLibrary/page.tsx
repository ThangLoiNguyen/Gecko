import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function PhotoLibrary() {
    return (
        <div>
            <Navigation />
            <Introduction
                title="Thư viện hình ảnh"
                box={
                    <>
                        <span className='text-white mx-2'> / </span>
                        <span className='text-white text-lg font-semibold hover:underline'>Thư viện</span>
                    </>
                }
                link="/library/photoLibrary" />
        </div>
    )
}
