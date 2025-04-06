import React from 'react';
import Image from 'next/image';

const NewsletterSignup = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

    <div 
      className="w-3/4 h-3/4 rounded-3xl px-4 md:px-8 lg:px-16 flex justify-center items-center"
      style={{
        background: 'linear-gradient(to right, #28DC86, #1AAB7B)' 
      }}
    >
      <div className="w-2/3 h-2/3 bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-evenly">
        {/* <div className="absolute top-6 left-6 w-8 h-12 bg-[#28DC86] rounded-md"></div>  */}
        <Image src={"res/blog/contct.svg"} width={500} height={500} alt='contact-svg' className='w-[10rem]'/>
 
        <h2 className="lg:text-6xl text-4xl font-bold text-center mb-8">
          Get our best content delivered straight to your inbox
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address..." 
            className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#28DC86] text-gray-700" 
          />
          <button className="bg-[#28DC86] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
            Subscribe
            <span className="text-xl">→</span> 
          </button>
        </div>
      </div>
    </div>
    </div>

  );
};

export default NewsletterSignup;