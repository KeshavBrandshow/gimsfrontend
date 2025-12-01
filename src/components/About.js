"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Clock, GraduationCap, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        margin: "-100px",
        amount: 0.3,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView && count === 0) {
            const timer = setTimeout(() => {
                const interval = setInterval(() => {
                    setCount(prev => {
                        if (prev >= 20) {
                            clearInterval(interval);
                            return 20;
                        }
                        return prev + 1;
                    });
                }, 50);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isInView, count]);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-white relative overflow-hidden"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.08),transparent_50%)]" />
            </div>

            {/* Grid Pattern with Layering */}
            <div className="absolute inset-0" style={{ zIndex: 1 }}>
                {/* Primary Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Secondary Grid - Smaller */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.2) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(234, 179, 8, 0.2) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                    }}
                />
            </div>

            {/* Subtle Floating Shapes */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 border border-blue-300/30 rounded-full opacity-20"
                style={{ zIndex: 2 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-40 right-20 w-24 h-24 border border-yellow-300/30 rounded-lg opacity-20"
                style={{ zIndex: 2 }}
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-400/30 opacity-25 rounded-full"
                style={{ zIndex: 2 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Minimal Floating Dots */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full opacity-20 ${i % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"
                        }`}
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                        zIndex: 2,
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}

            <div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                style={{ zIndex: 10 }}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="space-y-6"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-4xl font-bold text-gray-900 max-lg:text-3xl"
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Why GIMS
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 text-lg leading-relaxed text-justify"
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Top Average Placments
                            Why GIMS

                            In a short span of time, GIMS has become the most sought after name for post-graduation in the management field. Fostering the entrepreneurial intent, focusing on delivering a holistic and futuristic education, GIMS is approved by AICTE and accredited by HLACT, UK (the first institute in the Northern Part of the country and the only institute in NCR). We are proud to have the academic partnership with the IIM, Bangalore for the certification courses on contemporary business topics. LSUS and EMI to name a few are our foreign collaborations, to inculcate global exposure for the incumbents of the course. An distinguished network of advisors, a strong corporate connect, ground breaking experiential learning, a flexible and industry-driven curriculum, a faculty cohort that combines academic reputation with real-life experience corporate exposure, and above all, a highly collaborative community of peers, supporters, and mentors define the philosophy of GIMS, Greater Noida- Idea to Execution located in the City of Future, Greater Noida. Be a part of the GIMS family and experience the difference in teaching learning system and discover the personal and professional benefits of partnering with us.
                        </motion.p>

                        {/* QUICK FACTS */}
                       
                        {/* AICTE Badge */}
                        <motion.div
                            className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow"
                            initial={{ y: 30, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-gray-900 font-medium">
                                    AICTE Approved Programme
                                </div>
                                <div className="text-sm text-gray-600">
                                    Recognized by Ministry of Education, Government of India
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="relative"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/image/bulding.webp"
                                alt="PGDM Classroom"
                                width={600}
                                height={500}
                                className="w-full h-[500px] object-cover"
                            />
                        </motion.div>

                        {/* Floating counter */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1, x: [-10, 10] } : { y: 50, opacity: 0 }}
                            transition={{
                                y: { duration: 0.6, delay: 0.8 },
                                opacity: { duration: 0.6, delay: 0.8 },
                                x: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }
                            }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-[#154285] mb-1"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                {count}
                            </motion.div>
                            <div className="text-sm text-gray-600">Years of Excellence</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
