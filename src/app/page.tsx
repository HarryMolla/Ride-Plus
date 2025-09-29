import React from 'react'
import Hero from './sections/Hero'
import OurCustomer from '@/OurCustomer'
import Learn01 from '@/app/Learn01'
import Learn03 from './Learn03'

const page = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center bg-black'>
    <Hero/>
    <OurCustomer/>
    <Learn01/>
    <Learn03/>
    </div>
  )
}

export default page