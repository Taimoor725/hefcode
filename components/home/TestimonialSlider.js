'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
    { name: 'Safety', text: 'Ensuring data protection and compliance with industry standards.' },
    { name: 'Automation', text: 'Streamlining operations with Infrastructure as Code (IaC), CI/CD pipelines, and automated monitoring.' },
    { name: 'Optimization', text: 'Improving cloud performance by optimizing resource allocation and scaling.' },
    { name: 'Best Practices', text: 'Following proven methodologies to ensure reliability and scalability.' },
    { name: 'Cost-efficient', text: 'Reducing costs by optimizing resources and eliminating waste.' },
];

export default function TestimonialSlider() {
    return (
        <div className="w-screen h-[130vh] bg-white py-10 z-[999999] overflow-hidden flex flex-col gap-32 justify-center items-center" id='about'>
            {/* Top Row Scrolls Left */}

            <div className='w-full flex flex-col justify-center items-center'>
                <div className='text-5xl font-bold'>What makes us unique?</div>
                <div className='text-2xl font-light w-2/3'>Our goal is to simplify processes, reduce costs, and optimize resources by providing you with creative, secure, and efficient tools that eliminate the need for dedicated technical staff. With a combination of experience, creativity, and problem-solving, we offer fast and effective solutions that adapt to your needs. Each product and service is designed to be user-friendly, efficient, and adaptable, allowing your team to focus on strategic activities that drive the growth of your business.</div>
            </div>
            <div className='flex items-center flex-col'>
                <div className='text-5xl font-bold'>Our Expertise</div>
                <div className='w-2/3 text-2xl'>We provide innovative automation solutions that reduce costs, eliminate errors, and empower non-tech teams. Our focus: security, efficiency, and organization for informed, cost-effective decisions with less tech reliance.</div>
            </div>
            <Scroll testimonials={testimonials} animation="animate-left" />
        </div>
    );
}

const Scroll = ({ testimonials, animation }) => {
    const [isHovered, setIsHovered] = useState(false);

    const extendedTestimonials = [
        ...testimonials,
        ...testimonials,
        ...testimonials,
        ...testimonials
    ];

    return (
        <div
            className="flex gap-6 group z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex flex-nowrap gap-6 w-max ${animation}`}
                style={{
                    animationPlayState: isHovered ? 'paused' : 'running',
                }}
            >
                {extendedTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-[18rem] _h-[23rem] bg-[#F3F7FE] shadow-lg rounded-xl p-5 text-center shrink-0"
                    >
                        <h3 className="font-bold text-3xl">{testimonial.name}</h3>
                        <p className="text-lg font-normal mt-8 h-[13rem] text-start">{testimonial.text}</p>
                    </div>
                ))}
            </div>

            <div
                className={`flex flex-nowrap gap-6 w-max ${animation}`}
                style={{
                    animationPlayState: isHovered ? 'paused' : 'running',
                }}
            >
                {extendedTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-[18rem] _h-[23rem] bg-[#F3F7FE] shadow-lg rounded-xl p-5 text-center shrink-0"
                    >
                        <h3 className="font-bold text-3xl">{testimonial.name}</h3>
                        <p className="text-lg font-normal h-[13rem] mt-8 text-start">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
