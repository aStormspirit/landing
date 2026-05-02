export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-t-0 border-l-0 border-r-0 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] text-[#ffb800] tracking-[-0.05em] uppercase">
          Shinka.DEV
        </span>

        <nav className="flex items-center gap-6">
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
              className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-inter)] font-semibold text-[16px] px-6 py-2 rounded-[4px] inline-block transition-[filter] hover:brightness-110"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
