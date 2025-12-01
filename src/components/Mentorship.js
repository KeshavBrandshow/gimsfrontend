"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const labs = [
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
  {
    img: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    logo: "https://www.gims.net.in/img/celebrity/rupali-jagga.webp?v=1",
    title: "AICTE IDEA Lab",
    desc: "Hands-on learning space to innovate, design and build prototypes.",
  },
];

export default function Mentorship() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);

  const getCardWidth = () => {
    if (typeof window === "undefined") return 350;
    if (window.innerWidth < 640) return 260; // mobile
    if (window.innerWidth < 1024) return 320; // tablet
    return 335; // desktop
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clonesStart = labs.slice(-3);
  const clonesEnd = labs.slice(0, 3);
  const fullSlides = [...clonesStart, ...labs, ...clonesEnd];

  const initialIndex = 3 + (labs.length - 1);
  const [index, setIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const next = () => {
    setIndex((p) => p + 1);
    setIsTransitioning(true);
  };

  const prev = () => {
    setIndex((p) => p - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === fullSlides.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(3);
      }, 500);
    }
    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(labs.length);
      }, 500);
    }
  }, [index, fullSlides.length, labs.length]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(sliderRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full lg:h-[90vh] bg-gradient-to-br from-[#102A43] via-[#1F2933] to-[#00517A] text-[#F5F7FA] py-20 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center relative">
      {/* Decorative blur blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00517A]/25 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-[40%] right-10 w-64 h-64 bg-[#F4B000]/30 rounded-full blur-2xl z-0 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#005B8C]/20 rounded-full blur-xl z-0"></div>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-center relative z-10">
        {/* LEFT SIDE - Content + Navigation Buttons */}
        <div ref={headerRef} className="lg:col-span-1 text-center lg:text-left mb-12 lg:mb-0">
          {/* Top Middle Heading */}
          <div className="inline-block p-2 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mb-8 mx-auto lg:mx-0">
            <div className="bg-[#1F2933] rounded-full px-12 py-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00517A] to-[#F4B000] font-bold text-2xl">Innovation Hub</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#F5F7FA]">Mentorship with</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-[#F4B000] to-[#FFC94A] bg-clip-text">Corporate</span>{' '}
            <span className="text-[#F5F7FA]">Groups</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-[#F5F7FA]/80 leading-relaxed max-w-md mx-auto lg:mx-0">
            Explore and push the limits of your creativity at our various Innovation Labs to turn theoretical knowledge into practical outcomes.
          </p>

          {/* Navigation Buttons - LEFT SIDE POSITION */}
          <div className="flex gap-4 mt-10 lg:mt-16 justify-center lg:justify-start">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full cursor-pointer bg-gradient-to-r from-[#00517A] to-[#005B8C] text-[#F5F7FA] flex items-center justify-center shadow-xl hover:shadow-[#F4B000]/25 hover:scale-110 transition-all duration-300 border border-[#F5F7FA]/20 backdrop-blur-sm hover:bg-[#F4B000]/20 hover:text-[#102A43]"
              aria-label="Previous slide"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 hover:-translate-x-0.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full cursor-pointer bg-gradient-to-r from-[#00517A] to-[#005B8C] text-[#F5F7FA] flex items-center justify-center shadow-xl hover:shadow-[#F4B000]/25 hover:scale-110 transition-all duration-300 border border-[#F5F7FA]/20 backdrop-blur-sm hover:bg-[#F4B000]/20 hover:text-[#102A43]"
              aria-label="Next slide"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 hover:translate-x-0.5">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div ref={sliderRef} className="col-span-1 lg:col-span-3 relative overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${index * (cardWidth + 24)}px)`,
              transition: isTransitioning ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            }}
          >
            {fullSlides.map((lab, i) => (
              <div
                key={i}
                className="group flex-shrink-0 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                style={{ width: `${cardWidth}px`, height: "450px" }}
              >
                <div className="bg-gradient-to-br from-[#F5F7FA]/10 to-white/5 backdrop-blur-xl rounded-tr-[90px] overflow-hidden shadow-2xl h-full relative border border-[#F5F7FA]/20 hover:border-[#F4B000]/40 transition-all duration-500 hover:shadow-[#F4B000]/20">
                  <div className="relative h-full w-full">
                    <img 
                      src={lab.img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={lab.title}
                    />

                    {/* TOP-LEFT LABEL */}
                    <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#00517A]/90 to-[#005B8C]/90 backdrop-blur-xl px-6 py-3 flex items-center gap-3 shadow-lg border-b border-[#F4B000]/20">
                      <img src={lab.logo} className="h-10 w-10 rounded-full object-contain border-2 border-[#F4B000]/30 shadow-md" alt="Logo" />
                      <p className="text-[#F5F7FA] font-bold text-base">{lab.title}</p>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="
                      absolute bottom-0 left-0 w-full
                      bg-gradient-to-t from-[#102A43]/95 via-[#1F2933]/90 to-transparent 
                      backdrop-blur-xl text-[#F5F7FA] p-6
                      translate-y-full group-hover:translate-y-0
                      transition-all duration-700 ease-out rounded-t-3xl
                      border-t border-[#F4B000]/20
                    ">
                      <p className="text-sm leading-relaxed font-medium">{lab.desc}</p>
                    </div>
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
