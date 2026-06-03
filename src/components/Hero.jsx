import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import Button from "./Button";
function Hero() {
  const badgeRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.to(".ring", {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 4,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      badgeRef.current.querySelectorAll(".letter"),
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.03,
          from: "end",
        },
      },
    );
  }, []);

  return (
    <div className="relative w-full h-[100vh] mt-20 ">
      <video
        src="./foodvedio.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 h-full flex items-center">
        <div className="ml-6 sm:ml-12 md:ml-20 lg:ml-20 max-w-xl text-white">
          <div
            ref={badgeRef}
            className="flex items-center text-[#ddac3c] font-medium mb-6"
          >
            <span className="flex uppercase tracking-widest">
              {"Premium Quality · From Farm to Flavour"
                .split("")
                .map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </span>
          </div>
          <h1
            className="text-[98px] font-bold leading-[1]"
            style={{ fontFamily: "Playfair Display", fontWeight: 700 }}
          >
            Crafted <br></br>with Care,<br></br>
            <div className="relative inline-flex items-center justify-center z-50">
              <svg className="absolute w-[760px] h-[80px]" viewBox="0 0 200 80">
                <ellipse
                  cx="100"
                  cy="40"
                  rx="90"
                  ry="30"
                  fill="none"
                  stroke="#ddac3c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="ring"
                />
              </svg>

              <span
                style={{ fontFamily: "Playfair Display", fontWeight: 200 }}
                className="italic relative z-10 text-[#ddac3c]"
              >
                Naturally.
              </span>
            </div>
          </h1>
          <p className="my-8 text-white/70 text-[22px] leading-[1.2]">
            Pure, farm-sourced cheese made with 100% cow milk. Every block,
            every slice — a testament to quality and tradition.
          </p>
          <div className="mt-5">
            {" "}
            <Button
              variant="black"
              className="relative overflow-hidden px-10 py-3 group"
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

              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                DISCOVER ORGAFOODS
                <FaArrowRight className="text-lg font-light" />
              </span>
            </Button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
