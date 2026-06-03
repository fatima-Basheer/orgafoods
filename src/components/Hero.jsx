import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

function Hero() {
  const badgeRef = useRef(null);

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
    <div className="relative h-screen min-h-[800px] mx-2 md:mx-6 overflow-hidden">
      <video
        src="./foodvedio.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center">
        <div className="max-w-2xl text-white w-full">
          
    
          <div
            ref={badgeRef}
            className="flex flex-wrap items-center text-[#ddac3c] font-medium mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest uppercase"
          >
            {"Premium Quality · From Farm to Flavour"
              .split("")
              .map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </div>

      
          <h1
            className="text-[clamp(2.5rem,8vw,5.5rem)] 2xl:text-[110px] font-bold leading-[1.1] sm:leading-[1]"
            style={{ fontFamily: "Playfair Display", fontWeight: 700 }}
          >
            Crafted <br className="hidden sm:inline" /> with Care, <br />
            <div className="relative inline-flex items-center justify-center isolate px-4 py-1">
              <svg 
                className="absolute inset-0 w-[50%] h-[50%] -z-10 scale-110 sm:scale-125" 
                viewBox="0 0 220 80"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="80"
                  cy="20"
                  rx="95"
                  ry="35"
                  fill="none"
                  stroke="#ddac3c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="ring"
                />
              </svg>
              <span className="italic relative z-10">Naturally.</span>
            </div>
          </h1>

        
          <p className="my-6 sm:my-8 text-white/80 text-base sm:text-lg md:text-xl max-w-lg 2xl:text-2xl leading-relaxed">
            Pure, farm-sourced cheese made with 100% cow milk. Every block,
            every slice — a testament to quality and tradition.
          </p>

          <div className="mt-4 sm:mt-6">
            <Button
              variant="black"
              className="relative overflow-hidden px-8 sm:px-10 py-3 group w-full sm:w-auto text-sm sm:text-base"
            >
              <span className="absolute left-0 bottom-0 w-full h-0 bg-[#ddac3c] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300">
                DISCOVER ORGAFOODS
                <FaArrowRight className="text-base sm:text-lg font-light" />
              </span>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
