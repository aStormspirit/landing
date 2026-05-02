export default function Hero() {
  return (
    <section className="relative bg-[#131313] flex items-center justify-center overflow-hidden py-[100px] pt-[164px] min-h-screen">
      {/* Radial blob */}
      <div
        className="absolute size-[800px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,184,0,0.15) 0%, rgba(255,184,0,0) 70%)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-[family-name:var(--font-space-mono)] text-[12px] tracking-[0.1em] text-[#e5e2e1] uppercase">
          Scroll
        </span>
        <div className="scroll-line w-px h-12 bg-gradient-to-b from-[#ffb800] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] px-6">
        <div className="max-w-[896px] flex flex-col gap-[14px]">

          {/* Status badge */}
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[#ffb800] shadow-[0_0_8px_#ffb800]" />
            <span className="font-[family-name:var(--font-space-mono)] text-[#ffb800] text-[12px] tracking-[0.1em]">
              SYSTEM_STATUS: OPERATIONAL
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[64px] leading-[0.9] tracking-[-0.05em] text-white">
              ARCHITECTING
            </h1>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[64px] leading-[0.9] tracking-[-0.05em] text-[#ffb800]">
              DIGITAL ECOSYSTEMS
            </h1>
          </div>

          {/* Description */}
          <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[18px] leading-[1.6] max-w-[672px] mt-1">
            Alex Rivera — Senior IT Specialist &amp; Full-Stack Engineer. Specializing in high-performance
            infrastructure, cloud-native solutions, and precision-engineered software.
          </p>

          {/* CTAs */}
          <div className="flex gap-6 items-center mt-[17px]">
            <a
              href="#projects"
              className="bg-[#ffb800] border border-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-space-grotesk)] text-[16px] px-[33px] py-[17px] inline-block transition-[filter] hover:brightness-110"
            >
              VIEW_PROJECTS
            </a>
            <a
              href="#"
              className="border border-[#ffb800] text-[#ffb800] font-[family-name:var(--font-space-grotesk)] text-[16px] px-[33px] py-[17px] inline-block transition-[background] hover:bg-[rgba(255,184,0,0.08)]"
            >
              DOWNLOAD_RESUME
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
