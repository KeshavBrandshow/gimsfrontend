"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Life() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      img: "/image/student-placement/prince-bca.png",
      name: "Prince",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/deloitte.webp",
    },
    {
      img: "/image/student-placement/prachi-bca.png",
      name: "Prachi",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/hdfc-bank.webp",
    },
    {
      img: "/image/student-placement/anurag-kumar-bca.png",
      name: "Anurag Kumar",
      batch: "2020–2022",
      companyLogo: "/image/our-recuiters/kpmg.webp",
    },
    {
      img: "/image/student-placement/pratham.png",
      name: "Pratham",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/icici.webp",
    },
    {
      img: "/image/student-placement/deepak-pratap.png",
      name: "Deepak-Pratap",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/first-point-creations.webp",
    },
    {
      img: "/image/student-placement/shataakshi-sharma.png",
      name: "Shataakshi Sharma",
      batch: "2020–2023",
      companyLogo: "/image/our-recuiters/airtel.webp",
    },
    {
      img: "/image/student-placement/priyanka-kumari.png",
      name: "Priyanka Kumari",
      batch: "2022–2024",
      companyLogo: "/image/our-recuiters/ey.webp",
    },
    {
      img: "/image/student-placement/chandan-kumar.webp",
      name: "Chandan Kumar",
      batch: "2021–2023",
      companyLogo: "/image/our-recuiters/smc-logo.webp",
    },
    {
      img: "/image/student-placement/anjali.png",
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
    <section className="bg-linear-to-r from-blue-900 via-blue-600 via-blue-300 to-yellow-400">
      <div className="max-w-[1500px] mx-auto overflow-hidden py-8 px-4 sm:px-6 lg:px-10">
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
                  className="slide-img w-full h-full object-cover rounded-xl"
                />

                {/* ALWAYS VISIBLE OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 rounded-b-xl bg-linear-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-white">
                      <h3 className="text-base sm:text-lg font-semibold leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-80">
                        Batch {item.batch}
                      </p>
                    </div>

                    <img
                      src={item.companyLogo}
                      alt={item.name + " company"}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain rounded-2xl p-1.5 sm:p-2 bg-gray-100"
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
