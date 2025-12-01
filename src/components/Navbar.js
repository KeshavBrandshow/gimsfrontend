import React, { useState } from 'react';

const menu = [
  {
    label: "About GIMS",
    submenu: ["Overview", "Message from Director", "Governing Council"]
  },
  {
    label: "Program",
    submenu: ["MBA", "PGDM", "Executive Courses"]
  },
  {
    label: "Campus",
    submenu: ["Hostels", "Sports", "Clubs & Societies"]
  },
  {
    label: "Admission",
    submenu: ["How to Apply", "Brochure", "Eligibility"]
  },
  {
    label: "Faculty",
    submenu: ["Professors", "Guest Lecturers"]
  },
  { label: "AAB", submenu: ["Academic Board"] },
  { label: "CRC", submenu: ["Corporate Relations"] },
  { label: "Councils", submenu: ["Student Council", "Women's Cell"] },
  { label: "Accreditation", submenu: ["AICTE", "NBA"] },
  { label: "Mandatory Disclosure", submenu: ["Compliance", "Policies"] }
];

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-4 py-1 md:py-0 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://www.gims.net.in/img/gims-logo.png" alt="GIMS Logo" className="h-12 w-auto" />
        </div>
        {/* Desktop Menu */}
        <div className="max-md:hidden flex-1 flex justify-center w-full">
          {menu.map((item, idx) => (
            <div
              className="relative px-4 cursor-pointer group"
              key={item.label}
              onMouseEnter={() => setOpen(idx)}
              onMouseLeave={() => setOpen(null)}
            >
              <span className="text-[#154285] font-medium text-lg hover:text-[#236185] transition">
                {item.label}
              </span>
              {/* Mega submenu */}
              {open === idx && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max bg-white shadow-xl border border-[#e4e8f0] rounded-lg py-2 z-40 animate-fadeIn min-w-[180px]">
                  {item.submenu.map((sub, i) => (
                    <div key={sub} className="px-4 py-2 hover:bg-[#f4fafc] whitespace-nowrap text-[#154285] cursor-pointer">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Apply Now button */}
        <div className="flex items-center">
          <a href="/apply" className="bg-[#154285] text-white font-bold text-lg rounded-md px-6 py-3 ml-2 hover:bg-[#236185] transition max-md:hidden">
            Apply Now
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none"
            onClick={() => setMobile((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg className="w-7 h-7 text-[#154285]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {mobile ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {mobile && (
        <div className="md:hidden bg-white border-t border-gray-200 pb-4">
          {menu.map(item => (
            <details key={item.label} className="group">
              <summary className="px-4 py-3 border-b border-gray-100 font-medium text-[#154285] cursor-pointer outline-none">
                {item.label}
              </summary>
              <div>
                {item.submenu.map(sub => (
                  <div key={sub} className="pl-7 py-2 text-[#236185] hover:bg-[#f4fafc] cursor-pointer">
                    {sub}
                  </div>
                ))}
              </div>
            </details>
          ))}
          <a
            href="/apply"
            className="mt-3 block mx-4 bg-[#154285] text-white font-bold text-lg rounded-md px-6 py-3 text-center hover:bg-[#236185] transition"
          >
            Apply Now
          </a>
        </div>
      )}

      {/* Submenu Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(16px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.23s cubic-bezier(.4,.58,.54,1) both;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
