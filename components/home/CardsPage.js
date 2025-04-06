"use client";
import Button from "../common/Button";
import Image from "next/image";

const CardsPage = () => {
  return (
    <div className="w-screen h-auto flex justify-center bg-[#F3F7FE] p-20 items-center z-10">
      <div className="w-4/5 h-[150vh] rounded-3xl  bg-white  flex">
        {/* Left Side */}
        <div className="w-[40%] h-full flex flex-col py-20 px-10">
          <div className="text-xl font-semibold text-[#29DD87]">The Process</div>
          <div className="text-7xl font-bold">
            Transform
            <br />
            your marketing
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[60%] flex flex-col gap-6 pb-10 px-10">
          {services.map((item, index) => (
            <Card key={index} item={item} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;

const services = [
  {
    title: "Create your strategy",
    description:
      "Our strategy generator will identify which marketing channels are most effective for your business and provide reasoning behind the selection.",
    tag: "Start right now, it only takes a few minutes!",
    imgSrc: "/home/gifs/blog.gif",
    btnText: "Generate Strategy",
  },
  {
    title: "Explore our services",
    description:
      "Implementing a full-scale marketing strategy can be a time-intensive process. Let us take the burden off your shoulders! Our comprehensive services cover every aspect of marketing from A to Z.",
    tag: "Simply browse through our offerings and select the services that best suit your business needs.",
    imgSrc: "/home/gifs/blog-noise.gif",
    btnText: "Our Services",
  },
  {
    title: "Talk to us",
    description:
      "Discover the full depth of hefcode and schedule a call with us today. We'll discuss your needs and find the perfect solution for you. During the call, we'll also guide you through our platform, which streamlines collaboration and puts you in full control of your project.",
    tag: "Let's take your marketing to the next level!",
    imgSrc: "/home/gifs/abc.gif",
    btnText: "Book a Call",
  },
];

const Card = ({ item ,index}) => {
  return (
    <div className={`w-full h-[30rem] flex items-center  ${index != 2 ? "border-b border-[#29DD87]":"" }`}>
      {/* Image Section */}
      <div className="w-[9rem] h-[9rem] -translate-y-20 flex justify-center items-start">
        <Image
          src={item.imgSrc}
          width={400}
          height={400}
          alt={item.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full h-auto px-6  gap-3">
        <div className="font-bold text-4xl flex"><span>{index+1}.</span>{item.title}</div>
        <div className="font-normal text-xl">{item.description}</div>
        <div className="mt-4">{item.tag}</div>
        <Button
          text={item.btnText}
          iconbgcolor={"bg-[#28DC86]"}
          className="w-1/3 border-[#1E225F] py-5 border-2 rounded-full cursor-pointer font-bold"
        />
      </div>
    </div>
  );
};
