"use client";
import { useState, useEffect } from "react";

const SECTIONS = ["about", "projects", "stack", "contact"] as const;

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M1 7L8 1L15 7V16C15 16.552 14.552 17 14 17H10V12H6V17H2C1.448 17 1 16.552 1 16V7Z"
        stroke={active ? "#ffb800" : "#71717a"} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
function ProjectsIcon({ active }: { active: boolean }) {
  const c = active ? "#ffb800" : "#71717a";
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <rect x="1" y="1" width="8" height="5" rx="0.5" stroke={c} strokeWidth="1.3" />
      <rect x="11" y="1" width="8" height="5" rx="0.5" stroke={c} strokeWidth="1.3" />
      <rect x="1" y="8" width="8" height="5" rx="0.5" stroke={c} strokeWidth="1.3" />
      <rect x="11" y="8" width="8" height="5" rx="0.5" stroke={c} strokeWidth="1.3" />
    </svg>
  );
}
function StackIcon({ active }: { active: boolean }) {
  const c = active ? "#ffb800" : "#71717a";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1L17 5.5L9 10L1 5.5L9 1Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M1 9L9 13.5L17 9" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M1 13L9 17.5L17 13" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
function ContactIcon({ active }: { active: boolean }) {
  const c = active ? "#ffb800" : "#71717a";
  return (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
      <rect x="1" y="1" width="17" height="14" rx="1" stroke={c} strokeWidth="1.3" />
      <path d="M1 4L9.5 9.5L18 4" stroke={c} strokeWidth="1.3" />
    </svg>
  );
}

const NAV = [
  { id: "home",     label: "HOME",     href: "#",        Icon: HomeIcon },
  { id: "projects", label: "PROJECTS", href: "#projects", Icon: ProjectsIcon },
  { id: "stack",    label: "STACK",    href: "#stack",    Icon: StackIcon },
  { id: "contact",  label: "CONTACT",  href: "#contact",  Icon: ContactIcon },
] as const;

export default function BottomNavBar() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 flex items-center border-t border-[#27272a]"
      style={{ backdropFilter: "blur(12px)", background: "rgba(9,9,11,0.9)" }}
    >
      {NAV.map(({ id, label, href, Icon }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={href}
            onClick={() => setActive(id)}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2"
            style={isActive ? { filter: "drop-shadow(0 0 4px rgba(255,184,0,0.6))" } : undefined}
          >
            <Icon active={isActive} />
            <span
              className="font-[family-name:var(--font-inter)] font-semibold text-[10px] uppercase"
              style={{ color: isActive ? "#ffb800" : "#71717a" }}
            >
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
