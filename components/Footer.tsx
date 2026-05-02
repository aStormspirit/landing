const LINKS = ["GITHUB", "LINKEDIN", "TWITTER", "RESUME"] as const;

export default function Footer() {
  return (
    <footer className="hidden md:block bg-black border-t border-white/10 py-[48px]">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[12px] text-[#f59e0b] tracking-[0.1em] uppercase">
          © 2024 ARCHITECT_PORTFOLIO // SYSTEM_STABLE
        </span>
        <div className="flex gap-8">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-[family-name:var(--font-space-grotesk)] text-[12px] text-white/40 tracking-[0.1em] uppercase hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
