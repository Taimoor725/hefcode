'use client';

import { useEffect, useState } from 'react';


export default function Facts() {
  return (
    <section className="py-16 w-screen h-[60vh] flex justify-center items-center z-10 ">
      <div className="w-4/5 text-center flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold mb-6">
          Why Choose Us?
        </h2>
        <p className="text-xl mb-12">
          We exist to help companies optimize their operations with automated
          and personalized technological solutions that simplify processes and
          enhance sustainable growth in a safe way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <FactCard value="15" label="Years in the Industry" />
          <FactCard value="30" label="Countries Reached" />
          <FactCard value="200" label="Companies Onboarded" />
          <FactCard value="11000" label="Satisfied Users" />
          <FactCard value="60" label="Experienced Employees" />
        </div>
      </div>
    </section>
  );
}



const FactCard = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById(label);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setVisible(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [label]);
  
    useEffect(() => {
      if (visible) {
        let start = 0;
        const end = parseInt(value);
        if (start === end) return;
  
        let duration = 2000;
        let incrementTime = Math.abs(Math.floor(duration / end));
  
        let timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);
      }
    }, [visible, value]);
  
    return (
      <div
        id={label}
        className="bg-[#F3F7FE] shadow-lg rounded-2xl p-6 text-center w-[30rem] "
      >
        <h3 className="text-4xl font-bold text-green-600">{count}+</h3>
        <p className=" mt-2">{label}</p>
      </div>
    );
  };
  