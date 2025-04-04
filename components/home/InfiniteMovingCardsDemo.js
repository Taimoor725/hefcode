"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[30rem] _bg-[red] rounded-md flex flex-col antialiased _bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    img:"/home/company/1 (1).webp"
  },
  {
    img:"/home/company/1 (2).webp"
  },
  {
    img:"/home/company/1 (3).webp"
  },
  {
    img:"/home/company/1 (4).webp"
  },
  {
    img:"/home/company/1 (5).webp"
  },
  {
    img:"/home/company/1 (6).webp"
  },
  {
    img:"/home/company/1 (7).webp"
  },
  {
    img:"/home/company/1 (8).webp"
  },
  {
    img:"/home/company/1 (9).webp"
  },
];
