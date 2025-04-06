"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

function Page() {
  return (
    <div>
      <Landing />
      <Blogs />
      <NewsletterSignup/>
    </div>
  );
}

export default Page;

const Landing = () => {

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#28DC86] to-[#1AAB7B] text-white py-20 px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl transform -translate-x-1/4 -translate-y-1/4'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl transform translate-x-1/4 translate-y-1/4'></div>

      <div className='text-center max-w-3xl z-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
          Explore Insights and Innovations on Our Hefcode Blog
        </h1>
        <p className='text-lg md:text-xl mb-10 opacity-80'>
          Dive into our latest articles, tutorials, and industry insights. Stay informed and inspired with Hefcode's expert perspectives.
        </p>
        <div className='flex justify-center'>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
    const blogData = [
        {
          id: 1,
          title: 'The Future of Web Development',
          subtitle: 'Exploring the latest trends and technologies',
          description: 'A deep dive into the evolving landscape of web development. From serverless architecture to the rise of WebAssembly, we explore the cutting-edge technologies shaping the future of web development. Discover how these advancements are impacting user experience and developer workflows.',
          image: '/home/feedback/user (1).jpg',
        //   detailImage: '/home/feedback/user (6).jpg',
        },
        {
          id: 2,
          title: 'Mastering React Hooks',
          subtitle: 'A comprehensive guide for beginners',
          description: 'Learn how to effectively use React Hooks in your projects. This guide covers useState, useEffect, useContext, and custom hooks. Understand how to manage state and side effects in functional components, and build cleaner, more maintainable code.',
          image: '/home/feedback/user (2).jpg',
        //   detailImage: '/home/feedback/user (7).jpg',
        },
        {
          id: 3,
          title: 'Introduction to Node.js',
          subtitle: 'Building scalable server-side applications',
          description: 'Get started with Node.js and understand its core concepts. This article introduces you to asynchronous programming, event loops, and the npm ecosystem. Learn how to build efficient, scalable server-side applications and APIs.',
          image: '/home/feedback/user (3).jpg',
        //   detailImage: '/home/feedback/user (8).jpg',
        },
        {
          id: 4,
          title: 'UI/UX Design Principles',
          subtitle: 'Creating intuitive user experiences',
          description: 'Learn the fundamentals of UI/UX design and improve your skills. This guide covers principles like consistency, hierarchy, feedback, and accessibility. Discover how to create user-centered designs that are both visually appealing and easy to use.',
          image: '/home/feedback/user (4).jpg',
        //   detailImage: '/home/feedback/user (9).jpg',
        },
        {
          id: 5,
          title: 'Getting Started with Tailwind CSS',
          subtitle: 'Rapid UI development with utility-first CSS',
          description: 'Discover how Tailwind CSS can speed up your frontend development. This article walks you through the utility-first approach and shows you how to build responsive layouts with ease. Learn how to customize your design system and create reusable components.',
          image: '/home/feedback/user (5).jpg',
        //   detailImage: '/home/feedback/user (10).jpg',
        },
        {
          id: 6,
          title: 'The Power of Content Marketing',
          subtitle: 'Driving engagement and building brand authority',
          description: 'Content marketing is more than just blogging. It’s about creating valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action. Learn how to develop a content strategy that resonates with your target audience and boosts your brand’s online presence.',
          image: '/home/feedback/user (6).jpg',
        //   detailImage: '/home/feedback/user (12).jpg',
        },
        {
          id: 7,
          title: 'Social Media Marketing Strategies',
          subtitle: 'Engaging your audience on different platforms',
          description: 'Social media marketing is the use of social media platforms and websites to promote a product or service. Learn how to create engaging content for different platforms like Instagram, Twitter, and LinkedIn. Discover strategies to grow your followers and build a strong online community.',
          image: '/home/feedback/user (7).jpg',
        //   detailImage: '/home/feedback/user (14).jpg',
        },
        {
          id: 8,
          title: 'Email Marketing Best Practices',
          subtitle: 'Building relationships and driving conversions',
          description: 'Email marketing is a powerful tool for nurturing leads and driving conversions. This article covers best practices for creating effective email campaigns, from subject lines to call-to-actions. Learn how to segment your audience and personalize your messages for maximum impact.',
          image: '/home/feedback/user (1).jpg',
        //   detailImage: '/home/feedback/user (16).jpg',
        },
        {
          id: 9,
          title: 'SEO Fundamentals for Marketers',
          subtitle: 'Improving your website’s search engine visibility',
          description: 'Search engine optimization (SEO) is crucial for driving organic traffic to your website. This guide covers the fundamentals of SEO, including keyword research, on-page optimization, and link building. Learn how to improve your website’s ranking and attract more qualified leads.',
          image: '/home/feedback/user (2).jpg',
        //   detailImage: '/home/feedback/user (18).jpg',
        },
        {
          id: 10,
          title: 'The Art of Brand Storytelling',
          subtitle: 'Connecting with your audience on an emotional level',
          description: 'Brand storytelling is about crafting narratives that resonate with your audience and build emotional connections. Learn how to identify your brand’s core values and create stories that reflect your mission. Discover techniques for using visuals, language, and tone to engage and inspire your audience.',
          image: '/home/feedback/user (3).jpg',
        //   detailImage: '/home/feedback/user (20).jpg',
        },
      ];


  return (
    <div className='w-full flex justify-center my-20'>
      <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {blogData.map((blog) => (
          <Post key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

const Post = ({ blog }) => {
  return (
    <div className='w-full h-auto flex flex-col bg-[#F3F7FE] rounded-3xl overflow-hidden shadow-md'>
      <div className='w-full h-64 md:h-48 lg:h-56'>
        <Image
          src={blog.image}
          width={400}
          height={400}
          alt='blog-card'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full p-6 flex flex-col flex-grow'>
        <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
        <h3 className='text-lg  mb-3'>{blog.subtitle}</h3>
        <p className=' flex-grow'>{blog.description}</p>
      </div>
    </div>
  );
};