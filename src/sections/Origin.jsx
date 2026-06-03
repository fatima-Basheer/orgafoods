import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaLeaf } from "react-icons/fa";
const slides = [
  {
    logo: <FaLeaf />,
    content: "/food1.jpg",
    title: "Ethically Sourced",
    description: "From farms that care for their land and livestock",
  },
  {
    logo: <FaLeaf />,
    content: "/food2.jpg",
    title: "Ethically Sourced",
    description: "From farms that care for their land and livestock",
  },
  {
    logo: <FaLeaf />,
    content: "/food4.jpg",
    title: "Ethically Sourced",
    description: "From farms that care for their land and livestock",
  },
  {
    logo: <FaLeaf />,
    content: "/food5.jpg",
    title: "Ethically Sourced",
    description: "From farms that care for their land and livestock",
  },
];

function Origin() {
  const trackRef = useRef(null);
  const badgeRef = useRef(null);
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
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 1;
    let animationId;

    const animate = () => {
      x -= speed;

      const firstSlide = track.children[0];
      if (!firstSlide) return;

      const slideWidth = firstSlide.offsetWidth;
      const totalWidth = slideWidth * slides.length;

      if (Math.abs(x) >= totalWidth) {
        x = 0;
      }

      gsap.set(track, { x });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="client-reviews bg-black/90 h-auto mx-auto py-10 md:py-15 lg:py-18">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div
            ref={badgeRef}
            className="flex items-center justify-center text-[#ddac3c] font-medium mb-6"
          >
            <span className="flex uppercase tracking-widest">
              {"SOURCE OF ORIGIN".split("").map((char, i) => (
                <span key={i} className="badge-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            From the Heart of the Farm{" "}
          </h1>

          <p className="mt-5 leading-8 max-w-2xl text-white/40">
            Every drop of milk that goes into our cheese is sourced from farms
            where quality, freshness, and responsible farming come first.
          </p>
        </div>

        <div className="slider-wrapper overflow-hidden w-full relative">
          <div className="slider-track flex" ref={trackRef}>
            {[...slides, ...slides].map((slide, index) => (
              <div
                className="slide-card group flex-shrink-0 w-[300px] mx-3"
                key={index}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={slide.content}
                    alt={slide.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="h-14 w-14 rounded-full bg-[#faeed2] flex justify-center items-center">
                      <h2 className="text-xl font-semibold mb-2 text-[#ddac3c]">
                        {slide.logo}
                      </h2>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      {slide.title}
                    </h2>

                    <p className="text-sm text-center leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Origin;
