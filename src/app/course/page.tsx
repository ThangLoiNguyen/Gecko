import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import CourseReview from '@/components/Review/Slide/CourseReview'
import React from 'react'

export default function CoursePage() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Khoá học"
        box=''
        link="/course" />
      <div className='-mt-24 '>
        <CourseReview
          linkReview=''
          titleCourse=''
        />
      </div>
      <div className='mt-16'>
        <Footer />
      </div>
    </div>
  )
}

