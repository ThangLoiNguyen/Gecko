import About from '@/components/About'
import Navigation from '@/components/Navigation'
import Slider from '@/components/Slider'
import React from 'react'

export default function HomePage() {
    return (
        <div className="font-sans w-full">
            <Navigation />
            <Slider />
            <About />
        </div>
    )
}
