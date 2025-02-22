import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import PostReview from '@/components/Review/Slide/PostReview'
import React from 'react'

export default function PostPage() {
  return (
    <div>
      <div>
        <Navigation />
        <Introduction
          title="Tin tức"
          box=''
          link="/post" />
      </div>
      <div className='-mt-24'>
        <PostReview
          linkReview=''
          titlePost='' />
      </div>
      <div className='mt-16'>
        <Footer />
      </div>
    </div>
  )
}
