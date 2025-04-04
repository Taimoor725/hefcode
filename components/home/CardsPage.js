"use client"
import Button from "../common/Button"
import Image from "next/image"

const CardsPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center gap-10'>
      {services.map((items, index) => {
        return (
          <Card
            key={index} // Add key prop for proper reconciliation in React
            title={items.title}
            imgSrc={items.imgSrc}
            description={items.description}
          />
        )
      })}
    </div>
  )
}
export default CardsPage

const services = [
  {
    title: "SERVICES",
    description: "At Hefcode we have the option to install the tool in our server. We will manage the hosting and provide dedicated support for your company. No development time. We just install the needed tool and you can use it.",
    imgSrc: "/home/img2.jpg"
  },
  {
    description: "The products are installed directly in your infrastructure and it's prepared to be maintained by your company.",
    title: "PRODUCTS",
    imgSrc: "/home/img3.jpg"
  },
  {
    title: "CUSTOMIZE SOLUTION",
    description: "If you need hosting and a dedicated solution for your issue, we take your problem and provide a creative, secure, cost-efficient, and automated solution.",
    imgSrc: "/home/img1.jpg"
  }
];

const Card = ({ title, imgSrc, description }) => {
  return (
    <div className='w-[30rem] h-[45rem] flex flex-col bg-[#F1F2F4] rounded-2xl mt-20'>
      <div className='w-full h-1/2'>
        <Image src={imgSrc} width={400} height={400} className='w-full h-full object-cover rounded-t-2xl' />
      </div>
      <div className='flex flex-col w-full h-1/2 p-4 gap-3'>
        <div className='font-bold text-4xl h-[3rem]'>{title}</div>
        <div className="w-full bg-white h-[4px]"></div>
        <div className='font-normal text-lg h-[9rem]'>{description}</div>
        <div className="w-full bg-white h-[3px]"></div>
        <Button text={"Read More"} iconbgcolor={"bg-[#28DC86]"} className={"w-1/2 border-[#28DC86] py-4 border-2 rounded-2xl cursor-pointer font-bold"} />
      </div>
    </div>
  )
}
