import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Sourcing",
    description: "Milk collected daily from trusted, quality-certified farms.",
  },
  {
    title: "Selection",
    description:
      "Only batches that meet our strict purity criteria move forward.",
  },
  {
    title: "Crafting",
    description:
      "Traditional techniques combined with modern hygiene standards.",
  },
  {
    title: "Quality Check",
    description: "Every batch tested for taste, texture, and consistency.",
  },
  {
    title: "Packaging",
    description: "Sealed fresh to preserve flavour and ensure shelf quality.",
  },
];

function Quality() {
  const badgeRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const letters = badgeRef.current.querySelectorAll(".badge-letter");

    gsap.fromTo(
      letters,
      { y: 15, opacity: 0, filter: "blur(4px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 90%",
        },
      },
    );

    const cards = containerRef.current.querySelectorAll(".card-item");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.96, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      },
    );
  }, []);

  return (
    <section id="quality" className="relative min-h-screen w-full py-25 px-4 md:px-12 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/steps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#022857]/45 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 xl:mb-28">
          <div ref={badgeRef} className="text-[#ddac3c] font-medium mb-3">
            <span className="flex uppercase tracking-widest text-xs sm:text-sm font-semibold">
              {"OUR PROCESS".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>

        
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Quality at Every{" "}
            <span
              className="italic text-[#ddac3c] font-light block sm:inline-block"
              style={{ fontFamily: "Playfair Display" }}
            >
              Step
            </span>
          </h2>
          
          <p className="text-base sm:text-lg max-w-2xl text-white/70 px-2">
            From farm gate to your kitchen, we maintain an unbroken chain of
            care, precision, and quality assurance.
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-4 xl:gap-5 w-full items-stretch justify-center pb-16"
        >
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className="card-item w-full h-auto bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-start select-none transition-all duration-500 ease-out will-change-transform hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex flex-col items-start gap-1 mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#ddac3c] uppercase font-bold">
                    Step 0{index + 1}
                  </span>
                  <h3
                    className="text-base sm:text-lg font-semibold text-white tracking-wide"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {slide.title}
                  </h3>
                </div>

                <div className="w-full">
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Quality;
