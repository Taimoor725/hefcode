"use client"
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function Landing() {
    return (
        <div className='w-screen h-screen flex bg-white pt-40 '>
            <div className='w-1/2 h-full'>
                <TextSection />
            </div>
            <div className="w-1/2 p-5">
                <Image src={"/home/mangment.svg"} width={700} height={700} alt="mangment" className="w-full object-cover"/>
            </div>
        </div>
    )
}

export default Landing


const TextSection = () => {
    return (
        <div className='w-full h-full relative text-color font-semibold text-7xl flex flex-col justify-center gap-20 items-center'>
            <div className="absolute h-3 w-3/4 bottom-[52%] z-0">
                    <Image src={"/line.svg"} alt="line" width={200} height={200} className="w-full h-full object-cover"/>
                </div>
            <div className="w-3/4 z-10 text-8xl">
                Build a secure <br/>and automated environment
            </div>
            <div className='text-lg font-semibold w-3/4'>
            We exist to help companies optimize their operations with automated and personalized technological solutions that simplify processes and enhance their sustainable growth in a safe way.
            </div>
            <div className="w-3/4">
                <Button text={"Explore"} />
            </div>
        </div>
    )
}






function Button({ text, className }) {
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);
    const iconRef = useRef(null);
    const cursorPosition = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);
    const [width,setWidth]=useState(5)
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isHovered || !buttonRef.current) return;
        const buttonRect = buttonRef.current.getBoundingClientRect();
        cursorPosition.current = {
          x: e.clientX - buttonRect.left - buttonRect.width + 50, // Adjusted position
          y: e.clientY - buttonRect.top - buttonRect.height / 2,
        };
      };
  
      const smoothFollow = () => {
        if (!iconRef.current) return;
        iconRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`;
        animationFrame.current = requestAnimationFrame(smoothFollow);
      };
  
      if (isHovered) {
        window.addEventListener("mousemove", handleMouseMove);
        animationFrame.current = requestAnimationFrame(smoothFollow);
        setWidth(10)
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrame.current);
        if (iconRef.current) {
          iconRef.current.style.transform = "translate(0, 0)";
        }
        setWidth(5)
      }
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrame.current);
      };
    }, [isHovered]);
  
    return (
      <div
        ref={buttonRef}
        className={`relative flex items-center px-5 overflow-hidden text-lg font-bold w-[25rem] h-[5rem] rounded-full bg-[#5ce6b3] text-[#181056] cursor-pointer transition-transform duration-100 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <div
          ref={iconRef}
          className={`absolute bg-white rounded-full flex items-center justify-center right-2 transition-transform p-5`}
        >
          <FaArrowRight className="text-[#181056]" />
        </div>
      </div>
    );
  }
  



