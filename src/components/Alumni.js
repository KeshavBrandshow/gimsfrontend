"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainTestimonialImage = "/testimonials/main.png";

const testimonials = [
  {
    id: 1,
    name: "Aastha Sharma",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?w=1080&q=80",
  },
  {
    id: 2,
    name: "Navodita Rist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1655977237812-ee6beb137203?w=1080&q=80",
  },
  {
    id: 3,
    name: "Gauri Shrimal",
    image: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=1080&q=80",
    videoThumbnail: mainTestimonialImage,
  },
  {
    id: 4,
    name: "Udit Gupta",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1608453162650-cba45689c284?w=1080&q=80",
  },
  {
    id: 5,
    name: "Kesar Khanna",
    image: "https://images.unsplash.com/photo-1608440208198-65202a3d0e8a?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1608440208198-65202a3d0e8a?w=1080&q=80",
  },
  {
    id: 6,
    name: "Priya Verma",
    image: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1589696709339-dba99b8925c5?w=1080&q=80",
  },
  {
    id: 7,
    name: "Rahul Singh",
    image: "https://images.unsplash.com/photo-1524538198441-241ff79d153b?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=1080&q=80",
  },
  {
    id: 8,
    name: "Ananya Joshi",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1668620589356-56ba14193005?w=1080&q=80",
  },
  {
    id: 9,
    name: "Vikram Patel",
    image: "https://images.unsplash.com/photo-1540222797359-e9b786124d4b?w=1080&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?w=1080&q=80",
  },
];

export default function Alumni() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const rotateUp = () => {
    setSelectedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setRotation((prev) => prev + 36);
  };

  const rotateDown = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
    setRotation((prev) => prev - 36);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#102A43] via-[#1F2933] to-[#00517A] relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00517A]/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#F4B000]/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#005B8C]/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Title - Perfectly Centered */}
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mb-8 shadow-2xl">
              <div className="bg-[#1F2933]/80 backdrop-blur-xl rounded-full px-16 py-5 border border-[#F5F7FA]/20">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00517A] to-[#F4B000] font-bold text-3xl tracking-wider">
                  Alumni Testimonials
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F5F7FA] mb-4">
              Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B000] to-[#FFC94A]">Success</span>
            </h1>
            <p className="text-xl text-[#F5F7FA]/80 max-w-2xl mx-auto leading-relaxed">
              Hear directly from our successful alumni about their transformative GIMS experience
            </p>
          </div>

          {/* Main Content - Perfect Flex Alignment */}
          <div className="flex items-center justify-center gap-16 lg:gap-24 xl:gap-32 relative">
            {/* LEFT SIDE - Wheel Controls */}
            <div className="flex flex-col items-center gap-8 lg:gap-12 relative z-20">
              {/* Navigation Buttons - Vertically Aligned */}
              <div className="flex flex-col items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={rotateUp}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00517A] to-[#005B8C] text-[#F5F7FA] flex items-center justify-center shadow-2xl hover:shadow-[#F4B000]/30 border-2 border-[#F5F7FA]/20 backdrop-blur-xl hover:scale-110 transition-all duration-300"
                >
                  <ChevronUp className="w-7 h-7" />
                </motion.button>

                {/* Wheel Container - Perfectly Centered */}
                <div className="relative" style={{ width: "280px", height: "480px" }}>
                  {/* FIXED CENTER AVATAR - Perfect Center */}
                  <div
                    className="absolute flex flex-col items-center z-30"
                    style={{
                      left: "140px",
                      top: "240px",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div 
                      animate={{ 
                        scale: 1.2, 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#F4B000] to-[#FFC94A] animate-ping opacity-30 blur-xl"></div>
                      <div className="relative rounded-full overflow-hidden w-24 h-24 ring-8 ring-gradient-to-r from-[#00517A] to-[#F4B000]/50 shadow-2xl border-4 border-[#F5F7FA]/20">
                        <Image
                          src={testimonials[selectedIndex].image}
                          alt={testimonials[selectedIndex].name}
                          width={96}
                          height={96}
                          className="object-cover hover:scale-110 transition-transform duration-500"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Selected Name - Perfectly Below */}
                    <div className="mt-6 px-4 py-2 bg-[#1F2933]/80 backdrop-blur-xl rounded-2xl border border-[#F5F7FA]/20 text-center shadow-xl">
                      <div className="text-[#F5F7FA] text-xl font-bold tracking-wide">{testimonials[selectedIndex].name}</div>
                    </div>
                  </div>

                  {/* ROTATING AVATARS - Perfect Circle Path */}
                  <div
                    className="absolute inset-0 transition-transform duration-1000 ease-out"
                    style={{
                      transformOrigin: "140px 240px",
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    {testimonials.map((t, index) => {
                      if (index === selectedIndex) return null;

                      const diff = (index - selectedIndex + testimonials.length) % testimonials.length;
                      const angle = diff * 36;
                      const rad = (angle * Math.PI) / 180;
                      const radius = 160;

                      const x = Math.cos(rad) * radius;
                      const y = Math.sin(rad) * radius;

                      return (
                        <motion.div
                          key={t.id}
                          className="absolute opacity-75 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110"
                          style={{
                            left: "140px",
                            top: "240px",
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                          }}
                          whileHover={{ scale: 1.3, zIndex: 40 }}
                          onClick={() => {
                            const steps = (index - selectedIndex + testimonials.length) % testimonials.length;
                            setSelectedIndex(index);
                            setRotation(rotation - steps * 36);
                          }}
                        >
                          <div className="relative rounded-full overflow-hidden w-16 h-16 ring-2 ring-[#F5F7FA]/30 shadow-lg hover:shadow-[#F4B000]/40 border border-[#F5F7FA]/20">
                            <Image
                              src={t.image}
                              alt={t.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={rotateDown}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00517A] to-[#005B8C] text-[#F5F7FA] flex items-center justify-center shadow-2xl hover:shadow-[#F4B000]/30 border-2 border-[#F5F7FA]/20 backdrop-blur-xl hover:scale-110 transition-all duration-300"
                >
                  <ChevronDown className="w-7 h-7" />
                </motion.button>
              </div>
            </div>

            {/* RIGHT SIDE — Featured Video Card */}
            <div className="flex-1 flex justify-center items-center min-h-[500px] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#F5F7FA]/5 to-white/2 backdrop-blur-xl border border-[#F5F7FA]/20 w-[650px] h-[420px] hover:shadow-[#F4B000]/30 hover:shadow-2xl transition-all duration-500"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -30 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={testimonials[selectedIndex].videoThumbnail}
                      alt="Featured Testimonial"
                      fill
                      className="object-cover hover:scale-[1.02] transition-transform duration-1000"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-[#F4B000] to-[#FFC94A] flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-8 h-8 text-[#102A43] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
