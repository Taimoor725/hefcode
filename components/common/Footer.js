import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
    return (
        <div className='w-screen flex justify-center items-end'>
            <div className='w-full md:w-3/4 h-auto md:h-[40vh] flex flex-col md:flex-row rounded-t-3xl bg-[#f3f7fe]'>

                <div className='w-full md:w-1/2 flex flex-col justify-between p-6'>
                    <div className='flex gap-2 items-center text-2xl md:text-3xl font-bold'>
                        <Image
                            src={"/logo.png"}
                            alt='logo'
                            width={400}
                            height={400}
                            className='w-16 h-16 md:w-24 md:h-24 object-cover'
                        />
                        HEFCODE
                    </div>

                    <div className='flex items-center gap-4 h-10 text-4xl mt-6 px-4 py-2 rounded-lg w-full'>

                        <Link href={"#"}>
                            <FaFacebookF className='cursor-pointer hover:text-[#28DC86] hover:scale-110 transition-transform' />
                        </Link>
                        <Link href={"#"}>
                            <FaInstagram className='cursor-pointer hover:scale-110 hover:text-[#28DC86] transition-transform' />
                        </Link>
                        <Link href={"https://www.linkedin.com/company/hefcode/about/"}>
                            <FaLinkedinIn className='cursor-pointer hover:scale-110 hover:text-[#28DC86] transition-transform' />
                        </Link>
                    </div>

                    {/* Footer Text */}
                    <div className='text-sm md:text-lg pt-6 lg:pl-5 md:pb-10'>
                        2025 © by HEFCODE, all rights reserved
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col items-end px-10 py-6 gap-8'>
                    <div className='flex flex-col gap-10 text-right items-end w-full'>
                        <div className='flex flex-col gap-3 text-base md:text-xl font-semibold'>
                            <div className='cursor-pointer'>info@hefcode.com</div>
                            <div className='cursor-pointer'>Terms & Conditions</div>
                            <div className='cursor-pointer'>Privacy Policy</div>
                        </div>

                        <div className='text-2xl md:text-3xl font-semibold'>
                            Certified Expertise
                        </div>

                        <div className='flex gap-4 justify-end flex-wrap'>
                            {['aws', 'azure', 'kubernetes'].map((img, index) => (
                                <div
                                    key={index}
                                    className='w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white flex justify-center items-center p-2'
                                >
                                    <Image
                                        src={`/partner/${img}.svg`}
                                        alt={`${img} partner`}
                                        width={300}
                                        height={300}
                                        className='w-12 h-12 md:w-16 md:h-16 object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
