"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteMessages } from "@/messages/en";

const AVATAR = "/avatar.jpg";

type NavbarMessages = SiteMessages["navbar"];

type NavbarProps = {
  lang: Locale;
  messages: NavbarMessages;
};

export default function Navbar({ lang, messages }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  const targetLocale: Locale = lang === "en" ? "ru" : "en";
  const targetFlag = targetLocale === "ru" ? "🇷🇺" : "🇬🇧";
  const targetLabel = targetLocale === "ru" ? "ru" : "eng";
  const targetPath = useMemo(() => {
    if (!pathname) {
      return `/${targetLocale}`;
    }

    const localizedPath = pathname.replace(/^\/(en|ru)(?=\/|$)/, `/${targetLocale}`);
    if (localizedPath === pathname) {
      return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
    }

    return localizedPath;
  }, [pathname, targetLocale]);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navItems = [
    { id: "about", label: messages.about },
    { id: "projects", label: messages.projects },
    { id: "stack", label: messages.stack },
    { id: "contact", label: messages.contact },
  ];

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
              aria-label={messages.toggleMenuAria}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <rect width="18" height="2" fill="currentColor" />
                <rect y="5" width="18" height="2" fill="currentColor" />
                <rect y="10" width="18" height="2" fill="currentColor" />
              </svg>
            </button>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] text-[#ffb800] tracking-[-0.05em] uppercase">
              {messages.brand}
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link font-[family-name:var(--font-space-grotesk)] text-white/60 text-[16px]"
              >
                {item.label}
              </a>
            ))}
            <div className="pl-4 border-l border-white/10 flex items-center">
              <Link
                href={`${targetPath}${hash}`}
                aria-label={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
                title={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
                className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-[14px] text-white/80 hover:text-[#ffb800] transition-colors"
              >
                <span aria-hidden className="text-[18px] leading-none">{targetFlag}</span>
                <span className="uppercase tracking-wide">{targetLabel}</span>
              </Link>
            </div>
            <div className="pl-4">
              <a
                href="#contact"
                className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-inter)] font-semibold text-[16px] px-6 py-2 inline-block transition-[filter] hover:brightness-110"
              >
                {messages.hireMe}
              </a>
            </div>
          </nav>

          {/* Mobile: language switcher + avatar */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href={`${targetPath}${hash}`}
              aria-label={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
              title={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
              className="inline-flex items-center gap-1 font-[family-name:var(--font-space-grotesk)] text-[13px] text-white/80 hover:text-[#ffb800] transition-colors"
            >
              <span aria-hidden className="text-[16px] leading-none">{targetFlag}</span>
              <span className="uppercase tracking-wide">{targetLabel}</span>
            </Link>
            <div className="border border-[rgba(245,158,11,0.3)] rounded-full size-8 overflow-hidden shrink-0">
              <img src={AVATAR} alt="Avatar" className="w-full h-full object-cover" />
            </div>
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-space-grotesk)] text-white/60 text-[18px] py-3 border-b border-white/5 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-inter)] font-semibold text-[16px] px-6 py-3 text-center mt-2 transition-[filter] hover:brightness-110"
            >
              {messages.hireMe}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
