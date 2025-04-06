'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Isabel Brosseau',
    position: 'IT Quality System Owner',
    img: '/home/feedback/user (1).jpg',
    text: 'We chose to work with Montrium due to their expertise in the regulatory and technology landscape...'
  },
  {
    name: 'Patrick Bailey',
    position: 'Director of Quality',
    img: '/home/feedback/user (2).jpg',
    text: 'Document control can be an extraordinarily complex process, so we looked for a system that could automate...'
  },
  {
    name: 'Kimberly Swint',
    position: 'Manager of Clinical Trials Documentation',
    img: '/home/feedback/user (3).jpg',
    text: 'We have been extremely pleased with the guidance that we are being provided. We understood that it would be very important...'
  },
  {
    name: 'Margaret Farrell',
    position: 'Director of Quality Assurance',
    img: '/home/feedback/user (6).jpg',
    text: 'We really wanted a company to partner with who had that experience in our space, who understood the industry...'
  },
  {
    name: 'Sonette O’Reilly',
    position: 'Document Control Specialist',
    img: '/home/feedback/user (5).jpg',
    text: 'The biggest impact that Quality Connect has had on my day-to-day is managing review workflows hassle-free...'
  }
];

export default function TestimonialSlider() {
  return (
    <div className="w-screen h-[150vh] bg-white py-10 z-[999999] overflow-hidden flex flex-col gap-32 justify-center items-center">
      {/* Top Row Scrolls Left */}

      <div className='w-full text-5xl font-bold flex justify-center items-center'>
      Feedback from our partners and clients
      </div>
      <Scroll testimonials={testimonials} animation="animate-left" />

      {/* Bottom Row Scrolls Right */}
      <Scroll testimonials={testimonials} animation="animate-right" />
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
  ]; // TRIPLE the elements

  return (
    <div
      className="flex gap-6 group z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-nowrap gap-6 w-max ${animation}`}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running', // Pauses animation on hover
        }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[18rem] h-[23rem] bg-[#F3F7FE] shadow-lg rounded-xl p-5 text-center shrink-0"
          >
            <p className="text-xl font-normal h-[75%] text-start">{testimonial.text}</p>
            <div className="flex justify-between items-center gap-4 mt-4">
              <Image
                src={testimonial.img}
                width={300}
                height={300}
                alt="testimonial"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col justify-center items-start w-full">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm h-[2rem] text-start">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`flex flex-nowrap gap-6 w-max ${animation}`}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running', // Pauses animation on hover
        }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[18rem] h-[23rem] bg-[#F3F7FE] shadow-lg rounded-xl p-5 text-center shrink-0"
          >
            <p className="text-xl font-normal h-[75%] text-start">{testimonial.text}</p>
            <div className="flex justify-between items-center gap-4 mt-4">
              <Image
                src={testimonial.img}
                width={300}
                height={300}
                alt="testimonial"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col justify-center items-start w-full">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm h-[2rem] text-start">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

