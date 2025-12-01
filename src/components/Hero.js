import React from 'react';

// Example marquee items
const marqueeItems = [
  "Admissions Open!",
  "100% Placement Assistance",
  "AICTE Approved",
  "Global Collaborations",
  "Apply Now for 2025",
];

const Marquee = ({ children }) => (
  <div className="overflow-hidden w-full bg-[#154285] bg-gradient-to-r from-[#154285] via-[#236185] to-[#ffc107]/30 py-2">
    <div className="flex whitespace-nowrap animate-marquee gap-10">
      {children}
      {children}
    </div>
    <style jsx>{`
      .animate-marquee {
        animation: marquee 8s linear infinite;
      }
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/building.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.27 }}
        />
        {/* Gradient overlay keeps text/readability strong */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000]/80 to-[#ffc107]/10" />
      </div>

      {/* Top Marquee */}
      <Marquee className="">
        {marqueeItems.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-white font-semibold text-lg tracking-wider"
          >
            {item}
          </span>
        ))}
      </Marquee>

      {/* Main Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 w-full">
        {/* Left: Text & CTA */}
        <div className="z-30 flex-1 p-6 sm:p-12 md:p-16 flex flex-col justify-center items-start max-w-2xl min-h-[32rem] animate-pop-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow leading-tight">
            Welcome to <span className="text-[#ffc107]">GIMS</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed font-medium drop-shadow">
            Empowering future leaders with{' '}
            <span className="text-[#ffc107] font-semibold">knowledge</span> and{' '}
            <span className="text-[#ffc107] font-semibold">innovation</span>.
          </p>
          <div className="flex items-center gap-5 w-full max-w-xs">
            <a
              href="/apply"
              className="w-full py-3 bg-[#ffc107] text-[#154285] font-bold rounded-full shadow hover:bg-yellow-300 transition text-lg text-center"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="w-full py-3 bg-white/90 text-[#154285] font-bold rounded-full shadow hover:bg-white transition text-lg text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Right: BIG Video Box */}
        <div className="relative flex-1 flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px] z-20 animate-pop-in video-delay">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 w-[90vw] max-w-2xl lg:max-w-3xl xl:max-w-4xl h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://www.gims.net.in/apply-now/video/GIMS_Video.mp4"
            />
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee>
        {marqueeItems.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-white font-semibold text-lg tracking-wider"
          >
            {item}
          </span>
        ))}
      </Marquee>

      {/* Pop-in animation for hero children */}
      <style jsx>{`
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.82) translateY(40px);}
          65% { opacity: 1; transform: scale(1.05) translateY(-8px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        .animate-pop-in {
          animation: pop-in 0.86s cubic-bezier(.43,.36,.3,1) 0.15s both;
        }
        .video-delay {
          animation-delay: 0.22s !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
