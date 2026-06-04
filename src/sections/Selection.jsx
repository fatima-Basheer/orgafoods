import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    logo: "CLASSIC",
    content: "/food6.jpg",
    title: "Cheddar Cheese",
    description:
      "Rich, full-bodied, and unmistakably smooth. Our premium cheddar is crafted for those who appreciate bold, authentic flavour in every bite.",
  },
  {
    logo: "VERSATILE",
    content: "/food7.jpg",
    title: "Mozzarella Cheese",
    description:
      "Soft, creamy, and perfectly stretchy. Ideal for pizzas, pastas, and everything in between — crafted from pure cow milk.",
  },
  {
    logo: "READY TO USE",
    content: "/food8.jpg",
    title: "Shredded Cheese",
    description:
      "Convenience meets quality. Our shredded blend melts beautifully, bringing effortless richness to your favourite dishes.",
  },
];

function Selection() {
  const badgeRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {

    const letters = badgeRef.current.querySelectorAll(".badge-letter");
    
    gsap.fromTo(
      letters,
      {
        y: 12,
        opacity: 0,
        filter: "blur(4px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.025,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current.children,
      {
        y: 60,
        opacity: 0,
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        stagger: 0.12,
        ease: "power4.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="client-reviews h-auto mx-auto py-10 md:py-15 lg:py-18 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div
            ref={badgeRef}
            className="flex items-center justify-center text-[#ddac3c] font-medium mb-6 select-none"
          >
            <span className="flex uppercase tracking-widest">
              {"OUR SELECTION".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>

        
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#022857]">
            The OrgaFoods{" "}
            <span
              className="italic text-[#ddac3c] font-light"
              style={{ fontFamily: "Playfair Display" }}
            >
              Collection
            </span>
          </h1>
          
          <p className="mt-5 leading-8 max-w-2xl text-black/60 font-medium text-lg">
            A curated range of premium cheese, each crafted with the same dedication to quality and taste.
          </p>
        </div>

    
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-12"
          style={{ perspective: "1000px" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-auto sm:h-[500px] md:h-[550px] lg:h-[600px] bg-[#faf8f5] rounded-2xl overflow-hidden shadow-lg transform-gpu will-change-transform transition-shadow duration-500 ease-out hover:shadow-xl"
            >
          
        
              <div className="relative h-[250px] sm:h-[60%] w-full overflow-hidden bg-[#faf8f5]">
                
            
                <div className="absolute top-3 left-3 z-10 text-white pointer-events-none">
                  <div className="bg-[#022857] text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm">
                    {slide.logo}
                  </div>
                </div>

                <img
                  src={slide.content}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2 sm:mt-3">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Selection;
