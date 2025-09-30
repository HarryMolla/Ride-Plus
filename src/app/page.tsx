import React from 'react'
import Hero from './sections/Hero'
import OurCustomer from '@/OurCustomer'
import Learn01 from '@/app/Learn01'
import Learn03 from './Learn03'
import Learn02 from './Learn02'
import Learn04 from './Learn04'

const page = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center bg-black'>
    <Hero/>
    <OurCustomer/>
    <Learn01/>
    <Learn02/>
    <Learn03/>
    <Learn04/>
    </div>
  )
}

export default page