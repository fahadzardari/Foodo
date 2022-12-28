import React from 'react'
import SpecialMenuGrid from '../components/SpecialMenuGrid'

export default function SpecialMenu() {
  return (
    <div className='text-center mt-4'>
         <h1 className='text-lg md:text-4xl font-extrabold mb-4'>
            Our Special Menu
        </h1>
        <p className='text-sm md:text-xl md-4 mb-8 block max-w-[50%] mx-auto'>
            It is a long established fact that a reader will be distracted by readable content
            <br />
            when looking at it's layout
        </p>

        <SpecialMenuGrid />
    
    </div>
  )
}
