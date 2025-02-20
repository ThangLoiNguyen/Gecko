import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function CoursePage() {
  return (
    <div>
      <Navigation/>
      <Introduction 
      title="Khoá học" 
      box=''
      link="/course" />
    </div>
  )
}

