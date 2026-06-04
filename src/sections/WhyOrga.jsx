import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiUserStarLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    logo: <RiUserStarLine />,
    title: "Premium Ingredients",
    description: "Only the finest raw materials make it into our products.",
  },
  {
    logo: <RiUserStarLine />,
    title: "Authentic Taste",
    description: "Flavour that speaks of tradition and genuine craftsmanship.",
  },
  {
    logo: <RiUserStarLine />,
    title: "Always Fresh",
    description:
      "From production to packaging, freshness is never compromised.",
  },
  {
    logo: <RiUserStarLine />,
    title: "Natural Process",
    description:
      "Minimal processing to preserve the purity of every ingredient.",
  },
  {
    logo: <RiUserStarLine />,
    title: "Trusted Craft",
    description: "Built on relationships with farmers who share our values.",
  },
  {
    logo: <RiUserStarLine />,
    title: "Strict Standards",
    description: "Rigorous quality control at every stage of production.",
  },
];

function WhyOrga() {
  const badgeRef = useRef(null);

  useGSAP(() => {
    const letters = badgeRef.current.querySelectorAll(".badge-letter");

    gsap.fromTo(
      letters,
      { y: 12, opacity: 0, filter: "blur(4px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 92%",
        },
      },
    );
  }, []);

  return (
    <section className="client-reviews h-auto mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-[#ede7de80]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div
            ref={badgeRef}
            className="flex items-center justify-center text-[#ddac3c] font-semibold mb-6 select-none"
          >
            <span className="flex uppercase tracking-widest text-sm">
              {"WHAT SETS US APART".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#022857]">
            Why OrgaFoods is{" "}
            <span
              className="italic text-[#ddac3c] font-light"
              style={{ fontFamily: "Playfair Display" }}
            >
              Different
            </span>
          </h1>

          <p className="mt-5 leading-8 max-w-2xl text-slate-600 font-medium text-lg">
            We hold ourselves to a standard that goes beyond the ordinary. Every
            detail matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(221,172,60,0.14)] hover:bg-white translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-out group will-change-transform"
            >
              <div>
          
                <span className="flex items-center justify-center w-12 h-12 text-2xl text-[#022857] bg-[#022857]/5 group-hover:bg-[#ddac3c]/10 group-hover:text-[#ddac3c] rounded-xl mb-6 transition-colors duration-300">
                  {slide.logo}
                </span>

                <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-[#022857]">
                  {slide.title}
                </h3>

                <p className="text-slate-600 font-normal leading-relaxed text-[15px]">
                  {slide.description}
                </p>
              </div>

        
              <div className="mt-4 pt-4  flex justify-end">
                <span className="text-sm font-semibold text-[#022857] group-hover:text-[#ddac3c] transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  Discover More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyOrga;
