import React from 'react'
import Hero from './sections/Hero'
import OurCustomer from '@/OurCustomer'

const page = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center bg-black'>
    <Hero/>
    <OurCustomer/>
    </div>
  )
}

export default page