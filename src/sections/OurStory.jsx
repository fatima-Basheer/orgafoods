import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const textContentRef = useRef(null);
  const imageRef = useRef(null);
  const bannerRef = useRef(null);

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

    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(textContentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textContentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(imageRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(bannerRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="our-story" className="flex flex-col bg-[#faf8f5] md:flex-row items-center justify-between gap-10 px-6 md:px-16  2xl:px-80 py-30">
      <div className="flex-1">
        <div
          ref={badgeRef}
          className="flex items-center text-[#ddac3c] font-medium mb-6"
        >
          <span className="flex uppercase tracking-widest">
            {"OUR STORY".split("").map((char, i) => (
              <span key={i} className="badge-letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold leading-[1.1] text-[#022857]"
        >
          Rooted in Quality,{" "}
          <span
            className="italic text-[#ddac3c] font-light"
            style={{ fontFamily: "Playfair Display" }}
          >
            Driven by Passion
          </span>
        </h1>

        <div
          ref={textContentRef}
          className="text-black/60 text-base 2xl:text-[18px] mt-6 "
        >
          <p className="mt-4 leading-[1.6]">
            OrgaFoods was born from a simple belief — that great cheese starts
            with great milk. For years, we've been committed to bringing
            families the finest dairy products, crafted from 100% pure cow milk
            sourced from trusted farms.
          </p>

          <p className="mt-4 leading-[1.6]">
            Every product we create carries the care and attention of artisans
            who understand that quality isn't a shortcut. It's a craft, refined
            over time, guided by tradition, and held to the highest standards.
          </p>

          <p className="mt-4 leading-[1.6]">
            From our farms to your table, OrgaFoods represents a promise — of
            purity, freshness, and honest goodness.
          </p>
        </div>
      </div>

      <div
        ref={imageRef}
        className="flex-1 relative overflow-hidden rounded-2xl"
      >
        <img
          src="./foodimg1.jpg"
          alt="Our Story"
          className="w-full h-auto object-cover rounded-2xl shadow-xl"
        />

        <div
          ref={bannerRef}
          className="z-[9999] absolute bottom-4 left-4 bg-[#ddac3c] text-white px-5 py-3 rounded-lg backdrop-blur-md"
        >
          <h4 className="text-sm md:text-base font-semibold">100% Pure Milk</h4>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
