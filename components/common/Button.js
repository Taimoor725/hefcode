import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

function Button({ text, className, iconbgcolor }) {
  const [isHovered, setIsHovered] = useState(false);
  const arrowRef = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const arrowPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovered) return;
      const buttonRect = e.target.getBoundingClientRect();
      cursorPosition.current = {
        x: e.clientX - buttonRect.left,
        y: e.clientY - buttonRect.top,
      };
    };

    const smoothFollow = () => {
      if (!arrowRef.current) return;

      const currentX = arrowPosition.current.x;
      const currentY = arrowPosition.current.y;
      const targetX = cursorPosition.current.x - 48; // Center of the icon
      const targetY = cursorPosition.current.y - 48;

      arrowPosition.current.x += (targetX - currentX) * 0.1; // Smooth easing
      arrowPosition.current.y += (targetY - currentY) * 0.1;

      arrowRef.current.style.transform = `translate(${arrowPosition.current.x}px, ${arrowPosition.current.y}px)`;
      animationFrame.current = requestAnimationFrame(smoothFollow);
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
      animationFrame.current = requestAnimationFrame(smoothFollow);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    };
  }, [isHovered]);

  return (
    <div
      className={`flex justify-center items-center relative overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {/* {isHovered && (
        <div
          ref={arrowRef}
          className={`w-[6rem] h-[6rem] rounded-full ${iconbgcolor} flex justify-center items-center absolute`}
          style={{
            transform: `translate(${cursorPosition.current.x - 48}px, ${cursorPosition.current.y - 48}px)`,
            transition: "none",
          }}
        >
          <FaArrowRight className="w-6 h-6 text-white" />
        </div>
      )} */}
    </div>
  );
}

export default Button;
