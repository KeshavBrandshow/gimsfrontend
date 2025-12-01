"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Life() {
  return (
    <div className="w-full">

      {/* 🔹 Top Section (Dark Curved Shape) */}
      <section className="relative bg-[#0A3045] text-white pb-20 pt-24 rounded-b-[60px]">

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT TEXT BLOCK */}
          <div>
            <p className="text-sm tracking-widest text-[#FFC94A]">CAMPUS LIFE</p>

            <h1 className="text-4xl font-bold mt-2">Life @ GIMS</h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              At GIMS, we foster a vibrant community where learning extends
              beyond the classroom. It’s a place to grow, innovate, and build
              lifelong connections while preparing for the challenges of the
              professional world.
            </p>

            <button className="mt-6 bg-[#F4B000] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#FFC94A] transition">
              Discover More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <Image
                src="/Student/life-at-gims.jpg"
                width={400}
                height={300}
                alt="Students"
                className="rounded-xl"
              />
            </div>
          </motion.div>

        </div>

        {/* CURVE SHAPE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[200%] h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.46,136.5-33.31,206-37.5,73.84-4.4,147.06,16.53,218,35,69.55,18.13,138.28,24.88,209,13.5,36.15-6,70-17.79,104-29.72V0Z"
              opacity=".25"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V15.81C47.19,35,103,55,158,52c70.88-4,137.33-36,206-43,73.68-7.47,147.05,15,218,35,69.42,19.33,138.66,25,209,13,36-6,70-17.77,104-29.72V0Z"
              opacity=".5"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V5.63C48,25.41,103.59,46.17,158,43c69.71-4.08,137.39-37.45,206-44,73.47-7.1,147.05,15.11,218,35C651.16,53.27,720,59.45,790,47c35.58-6.44,70.39-17.56,104-29.72V0Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

      </section>

      {/* 🔹 Bottom News Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 bg-transparent">

        {/* LEFT IMAGES (Upgraded) */}
        <div className="relative flex items-start justify-center">

          {/* Main Image */}
          <div className="bg-white shadow-2xl rounded-3xl p-4 w-80 hover:scale-[1.03] transition duration-300">
            <Image
              src="/Student/news1.jpg"
              width={380}
              height={320}
              alt="Students"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Floating Small Image */}
          <div className="absolute bottom-[-30px] right-[-20px] bg-white shadow-xl rounded-3xl p-3 w-48 hover:scale-[1.05] transition duration-300">
            <Image
              src="/Student/news2.jpg"
              width={220}
              height={180}
              alt="Student"
              className="rounded-2xl object-cover"
            />
          </div>

        </div>

        {/* RIGHT TEXT BLOCK */}
        <div>
          <p className="tracking-widest text-[#F4B000] text-sm">STAY INFORMED</p>

          <h2 className="text-3xl font-bold text-[#102A43] mt-2">
            News & <span className="text-[#005B8C]">Events</span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our placement season is in full swing, connecting PGDM students with
            over 200 top recruiters from diverse domains. We're seeing remarkable
            improvements in packages and profiles, setting the stage for an
            exceptional year.
          </p>

          <button className="mt-6 bg-[#005B8C] text-white px-6 py-3 rounded-full shadow hover:bg-[#003f61] transition">
            Read More
          </button>
        </div>
      </section>

    </div>
  );
}
