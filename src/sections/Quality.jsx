import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Sourcing",
    description: "Milk collected daily from trusted, quality-certified farms.",
  },
  {
    title: "Selection",
    description: "Only batches that meet our strict purity criteria move forward.",
  },
  {
    title: "Crafting",
    description: "Traditional techniques combined with modern hygiene standards.",
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
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      badgeRef.current.querySelectorAll(".badge-letter"),
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const toggleCard = (index) => {
    const isOpening = activeIndex !== index;
    const cards = containerRef.current.querySelectorAll(".card-item");

    let con = gsap.context(() => {
      if (activeIndex !== null) {
        const prevCard = cards[activeIndex];
        gsap.to(prevCard, { height: 80, duration: 0.35, ease: "power2.out" });
        gsap.to(prevCard.querySelector(".card-content"), { opacity: 0, duration: 0.15 });
      }

      if (isOpening) {
        const nextCard = cards[index];
        
        gsap.set(nextCard, { height: "auto" });
        gsap.from(nextCard, { height: 80, duration: 0.35, ease: "power2.out" });
        
        gsap.fromTo(
          nextCard.querySelector(".card-content"),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.25, delay: 0.1 }
        );
        
        setActiveIndex(index);
      } else {
        setActiveIndex(null);
      }
    }, containerRef);

    return () => con.revert();
  };

  return (
    <section className="client-reviews h-auto mx-auto py-10 md:py-15 lg:py-25 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 bg-[#496039]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div ref={badgeRef} className="flex items-center justify-center text-[#ddac3c] font-medium mb-2">
            <span className="flex uppercase tracking-widest text-xs sm:text-sm">
              {"OUR PROCESS".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white" style={{ fontFamily: "Playfair Display" }}>
            Quality at Every Step
          </h1>
          <p className="mt-4 md:mt-5 text-[18px] font-medium leading-7 md:leading-8 max-w-2xl text-white/70 px-2">
            From farm gate to your kitchen, we maintain an unbroken chain of care, precision, and quality assurance.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
          {slides.map((slide, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`card-item h-[80px] overflow-hidden bg-white/5 border rounded-xl px-6 flex flex-col justify-start cursor-pointer transition-colors duration-200 select-none ${
                  isOpen ? "border-white/40 bg-white/10" : "border-white/15 hover:bg-white/10"
                }`}
                onClick={() => toggleCard(index)}
              >
              
                <div className="h-[80px] min-h-[80px] flex items-center justify-between w-full">
                  <h3 className="text-lg md:text-xl font-medium text-white tracking-wide">
                    {slide.title}
                  </h3>
              
                  <div className="text-white text-3xl flex items-center justify-center pointer-events-none transition-transform duration-200">
                    {isOpen ? <RxCross2 /> : <IoIosAdd />}
                  </div>
                </div>

                <div className="card-content opacity-0 pb-6 pr-4">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
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
