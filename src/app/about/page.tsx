import About from '@/components/About'
import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <div>
        <Navigation />
        <Introduction
          title="Giới thiệu"
          box=''
          link="/about" />
        <About
          buttonAbout=''/>
      </div>
      <div className='mt-16'>
        <Footer />
      </div>
    </div>
  )
}
