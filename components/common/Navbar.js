"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // New state for resources popup

  const handleResourcesClick = () => {
    setResourcesOpen(true);
  };

  const handleResourcesClose = () => {
    setResourcesOpen(false);
  };

  return (
    <nav className="absolute top-0 z-[999999] w-full h-[6rem] bg-[#f3f7fe] text-color flex items-center justify-between px-4 md:px-8 lg:px-10">
      <Link href={'/'} className="text-2xl font-bold w-[15vw] min-w-[80px] flex justify-center items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={300}
          height={300}
          className="h-20 w-20 md:h-28 md:w-28 object-cover"
        />
      </Link>

      <div className="hidden md:flex font-semibold text-xl justify-evenly items-center gap-8">
        <Link href="/product/" className=" hover:text-[#28dc86]">
          Catalog
        </Link>
        <Link href="#about" className=" hover:text-[#28dc86]">
            About Us
        </Link>
        <Link href="#" className=" hover:text-[#28dc86]" onClick={handleResourcesClick}>
          Resources
        </Link>
        <Link href="#" className=" hover:text-[#28dc86]">
          Company
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-10">
        <button
          className="border border-gray-300 px-4 py-2 rounded-full flex items-center relative"
          onClick={() => setLanguageOpen(!languageOpen)}
        >
          EN ▼
          {languageOpen && (
            <div className="absolute top-[110%] left-0 bg-white shadow-lg rounded-md p-1">
              <div className="block px-4 py-2 hover:bg-[#26DC86] w-full text-left">
                EN
              </div>
              <div className="block px-4 py-2 hover:bg-[#26DC86] w-full text-left">
                FR
              </div>
            </div>
          )}
        </button>

        <Button
          text={"Book a Demo"}
          iconbgcolor={"bg-[#26DC86]"}
          className="py-2 md:py-3 lg:py-5 px-4 md:px-6 lg:px-10 rounded-full border-[#26DC86] border-1"
        />
        <Button
          text={"Get In Touch"}
          iconbgcolor={"bg-[#3C149A]"}
          className="py-2 md:py-3 lg:py-5 px-4 md:px-6 lg:px-10 rounded-full bg-[#26DC86]"
        />
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={24} />
      </button>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col space-y-4 py-4 px-6 md:hidden">
          <Link href="#" className="hover:text-[#28dc86]">
            Products
          </Link>
          {/* <Link href="#" className="hover:text-[#28dc86]">
            Pricing
          </Link> */}
          <Link href="#" className="hover:text-[#28dc86]">
            Services
          </Link>
          <Link href="#" className="hover:text-[#28dc86]" onClick={handleResourcesClick}>
            Resources
          </Link>
          <Link href="#" className="hover:text-[#28dc86]">
            Company
          </Link>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-indigo-900 w-full">
            EN ▼
          </button>
          <Button
            text={"Book a Demo"}
            iconbgcolor={"bg-[#26DC86]"}
            className="w-full py-4 px-8 rounded-full border-[#26DC86] border-1"
          />
          <Button
            text={"Get In Touch"}
            iconbgcolor={"bg-[#3C149A]"}
            className="w-full py-4 px-8 rounded-full bg-[#26DC86]"
          />
        </div>
      )}

      {/* Resources Popup */}
      {resourcesOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#28dc86] bg-opacity-90 flex justify-center items-center p-4">
          <div className="bg-white w-4/5 h-4/5 rounded-lg p-6 md:p-10 relative">
            <button className="absolute lg:top-5 lg:right-5 top-2 right-2 " onClick={handleResourcesClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2">
                <h2 className="text-6xl font-bold mb-4">Resources</h2>
                <p className="text-2xl mb-6 w-2/3">Our pre-configured applications enable our clients to work better and smarter.</p>
                <div className="mb-6">
                  <Image
                    src={"/res/img1.svg"} // Replace with your image
                    alt="Resources Image"
                    width={300}
                    height={200}
                    className="rounded-lg w-[25rem] h-[25rem] object-cover"
                  />
                </div>
                <Button
                  text={"Request demo"}
                  iconbgcolor={"bg-[#1E225F]"}
                  className="py-3 w-[15rem]  rounded-full border-[#26DC86] border-1"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left text-3xl">
                <ul className="space-y-4">
                  <li onClick={handleResourcesClose}><Link href="/blog/" className=" hover:text-[#28dc86]">Blog</Link></li>
                  <li onClick={handleResourcesClose}><Link href="#" className=" hover:text-[#28dc86]">Webinars</Link></li>
                  <li onClick={handleResourcesClose}><Link href="#" className=" hover:text-[#28dc86]">Podcasts</Link></li>
                  <li onClick={handleResourcesClose}><Link href="#" className=" hover:text-[#28dc86]">Resource Center</Link></li>
                  <li onClick={handleResourcesClose}><Link href="#" className=" hover:text-[#28dc86]">Demo Center</Link></li>
                  <li onClick={handleResourcesClose}><Link href="#" className=" hover:text-[#28dc86]">FAQ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}