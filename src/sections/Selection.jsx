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
  const trackRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      badgeRef.current.querySelectorAll(".badge-letter"),
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.from(cardsRef.current.children, {
      y: 50,
      opacity: 0,

      scale: 0.96,
      duration: 1.4,
      stagger: 0.18,
      ease: "expo.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 82%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  return (
    <section className="client-reviews h-auto mx-auto py-10 md:py-15 lg:py-18 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      {" "}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {" "}
          <div
            ref={badgeRef}
            className="flex items-center justify-center text-[#ddac3c] font-medium mb-6"
          >
            {" "}
            <span className="flex uppercase tracking-widest">
              {"OUR SELECTION".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block">
                  {char === " " ? "\u00A0" : char}{" "}
                </span>
              ))}{" "}
            </span>{" "}
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            {" "}
            The OrgaFoods{" "}
            <span
              className="italic text-[#0C4D9A] font-light"
              style={{ fontFamily: "Playfair Display" }}
            >
              {" "}
              Collection{" "}
            </span>{" "}
          </h1>{" "}
          <p className="mt-4 md:mt-5 text-sm sm:text-base leading-7 md:leading-8 max-w-2xl text-black/40 px-2">
            {" "}
            Every drop of milk that goes into our cheese is sourced from farms
            where quality, freshness, and responsible farming come first.{" "}
          </p>{" "}
        </div>{" "}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-12"
          style={{ perspective: "1000px" }}
        >
          {" "}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] bg-white rounded-2xl overflow-hidden shadow-lg will-change-transform"
            >
              {" "}
              <div className="absolute top-2 right-2 z-10 text-white">
                {" "}
                <div className="bg-[#0C4D9A] text-xs sm:text-sm px-3 py-1 rounded-full">
                  {" "}
                  {slide.logo}{" "}
                </div>{" "}
              </div>{" "}
              <div className="h-[70%] overflow-hidden">
                {" "}
                <img
                  src={slide.content}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />{" "}
              </div>{" "}
              <div className="h-[30%] p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                {" "}
                <h3
                  className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {" "}
                  {slide.title}{" "}
                </h3>{" "}
                <p className="text-gray-600 text-sm sm:text-base leading-6">
                  {" "}
                  {slide.description}{" "}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default Selection;
