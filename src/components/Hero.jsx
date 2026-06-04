import React, { useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

function Hero() {
  const badgeRef = useRef(null);

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
    <div className="relative h-screen min-h-[800px] overflow-hidden">
      <img
        src="/hero-cheese.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Hero Background"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/5 z-10" />

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center">
        <div className="max-w-2xl text-white w-full">
          <div
            ref={badgeRef}
            className="flex flex-wrap items-center text-[#ddac3c] font-medium mb-4 sm:mb-6 text-lg tracking-widest uppercase"
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
            className="text-5xl xl:text-8xl 2xl:text-8xl text-[#f7f4ed] font-bold leading-[1.1] sm:leading-[1]"
            style={{ fontFamily: "Playfair Display", fontWeight: 700 }}
          >
            Crafted <br /> with Care, <br />
            Naturally
          </h1>

          <p className="my-6 sm:my-8 text-white/80 text-lg md:text-xl max-w-lg 2xl:text-2xl leading-relaxed">
            Pure, farm-sourced cheese made with 100% cow milk. Every block,
            every slice — a testament to quality and tradition.
          </p>

          <div className=" mt-12 sm:mt-8">
            <Button
              variant="black"
              className="relative overflow-hidden px-8 sm:px-6 py-3 group w-full sm:w-auto text-sm sm:text-base"
            >
              <span className="absolute left-0 bottom-0 w-full h-0 bg-[#ddac3c] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full z-0" />
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 tracking-widest">
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
