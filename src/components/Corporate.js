'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const companies = [
  { name: 'TCS', type: 'VISIT', package: '3.5 LPA', icon: '🏢', gradient: 'from-[#00517A] to-[#005B8C]' },
  { name: 'INFOSYS', type: 'VIRTUAL', package: '4.2 LPA', icon: '💻', gradient: 'from-[#F4B000] to-[#FFC94A]' },
  { name: 'WIPRO', type: 'VISIT', package: '3.8 LPA', icon: '🚀', gradient: 'from-[#00517A] to-[#005B8C]' },
  { name: 'COGNIZANT', type: 'VIRTUAL', package: '4.5 LPA', icon: '⚡', gradient: 'from-[#F4B000] to-[#FFC94A]' },
  { name: 'ACCENTURE', type: 'VISIT', package: '5.2 LPA', icon: '🎯', gradient: 'from-[#00517A] to-[#005B8C]' },
  { name: 'CAPGEMINI', type: 'VIRTUAL', package: '4.8 LPA', icon: '💎', gradient: 'from-[#F4B000] to-[#FFC94A]' }
];

const performers = [
  { name: 'Aadarsh Shukla', role: 'Software Engineer', package: '12.5 LPA', company: 'Google' },
  { name: 'Amit Kumar Maurya', role: 'Full Stack Developer', package: '10.2 LPA', company: 'Microsoft' },
  { name: 'Amit Kumar Sharma', role: 'Data Analyst', package: '8.5 LPA', company: 'Amazon' }
];

export default function Corporate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const placementRef = useRef(null);
  const performersRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation with ScrollTrigger
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
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats Cards Animation with ScrollTrigger
      gsap.fromTo(".stat-card", 
        { y: 50, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Placement Cards Animation with ScrollTrigger
      gsap.fromTo(".placement-card", 
        { x: -100, opacity: 0, rotationY: -45 },
        { 
          x: 0, 
          opacity: 1, 
          rotationY: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: placementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Performers Animation with ScrollTrigger
      gsap.fromTo(performersRef.current, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: performersRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % performers.length);
    }, 4000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    if (isEntering) {
      gsap.to(card, { scale: 1.05, rotationY: 5, z: 50, duration: 0.3, ease: "power2.out" });
      gsap.to(card.querySelector('.card-glow'), { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(card, { scale: 1, rotationY: 0, z: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(card.querySelector('.card-glow'), { opacity: 0, duration: 0.3 });
    }
  };

  const handleButtonHover = (e, isEntering) => {
    const btn = e.currentTarget;
    if (isEntering) {
      gsap.to(btn, { scale: 1.1, rotation: 2, duration: 0.2, ease: "power2.out" });
    } else {
      gsap.to(btn, { scale: 1, rotation: 0, duration: 0.2, ease: "power2.out" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#102A43] via-[#1F2933] to-[#00517A] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00517A] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#F4B000] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#005B8C] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mb-8">
            <div className="bg-[#1F2933] rounded-full px-12 py-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00517A] to-[#F4B000] font-semibold text-2xl">GIMS Placement Portal</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-[#F5F7FA] mb-4 tracking-tight">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B000] to-[#FFC94A]">Resource</span> Centre
          </h1>
          <p className="text-xl text-[#F5F7FA]/80 max-w-2xl mx-auto leading-relaxed">Empowering careers through strategic industry partnerships and exceptional placement opportunities</p>
        </div>

        {/* Placement Stats */}
        <div ref={statsRef} className="mb-20">
          <h2 className="text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B000] to-[#00517A]">Placement</span> Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="stat-card group relative bg-[#F5F7FA]/10 backdrop-blur-lg border border-[#F5F7FA]/20 rounded-2xl p-6 cursor-pointer overflow-hidden"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div className="card-glow absolute inset-0 bg-gradient-to-r opacity-0 rounded-2xl blur-sm transition-opacity duration-300" style={{background: company.gradient}}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${company.gradient} bg-[#e9ed1c] rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      {company.icon}
                    </div>
                    <span className={`px-3 py-1 ${company.gradient} bg-[#0d95bf] text-[#102A43] rounded-full text-xs font-semibold shadow-lg`}>
                      {company.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#F5F7FA] text-lg mb-2">{company.name}</h3>
                  <p className="text-[#F5F7FA] font-semibold">{company.package}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Average Placement */}
        <div ref={placementRef} className="mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6 lg:mb-0">
              Top Average <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B000] to-[#FFC94A]">Placement</span> @GIMS
            </h2>
            <div className="flex gap-3">
              {['2024'].map((year, index) => (
                <button
                  key={year}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-[#00517A] to-[#F4B000] text-[#F5F7FA] shadow-lg' 
                      : 'bg-[#F5F7FA]/10 text-[#F5F7FA] hover:bg-[#F5F7FA]/20'
                  }`}
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Top 10%', value: '12.45', color: 'from-[#00517A] to-[#005B8C]', icon: '🏆' },
              { title: 'Top 25%', value: '9.23', color: 'from-[#F4B000] to-[#FFC94A]', icon: '🥈' },
              { title: 'Top 50%', value: '6.34', color: 'from-[#00517A] to-[#F4B000]', icon: '🥉' }
            ].map((item, index) => (
              <div
                key={item.title}
                className="placement-card group relative bg-gradient-to-br from-[#F5F7FA]/10 to-white/5 backdrop-blur-lg border border-[#F5F7FA]/20 rounded-3xl p-8 cursor-pointer overflow-hidden"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div className="card-glow absolute inset-0 bg-gradient-to-r opacity-0 rounded-3xl blur-sm transition-opacity duration-300" style={{background: item.color}}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">{item.title}</h3>
                  <p className={`text-5xl font-bold ${item.color.replace('from-', 'bg-gradient-to-r ').replace('to-', ' ')} bg-clip-text text-transparent mb-2`}>{item.value}</p>
                  <p className="text-[#F5F7FA]/70 font-medium">LPA Average</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Star Performers Slider */}
        <div ref={performersRef} className="">
          <h2 className="text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B000] to-[#FFC94A]">Star</span> Performers
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {performers.map((performer, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#F5F7FA]/10 to-white/5 backdrop-blur-lg border border-[#F5F7FA]/20 rounded-3xl p-12 text-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-32 h-32 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-[#F5F7FA] shadow-2xl group-hover:shadow-[#00517A]/25 transition-shadow duration-300">
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-3xl font-bold text-[#F5F7FA] mb-2">{performer.name}</h3>
                      <p className="text-xl text-[#F5F7FA] mb-4">{performer.role}</p>
                      <div className="flex justify-center items-center gap-4 text-lg">
                        <span className="bg-gradient-to-r from-[#F4B000] to-[#FFC94A] bg-clip-text text-transparent font-bold">{performer.package}</span>
                        <span className="text-[#F5F7FA]/50">•</span>
                        <span className="text-[#005B8C] font-semibold">{performer.company}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {performers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-gradient-to-r from-[#00517A] to-[#F4B000] scale-125' 
                      : 'bg-[#F5F7FA]/20 hover:bg-[#F5F7FA]/40'
                  }`}
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
