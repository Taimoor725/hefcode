import React from 'react'
import Image from 'next/image'

function Landing() {
    return (
        <div className='w-screen h-screen'>
            <div className='top-[50%] -translate-y-1/2 absolute left-[10%] w-[60rem] flex flex-col gap-20'>
                <div className=' text-9xl'>
                    Mastering the marketing maze
                </div>
                <div className='text-lg w-1/2 text-[#28DC86]'>
                    From innovative digital strategies to emerging trends and consumer behavior, we delve into the ever-evolving world of marketing.
                </div>
            </div>
            <div className=' absolute top-1/2 -translate-y-1/2 right-[10%]'>
                <Image src={"/home/gifs/blocks.gif"} alt='blocks' width={1000} height={1000} className='w-[40rem] h-[40rem] object-cover' />
            </div>
        </div>
    )
}

export default Landing