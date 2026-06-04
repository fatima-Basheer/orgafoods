import React, { useState } from "react";
import { DiJavascript } from "react-icons/di";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";

const navlinks = [
  "Our Story",
  "Origins",
  "Our Selection",
  "Quality",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-18 border-b border-gray-300 dark:border-white/10 px-4 md:px-12 lg:px-24 bg-white fixed left-0 top-0 right-0 z-50">
        <div className="flex items-center text-xl font-bold gap-2">
          <img src="./orgalogo.png" className="h-15" alt="Logo" />
          <span style={{ fontFamily: "Playfair Display", fontWeight: 700 }}>
            OrgaFoods
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-medium tracking-wide text-[15px] text-[#444] uppercase hover:text-[#0C4D9A] duration-500"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="block lg:hidden text-2xl text-[#444] cursor-pointer"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <ImMenu />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl p-6 flex flex-col gap-8 transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span
            className="font-bold text-lg text-[#0C4D9A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Menu
          </span>
          <div
            className="text-2xl text-[#444] cursor-pointer hover:rotate-90 duration-500 ease-out"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-medium tracking-wide text-base text-[#444] uppercase hover:text-[#0C4D9A] transition-colors duration-300 block border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
