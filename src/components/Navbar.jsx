import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { useEffect, useState } from "react";

import Button from "./Button";
const navlinks = [
  "Our Story",
  "Origins",
  "Our Selection",
  "Quality",
  "Contact",
];
function Navbar() {
  return (
    <div
      className={` flex justify-between items-center h-20 border-gray-300 dark:border-white/10 px-2 sm:px-4 md:px-12 lg:px-24  bg-white fixed left-0  top-0 right-0 z-50`}
    >
      {" "}
      <div className=" flex items-center text-xl font-bold gap-2">
        {" "}
        <img src="./logo.png" className="h-10" /> <span>Orga Foods</span>{" "}
      </div>{" "}
      <div className="flex justify-between items-center lg:gap-15 xl: justify-between">
        {" "}
        <div className="hidden items-center gap-8 lg:flex">
          {" "}
          {navlinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="group relative font-bold tracking-wide text-[15px] text-[#444] flex justify-between items-end cursor-pointer px-1 uppercase"
            >
              {link}

              <div className="absolute left-0 -bottom-7 h-[4px] w-0 bg-[#ddac3c] dark:bg-white group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      
      <div className="flex items-center gap-8">
        {" "}
        <div className="hidden sm:block">
          {" "}
          <Button
            variant="black"
            className="relative overflow-hidden px-4 py-3 group"
          >
            <span
              className="
      absolute
      left-0
      bottom-0
      w-full
      h-0
      bg-[#ddac3c]
      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:h-full
      z-0
    "
            />

            <span className=" relative z-10 flex items-center gap-2 transition-colors duration-300">
              GET IT NOW
              <FaArrowRight className="text-lg font-light" />
            </span>
          </Button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Navbar;
