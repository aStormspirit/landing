"use client";
import { useState } from "react";

const AVATAR = "https://www.figma.com/api/mcp/asset/f993183f-5660-4f34-9660-4d45616927df";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a]"
        style={{ backdropFilter: "blur(6px)", background: "rgba(9,9,11,0.8)", boxShadow: "0 0 10px rgba(255,184,0,0.1)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left: hamburger (mobile) + logo */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <rect width="18" height="2" fill="currentColor" />
                <rect y="5" width="18" height="2" fill="currentColor" />
                <rect y="10" width="18" height="2" fill="currentColor" />
              </svg>
            </button>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] text-[#ffb800] tracking-[-0.05em] uppercase">
              Shinka.DEV
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Projects", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link font-[family-name:var(--font-space-grotesk)] text-white/60 text-[16px]"
              >
                {item}
              </a>
            ))}
            <div className="pl-4">
              <a
                href="#contact"
                className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-inter)] font-semibold text-[16px] px-6 py-2 inline-block transition-[filter] hover:brightness-110"
              >
                Hire Me
              </a>
            </div>
          </nav>

          {/* Mobile: circular avatar */}
          <div className="md:hidden border border-[rgba(245,158,11,0.3)] rounded-full size-8 overflow-hidden shrink-0">
            <img src={AVATAR} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 pt-16">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <nav
            className="relative border-b border-[#27272a] flex flex-col py-4 px-6 gap-2"
            style={{ backdropFilter: "blur(12px)", background: "rgba(9,9,11,0.95)" }}
          >
            {["About", "Projects", "Stack", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-space-grotesk)] text-white/60 text-[18px] py-3 border-b border-white/5 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-inter)] font-semibold text-[16px] px-6 py-3 text-center mt-2 transition-[filter] hover:brightness-110"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
