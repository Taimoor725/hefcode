"use client"
import Button from '@/components/common/Button'
import useHefcodeStore from '@/store/HecodeStore'
import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/common/Footer'

function Page() {
    const { selectedProduct } = useHefcodeStore()

    // Make sure the selectedProduct exists before rendering
    if (!selectedProduct) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-screen h-auto flex flex-col gap-10'>
            <Landing product={selectedProduct} />
            <DetailsPage product={selectedProduct} />
        </div>
    )
}

export default Page

const Landing = ({ product }) => {
    console.log(product)
    const { color } = product;

    return (
        <div className='w-full h-[65vh] flex mt-28'>
            <div className='w-[55%] flex flex-col px-40 justify-center gap-10'>
                <Link href={'/product/'} className='w-auto h-auto'>
                <Button
                    className="w-[10rem] py-5 rounded-3xl font-bold text-xl bg-[#28DC86]"
                    text={"Go Back"}
                    iconbgcolor={"bg-[#1E225F]"}
                />
                </Link>
                <div className='w-full text-6xl font-bold'>
                    Empowering your startup’s growth with Hef Code — your effortless path to smart development solutions.
                </div>
            </div>

            <div className='w-[45%] flex justify-center items-center pt-10'>
                <div className={`w-[30rem] h-[30rem] relative _bg-[#28DC86] rounded-3xl`}>
                    <Image src={product.src} alt='1' width={600} height={600} className=' top-1/2 left-1/2 -translate-1/2 w-[70rem] absolute object-cover' />
                </div>
            </div>
        </div>
    )
}


const DetailsPage = ({ product }) => {
    return (
        <div className='w-screen flex justify-center mb-16'>

            <div className='w-3/4 h-[100vh] bg-[#F3F7FE] flex gap-5 rounded-3xl'>

                {/* relative div */}
                <div className='w-[40%] flex flex-col items-end px-10 py-20 gap-10 relative'>
                    <div className='w-auto ha-auto sticky top-20 right-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='text-4xl font-bold'>
                                In This Service
                            </div>
                            {product.details.map((item, index) => {
                                return (
                                    <div className='text-base font-normal flex gap-1' key={index}>
                                        <div>{index + 1}.</div>
                                        <div>{item.heading}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='font-bold text-lg   w-[15rem] mt-4'>Share with your community:</div>
                        <div className='flex w-[15rem] gap-4 h-[10rem] mt-4'>

                            <Link href={"#"}>
                                <FaFacebookF className='cursor-pointer text-3xl hover:text-[#28DC86] hover:scale-110 transition-transform' />
                            </Link>
                            <Link href={"#"}>
                                <FaInstagram className='cursor-pointer text-3xl hover:scale-110 hover:text-[#28DC86] transition-transform' />
                            </Link>
                            <Link href={"https://www.linkedin.com/company/hefcode/about/"}>
                                <FaLinkedinIn className='cursor-pointer text-3xl hover:scale-110 hover:text-[#28DC86] transition-transform' />
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='w-[60%] p-20'>
                    <div className='w-full h-full'>
                        {product.details.map((item, index) => {
                            return (
                                <div className='w-full flex flex-col gap-4' key={index}>
                                    <div className='text-4xl font-bold flex gap-1'>
                                        <div>{index + 1}.</div>
                                        <div>{item.heading}</div>
                                    </div>
                                    <div className='text-xl font-normal'>
                                        {item.content}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}