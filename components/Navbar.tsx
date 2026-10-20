"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteMessages } from "@/messages/en";

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

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    const home = `/${lang}`;
    const current = window.location.pathname.replace(/\/$/, "") || "/";
    if (current !== home) return;

    event.preventDefault();
    window.history.pushState(null, "", `${home}/`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: messages.about },
    { id: "projects", label: messages.projects },
    { id: "stack", label: messages.stack },
    { id: "contact", label: messages.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#0E0E10]/80 backdrop-blur-md">
        <div
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between"
          style={{ paddingLeft: "max(1.5rem, env(safe-area-inset-left))", paddingRight: "max(1.5rem, env(safe-area-inset-right))" }}
        >

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
            <Link
              href={`/${lang}`}
              onClick={handleHomeClick}
              className="font-extrabold tracking-wider text-xl text-[#F5A623] hover:brightness-110 transition-all duration-200 uppercase whitespace-nowrap"
            >
              {messages.brand}
            </Link>
          </div>

          {/* Desktop nav */}
          <nav aria-label={lang === "ru" ? "Основная навигация" : "Main navigation"} className="flex items-center space-x-6 md:space-x-8">
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-[#F5A623] transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="hidden sm:flex items-center pl-2 pr-1 border-l border-neutral-800">
              <Link
                href={`${targetPath}${hash}`}
                aria-label={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
                title={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
                className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                <Flag locale={targetLocale} />
                <span className="font-medium tracking-wide uppercase">{targetLabel}</span>
              </Link>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#F5A623] text-black font-semibold text-sm px-4 sm:px-5 py-2.5 hover:bg-[#FFB834] transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              {messages.hireMe}
            </a>
          </nav>

        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 pt-20">
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
            <Link
              href={`${targetPath}${hash}`}
              aria-label={`${messages.languageLabel}: ${targetLocale.toUpperCase()}`}
              className="sm:hidden inline-flex items-center gap-2 text-neutral-300 py-3"
            >
              <Flag locale={targetLocale} />
              <span className="uppercase tracking-wide">{targetLabel}</span>
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#F5A623] text-black font-semibold text-[16px] px-6 py-3 text-center mt-2 hover:bg-[#FFB834] transition-colors"
            >
              {messages.hireMe}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

function Flag({ locale }: { locale: Locale }) {
  if (locale === "ru") {
    return (
      <svg className="w-4 h-3.5 rounded-[2px] shadow-sm overflow-hidden" viewBox="0 0 9 6" aria-hidden>
        <rect width="9" height="2" fill="#fff" />
        <rect y="2" width="9" height="2" fill="#0039A6" />
        <rect y="4" width="9" height="2" fill="#D52B1E" />
      </svg>
    );
  }

  return (
    <svg className="w-4 h-3.5 rounded-[2px] shadow-sm overflow-hidden" fill="none" viewBox="0 0 640 480" aria-hidden>
      <path d="M0 0h640v480H0z" fill="#012169" />
      <path d="m75 0 245 180L565 0h75v50L405 200l235 170v110h-75L320 300 75 480H0v-50l235-170L0 90V0h75z" fill="#FFF" />
      <path d="m424 282 216 158v40l-270-200 54 2zM640 0v10L456 148l36 28L640 46V0zM0 480v-10l184-138-36-28L0 434v46zm0-480v10l184 138-36 28L0 46V0z" fill="#C8102E" />
      <path d="M260 0h120v480H260zM0 180h640v120H0z" fill="#FFF" />
      <path d="M284 0h72v480h-72zM0 204h640v72H0z" fill="#C8102E" />
    </svg>
  );
}
