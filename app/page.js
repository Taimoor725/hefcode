
import Navbar from '@/components/common/Navbar'
import { InfiniteMovingCardsDemo } from '@/components/home/InfiniteMovingCardsDemo'
import Landing from '@/components/home/Landing'
import RotatingCards from '@/components/home/RotatingCards'
import React from 'react'

import CardsPage from '@/components/home/CardsPage'
import Facts from '@/components/home/Facts'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import Footer from '@/components/common/Footer'

function page() {
    return (
        <div className='overflow-hidden'>
            <Landing />
            <InfiniteMovingCardsDemo />
            <RotatingCards />
            <Details />
            <CardsPage/>
            <Facts/>
            <TestimonialSlider/>
            {/* <Footer/> */}
        </div>
    )
}

export default page








const Details = () => {
    return (
        <div className='w-screen h-[40vh] flex flex-col justify-center items-center gap-5 z-10'>
            <div className='text-6xl font-bold'>
                Our suite of intelligent products
            </div>
            <div className='w-1/2 text-2xl font-normal'>
                At Hefcode, we provide ready-to-use products and services with no development time—just install the tool you need and start using it right away.  
                If you require a more customized solution, we also offer tailored services to ensure all your specific needs are met.
            </div>
        </div>
    )
}




