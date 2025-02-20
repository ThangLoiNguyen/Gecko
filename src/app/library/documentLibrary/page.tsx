import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function DocumentLibrary() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Thư viện tài liệu"
        box={
          <>
            <span className='text-white mx-2'> / </span>
            <span className='text-white text-lg font-semibold hover:underline'>Thư viện</span>
          </>
        }
        link="/library/documentLibrary" />
    </div>
  )
}
