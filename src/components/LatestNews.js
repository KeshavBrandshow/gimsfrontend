import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const cards = [
  {
    heading: "Latest News",
    title: "Seminar on Innovation",
    date: "26 Nov 2025",
    description: "GIMS hosted India's most inspiring innovation seminar for future leaders.",
    img: "https://www.gims.net.in/lifegniotimg/1763810326-WhatsApp%20Image%202025-11-20%20at%2018.26.06.jpeg?v=1",
    link: "/news/seminar-on-innovation"
  },
  {
    heading: "Latest @ GIMS",
    title: "New Foreign MoU Signed",
    date: "28 Nov 2025",
    description: "GIMS signed an MoU with LSUS for international exchange & research.",
    img: "https://www.gims.net.in/lifegniotimg/1762950188-WhatsApp%20Image%202025-11-12%20at%2012.05.21%20(1).jpeg?v=1",
    link: "/news/new-foreign-mou-signed"
  },
  {
    heading: "Placement Updates",
    title: "100+ Offers in Drive",
    date: "29 Nov 2025",
    description: "Top recruiters rolled out 100+ offers to this year's batch in placement drive.",
    img: "https://www.gims.net.in/lifegniotimg/1762935708-WhatsApp%20Image%202025-11-11%20at%2008.04.16%20(1).jpeg?v=1",
    link: "/news/placement-100-offers"
  },
];

const LatestNews = () => {
  const sectionRef = useRef();
  const headerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.18 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation classes for each card
  const anims = [
    visible ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-40",
    visible ? "animate-pop-in opacity-100" : "opacity-0 scale-75",
    visible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-40"
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[90vh] py-20 px-2 bg-gradient-to-br from-[#102A43] via-[#1F2933] to-[#00517A] flex justify-center items-center relative overflow-hidden"
    >
      {/* Extra decorative blur blobs for depth */}
      <div className="absolute -top-14 -left-14 w-80 h-80 bg-[#00517A]/25 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-[60%] left-[4%] w-40 h-40 bg-[#F4B000]/40 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#005B8C]/30 rounded-full blur-[70px] z-0"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Top Middle Heading */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-block p-2 bg-gradient-to-r from-[#00517A] to-[#F4B000] rounded-full mb-8">
            <div className="bg-[#1F2933] rounded-full px-12 py-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00517A] to-[#F4B000] font-bold text-2xl">GIMS Newsroom</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#F5F7FA]">Latest</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-[#F4B000] to-[#FFC94A] bg-clip-text">News</span>{' '}
            <span className="text-[#F5F7FA]">Updates</span>
          </h1>
          <p className="text-xl text-[#F5F7FA]/80 max-w-2xl mx-auto leading-relaxed">
            Stay connected with the latest happenings, achievements, and announcements from GIMS
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className={`
                group flex flex-col rounded-3xl shadow-2xl border border-transparent hover:border-[#F4B000] 
                bg-[#F5F7FA]/10 hover:bg-[#F5F7FA]/20 backdrop-blur-lg overflow-hidden 
                transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#00517A] cursor-pointer
                ${anims[idx]}
              `}
              tabIndex={0}
            >
              <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-[#F5F7FA]/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#00517A] to-[#005B8C] text-[#F4B000] px-4 py-1.5 rounded-full text-xs font-bold shadow-xl z-10 backdrop-blur-sm">
                  {item.date}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 bg-[#F5F7FA]/5 backdrop-blur-md border-t border-[#F5F7FA]/20">
                <h2 className="text-lg md:text-xl font-extrabold text-[#F4B000] mb-2 tracking-wide">{item.heading}</h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#F5F7FA] mb-3 truncate leading-tight">{item.title}</h3>
                <p className="text-[#F5F7FA]/80 mb-4 leading-relaxed">{item.description}</p>
                <span className="mt-auto text-right text-[#F4B000] font-semibold group-hover:text-[#F4B000] group-hover:underline transition-all duration-300 flex items-center justify-end gap-1">
                  Read More → 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-490px);}
          80% { opacity: 1; transform: translateX(8px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(490px);}
          80% { opacity: 1; transform: translateX(-8px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.75);}
          70% { opacity: 1; transform: scale(1.06);}
          100% { opacity: 1; transform: scale(1);}
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.50s cubic-bezier(.57,1.61,.41,.99) 0.50s both;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.50s cubic-bezier(.57,1.61,.41,.99) 0.50s both;
        }
        .animate-pop-in {
          animation: pop-in 0.9s cubic-bezier(.57,1.61,.41,.99) 0.26s both;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;
