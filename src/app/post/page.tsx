import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function PostPage() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Tin tức"
        box=''
        link="/post" />
    </div>
  )
}
