"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Celebrities() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Prince",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/deloitte.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Prachi",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/hdfc-bank.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Anurag Kumar",
      batch: "2020–2022",
      companyLogo: "/image/our-recuiters/kpmg.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Pratham",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/icici.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Deepak-Pratap",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/first-point-creations.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Shataakshi Sharma",
      batch: "2020–2023",
      companyLogo: "/image/our-recuiters/airtel.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Priyanka Kumari",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/ey.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Chandan Kumar",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/smc-logo.webp",
    },
    {
      img: "https://www.gims.net.in/img/celebrity/pranjal-dahiya.webp?v=1",
      name: "Anjali",
      batch: "2020–2022",
      companyLogo: "/image/our-recuiters/infosys.webp",
    },
  ];

  // tilt left / right only logic
  useEffect(() => {
    if (!swiperRef.current) return;
    const slides = swiperRef.current.slides;

    slides.forEach((slide) => {
      const img = slide.querySelector(".slide-img");
      img?.classList.remove("tilt-left", "tilt-right");
    });

    const visible = Array.from(slides).filter((slide) =>
      slide.classList.contains("swiper-slide-visible")
    );

    if (visible.length > 0) {
      visible[0].querySelector(".slide-img")?.classList.add("tilt-left");
      visible[visible.length - 1]
        .querySelector(".slide-img")
        ?.classList.add("tilt-right");
    }
  }, [activeIndex]);

  return (
    <section className="bg-gradient-to-r from-[#102A43] via-[#1F2933] to-[#00517A] pb-8">
      <div className="max-w-[1500px] mx-auto overflow-hidden py-16 px-4 sm:px-6 lg:px-10">
        {/* Top Middle Heading */}
        <div className="text-center mb-20">
          {/* <div className="inline-block p-2 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mb-8">
            <div className="bg-[#1F2933] rounded-full px-12 py-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00517A] to-[#F4B000] font-bold text-2xl">GIMS Alumni Spotlight</span>
            </div>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#F5F7FA]">Celebrities</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-[#F4B000] to-[#FFC94A] bg-clip-text">Star</span>{' '}
            <span className="text-[#F5F7FA]">@ GIMS</span>
          </h1>
          <p className="text-xl text-[#F5F7FA]/80 max-w-2xl mx-auto leading-relaxed">
            Celebrating the exceptional achievements of GIMS alumni who have excelled in their careers
          </p>
        </div>

        <Swiper
          effect="coverflow"
          centeredSlides
          loop
          speed={900}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1.4,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // RESPONSIVE SETTINGS
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[260px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[380px] group">
                {/* MAIN IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="slide-img w-full h-full object-cover rounded-xl shadow-2xl group-hover:shadow-[#F4B000]/20 transition-all duration-500"
                />

                {/* ALWAYS VISIBLE OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 rounded-b-xl bg-gradient-to-t from-[#102A43]/90 via-[#1F2933]/80 to-transparent backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[#F5F7FA]">
                      <h3 className="text-base sm:text-lg font-bold leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 font-medium">
                        Batch {item.batch}
                      </p>
                    </div>

                    <img
                      src={item.companyLogo}
                      alt={item.name + " company"}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain rounded-2xl p-1.5 sm:p-2 bg-[#F5F7FA]/20 border border-[#F5F7FA]/30 hover:bg-[#F4B000]/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .tilt-left {
            transform: perspective(900px) rotateY(18deg) translateZ(-40px) !important;
          }
          .tilt-right {
            transform: perspective(900px) rotateY(-18deg) translateZ(-40px) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
