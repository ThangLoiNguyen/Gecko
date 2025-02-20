import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <div>
      <Navigation/>
      <Introduction 
      title="Liên hệ" 
      box=''
      link="/contact" />
    </div>
    </div>
  )
}
