
import React, { useState } from "react";
import Link from "next/link";

const campusSubmenus = [
  { label: "Clubs & Societies", href: "/campus-life/clubs" },
  { label: "Hostels", href: "/campus-life/hostels" },
  { label: "Sports", href: "/campus-life/sports" },
  { label: "Events", href: "/campus-life/events" },
];
const associationsSubmenus = [
  { label: "Industry Partnership", href: "/associations/industry" },
  { label: "Student Chapters", href: "/associations/chapters" },
  { label: "International Tie-ups", href: "/associations/international" },
];

const navTabs = [
  { href: "/examination", label: "Examination" },
  { label: "Campus Life", megaMenu: campusSubmenus },
  { label: "Associations", megaMenu: associationsSubmenus },
  { href: "/grievance-cell", label: "Grievance Cell", highlight: "gold" },
  { href: "/aicte-feedback", label: "AICTE Feedback" },
  { href: "/aicte-pledge", label: "AICTE Pledge" },
  { href: "/register", label: "Register Here" },
  { href: "/alumni", label: "Alumni" },
  { href: "/gdpi-session", label: "GD/PI Session" },
  { href: "/e-brochure", label: "E-Brochure" },
  { href: "/research-blogs", label: "Research Blogs" },
  { href: "/erp", label: "ERP" },
  { href: "/coursera", label: "Coursera" },
  { href: "/login", label: "Login" },
  { href: "/iqac", label: "IQAC" },
  { href: "/virtual-tour", label: "Virtual Tour" },
  { href: "/tedxgims", label: "TedxGIMS" },
  { href: "/intl-immersion", label: "International Immersion Program", highlight: "gold" },
  { href: "/pay-fee", label: "Pay Fee Online", highlight: "button" },
];

export default function OneLineMegaMenu() {
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // For keyboard accessibility (optional)
  const handleKeyDown = (e, label) => {
    if (e.key === "Enter" || e.key === " ") setOpenMega(label);
    if (e.key === "Escape") setOpenMega(null);
  };

  return (
    <nav className="w-full bg-[#154285] border-b border-[#e4e8f0] text-[15px] font-normal shadow z-40 relative">
      <div className="max-w-screen-2xl mx-auto h-[44px] flex items-center px-1 sm:px-2 relative">
        {/* Desktop Row */}
        <div className="hidden md:flex items-center space-x-0.5 overflow-x-auto whitespace-nowrap h-full w-full no-scrollbar">
          {navTabs.map(tab =>
            tab.megaMenu ? (
              <div
                key={tab.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenMega(tab.label)}
                onMouseLeave={() => setOpenMega(null)}
                tabIndex={0}
                onKeyDown={e => handleKeyDown(e, tab.label)}
                aria-haspopup="true"
                aria-expanded={openMega === tab.label}
              >
                <span
                  className="px-2 text-white hover:text-[#ffc107] cursor-pointer flex items-center h-full group transition-colors duration-200 outline-none"
                >
                  {tab.label}
                  <svg className="ml-0.5 mb-0.5 h-3 w-3 text-[#ffc107] group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </span>
                {/* Floating minimal sub menu */}
                {openMega === tab.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 min-w-[170px] bg-white border border-[#e4e8f0] rounded-md shadow-xl animate-fadeIn z-30 py-1">
                    {tab.megaMenu.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-1 text-[15px] text-[#154285] hover:bg-[#ffc107]/20 hover:text-[#154285] transition rounded"
                        tabIndex={0}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  relative px-2 py-1 transition duration-200 rounded
                  ${tab.highlight === "gold"
                    ? "bg-[#ffc107]/85 text-[#154285] hover:bg-[#ffd747]/95"
                    : tab.highlight === "button"
                    ? "ml-2 px-3 py-1 bg-[#ffc107] text-[#154285] rounded-full shadow hover:bg-[#ffd747] font-semibold"
                    : "text-white hover:text-[#ffc107]"
                  }
                `}
                style={{ lineHeight: '22px', fontWeight: tab.highlight === "button" ? 500 : 400 }}
                tabIndex={0}
              >
                {tab.label}
                {/* Underline animation */}
                {tab.highlight !== "button" && (
                  <span className="absolute left-0 -bottom-[2px] w-full h-0.5 bg-[#ffc107] scale-x-0 hover:scale-x-100 transition-transform origin-left duration-200"></span>
                )}
              </Link>
            )
          )}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-7 h-7 text-[#ffc107]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#154285] border-t border-[#e4e8f0] px-3 pb-3 pt-2">
          {navTabs.map(tab =>
            tab.megaMenu ? (
              <details key={tab.label} className="mb-1">
                <summary className="cursor-pointer py-2 text-white flex items-center rounded hover:bg-[#ffc107]/10">
                  {tab.label}
                  <svg className="ml-1 w-4 h-4 text-[#ffc107]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 space-y-1 mt-1 text-[15px]">
                  {tab.megaMenu.map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block py-2 pl-2 text-[#154285] bg-white hover:bg-[#ffc107]/10 hover:text-[#ffc107] rounded transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={tab.href}
                href={tab.href}
                className={`block py-2 px-2 mt-1 rounded transition ${
                  tab.highlight === "gold"
                    ? "bg-[#ffc107]/90 text-[#154285]"
                    : tab.highlight === "button"
                    ? "bg-[#ffc107] text-[#154285] rounded-full text-center font-semibold"
                    : "text-white hover:text-[#ffc107]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {tab.label}
              </Link>
            )
          )}
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(8px) scale(0.95);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s cubic-bezier(.39,.58,.57,1.14) both;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
}
