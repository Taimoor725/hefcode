"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";

function RotatingCards() {
    const circleRef = useRef(null);
    const [isHoveredPink, setIsHoveredPink] = useState(false);
    const [isHoveredBlue, setIsHoveredBlue] = useState(false);
    const [isHoveredYellow, setIsHoveredYellow] = useState(false);
    const [opacity,setOpacity]=useState(["opacity-0","opacity-0","opacity-0"])
    useEffect(()=>{
        if(isHoveredBlue){
            setTimeout(() => {
                setOpacity(["opacity-0","opacity-100","opacity-0"])
            }, 300);
        }else{
            if(isHoveredYellow){
                setTimeout(() => {
                    setOpacity(["opacity-0","opacity-0","opacity-100"])
                }, 300);
            }
        }

        if(isHoveredPink){
            setTimeout(() => {
                setOpacity(["opacity-100","opacity-0","opacity-0"])
            }, 300);
        }
    },[isHoveredBlue,isHoveredPink,isHoveredYellow])


    useEffect(() => {
        const handleScroll = () => {
            if (circleRef.current) {
                const rotation = window.scrollY * -0.1; // Counterclockwise rotation
                circleRef.current.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-screen h-[60vh] relative z-0">
            <Image src={"/home/cards/centerimg.webp"} width={400} height={400} alt="cards" className="w-24 h-24 object-cover absolute left-1/2 bottom-10 -translate-x-1/2"/>
            <div className="w-[200rem] h-[200rem] absolute -bottom-[270vh] left-1/2 -translate-x-1/2 flex justify-center items-center z-0">
                <div ref={circleRef} className="text-color w-full h-full rounded-full border-dotted border-2 relative">
                    
                    <div
                        className="w-40 h-40 rounded-full bg-[#f3f7fe] p-4 absolute top-1/2 -translate-y-[40%] flex justify-center items-center transition-all duration-300 ease-in-out rotate-[105deg]"
                        style={{
                            right: isHoveredPink ? "-200px" : "-5rem",
                            width: isHoveredPink ? "500px" : "160px",
                        }}
                        onMouseEnter={() => setIsHoveredPink(true)}
                        onMouseLeave={() => setIsHoveredPink(false)}
                    >
                        <Image 
                            src={"/home/cards/img1.svg"} 
                            width={400} 
                            height={400} 
                            alt="HOME"
                            className="w-20 h-20 object-cover mx-auto"
                        />
                        {isHoveredPink && (
                            <div className={` ${opacity[0]} flex flex-col ml-2`}>
                                <span className="font-bold">SERVICES</span>
                                <span>At Hefcode we have the option to install the tool in our server</span>
                                <Button/>
                            </div>
                        )}
                    </div>

                    <div
                        className="w-40 h-40 flex bg-[#f3f7fe] justify-center items-center p-4 rounded-full absolute top-1/2 translate-y-[230%] transition-all duration-300 ease-in-out -rotate-[255deg]"
                        style={{
                            right: isHoveredBlue ? "-200px" : "-1.5rem",
                            width: isHoveredBlue ? "500px" : "160px",
                        }}
                        onMouseEnter={() => setIsHoveredBlue(true)}
                        onMouseLeave={() => setIsHoveredBlue(false)}
                    >
                        <Image 
                            src={"/home/cards/img2.svg"} 
                            width={400} 
                            alt="HOME"
                            height={400} 
                            className="w-20 h-20 object-cover mx-auto"
                        />
                        {isHoveredBlue && (
                            <div className={` ${opacity[1]} flex flex-col ml-2`}>
                                <span className="font-bold">PRODUCTS</span>
                                <span>The products are installed directly in your insfrastructure and its prepared to be maintain by your company.</span>
                                <Button/>
                            </div>
                        )}
                    </div>

                    <div
                        className="w-40 h-40 bg-[#f3f7fe] flex justify-center items-center p-4 rounded-full absolute top-1/2 translate-y-[470%] transition-all duration-300 ease-in-out rotate-[105deg] z-10"
                        style={{
                            right: isHoveredYellow ? "0rem" : "10rem",
                            width: isHoveredYellow ? "500px" : "160px",
                        }}
                        onMouseEnter={() => setIsHoveredYellow(true)}
                        onMouseLeave={() => setIsHoveredYellow(false)}
                    >
                        <Image 
                            src={"/home/cards/img3.svg"} 
                            alt="HOME"
                            width={400} 
                            height={400} 
                            className="w-20 h-20 object-cover mx-auto"
                        />
                        {isHoveredYellow && (
                            <div className={` ${opacity[2]} flex flex-col ml-2  `}>
                                <span className="font-bold">CUSTOMIZE SOLUTION</span>
                                <span>we take your problem and provide a creative, secure, cost efficientand automated solution</span>
                                <Button/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RotatingCards;



const Button=()=>{
return(
    <button className="w-[10rem] py-4 rounded-full font-bold flex justify-center items-center bg-[#28DC86]">
        Contact Us
    </button>
)
}