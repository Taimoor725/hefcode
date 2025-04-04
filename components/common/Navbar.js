"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[999999] w-full h-[8rem] bg-gray-100 text-color flex items-center justify-between px-4 md:px-8 lg:px-10">
      <div className="text-2xl font-bold w-[15vw] min-w-[80px] flex justify-center items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={300}
          height={300}
          className="h-20 w-20 md:h-28 md:w-28 object-cover"
        />
      </div>

      <div className="hidden md:flex font-semibold text-xl justify-evenly items-center flex-grow">
        <a href="#" className="px-3 hover:text-gray-600">
          Products
        </a>
        <a href="#" className="px-3 hover:text-gray-600">
          Pricing
        </a>
        <a href="#" className="px-3 hover:text-gray-600">
          Services
        </a>
        <a href="#" className="px-3 hover:text-gray-600">
          Resources
        </a>
        <a href="#" className="px-3 hover:text-gray-600">
          Company
        </a>
        <a href="#" className="px-3 hover:text-gray-600">
          Support
        </a>
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
          <a href="#" className="hover:text-indigo-600">
            Products
          </a>
          <a href="#" className="hover:text-indigo-600">
            Pricing
          </a>
          <a href="#" className="hover:text-indigo-600">
            Services
          </a>
          <a href="#" className="hover:text-indigo-600">
            Resources
          </a>
          <a href="#" className="hover:text-indigo-600">
            Company
          </a>
          <a href="#" className="hover:text-indigo-600">
            Support
          </a>
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
    </nav>
  );
}