import React from 'react'
import Hero from './sections/Hero'
import OurCustomer from '@/OurCustomer'
import Learn from '@/app/Learn01'

const page = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center bg-black'>
    <Hero/>
    <OurCustomer/>
    <Learn/>
    </div>
  )
}

export default page