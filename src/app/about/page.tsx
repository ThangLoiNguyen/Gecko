import About from '@/components/About'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Giới thiệu"
        box=''
        link="/about" />
      <About
        buttonAbout=''
        />
    </div>
  )
}
