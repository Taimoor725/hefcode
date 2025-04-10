
import Navbar from '@/components/common/Navbar'
import { InfiniteMovingCardsDemo } from '@/components/home/InfiniteMovingCardsDemo'
import Landing from '@/components/home/Landing'
import RotatingCards from '@/components/home/RotatingCards'
import React from 'react'

import CardsPage from '@/components/home/CardsPage'
import Facts from '@/components/home/Facts'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import Footer from '@/components/common/Footer'
import Image from 'next/image'
import WhyToDoAutomation from '@/components/home/Automation'
import About from '@/components/home/About'

function page() {
    return (
        <div className='overflow-hidden'>
            <Landing />
            {/* <InfiniteMovingCardsDemo /> */}
            {/* <RotatingCards /> */}
            <Details />
            {/* <CardsPage/> */}
            {/* <Facts/> */}
            {/* <Footer/> */}
            <div className='my-10'>
            <WhyToDoAutomation/>
            </div>
            <TestimonialSlider/>
        </div>
    )
}

export default page








const Details = () => {
    return (
        <div className='w-screen h-auto flex flex-col justify-center items-center gap-5 z-10'>
            <div className='w-3/4 h-3/4 bg-[#F3F7FE] rounded-3xl flex flex-col items-center p-10 gap-20 mt-20'>
                <div className='flex flex-col items-center w-full gap-4'>
                    <div className='text-7xl font-bold mt-10'>
                        What we Offer
                    </div>
                    <div className='text-4xl w-2/3'>At Hefcode, we help you build a secure and automated environment so your business runs smoothly and efficiently.</div>
                    <div className='w-2/3 text-2xl font-normal'>
                        We offer ready-to-use products and services with zero development time. Just tell us what you need, and we’ll install the right tools — you're up and running instantly.
                        Need something more specific? We also provide custom solutions tailored to your exact requirements. Whatever your goals are, we’ve got you covered
                    </div>
                </div>


                <div className='w-full h-[50vh] bg-white rounded-3xl flex'>
                    <div className='w-1/2 h-full p-5 flex flex-col gap-5 '>
                        <div className='text-5xl font-bold'>Our Services</div>
                        <div className='text-2xl font-light'>At Hefcode, we help your business run smoothly with a secure and automated setup that works right out of the box.
                        <br/>We offer ready-to-use tools that can be installed instantly no development time. Just tell us what you need, and we’ll handle the rest.
                        <br/>You also have the option to have the tool installed on our secure servers. We take care of the hosting, updates, and everything technical, so you don’t have to worry about a thing. Plus, we provide dedicated support to help your team every step of the way.
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                        <Image src={"/home/img10.svg"} alt='services' width={500} height={500} className=''/>
                    </div>
                </div>

                <div className='w-full h-[50vh] bg-white rounded-3xl flex'>
                    
                    <div className='w-1/2 h-full flex justify-center items-center'>
                        <Image src={"/home/product.svg"} alt='product'  width={500} height={500} className=''/>
                    </div>

                    <div className='w-1/2 h-full p-5 flex flex-col gap-5 '>
                        <div className='text-5xl font-bold'>Products</div>
                        <div className='text-2xl font-light'>Our products are installed directly on your own infrastructure and are set up so your team can easily manage and maintain them. We make sure everything runs smoothly from the start, giving you full control and flexibility.</div>
                    </div>
                </div>


                <div className='w-full h-[50vh] bg-white rounded-3xl flex'>
                    <div className='w-1/2 h-full p-5 flex flex-col gap-5 '>
                        <div className='text-5xl font-bold'>Custom Solutions</div>
                        <div className='text-2xl font-light'>At Hefcode, we know every business is different. If you need more than our ready-to-use tools, we offer custom solutions tailored to your exact needs.
                            <br/>Whether it’s hosting, solving a specific problem, or building a system from scratch — we take the time to understand your goals and deliver a secure, automated, cost-efficient solution.
                            <br/>From setup to support, we handle everything so you can focus on your business.
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                        <Image src={"/home/solution.svg"} alt='solutions'  width={500} height={500} className='object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}




