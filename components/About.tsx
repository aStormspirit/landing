const PORTRAIT = "https://www.figma.com/api/mcp/asset/f993183f-5660-4f34-9660-4d45616927df";

export default function About() {
  return (
    <section id="about" className="bg-[#131313] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-6 md:items-center">

        {/* Portrait */}
        <div className="md:col-span-5 relative glass p-[5px] w-full">
          <div className="relative overflow-hidden h-[342px] md:h-[489px]">
            <img src={PORTRAIT} alt="Portrait" className="w-full h-full object-cover grayscale" />
          </div>
          {/* Years badge */}
          <div className="absolute bottom-0 right-0 bg-[#ffb800] p-4 md:p-6">
            <div className="font-[family-name:var(--font-space-grotesk)] font-bold text-[30px] md:text-[40px] leading-none tracking-[-0.01em] text-[#6b4c00]">
              7+
            </div>
            <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] text-[#6b4c00] leading-[1.25] mt-1">
              YEARS_OF<br />EXPERIENCE
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7 flex flex-col gap-6 md:py-[60px]">
          <div className="flex items-center gap-3 md:gap-4 mb-0 md:mb-2">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#ffb800] text-[30px] md:text-[40px] tracking-[-0.01em]">
              01/
            </span>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[30px] md:text-[40px] tracking-[-0.01em]">
              THE_ENGINEER
            </span>
          </div>

          <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.5]">
            I bridge the gap between complex technical infrastructure and seamless user experiences.
            My approach is rooted in the &ldquo;CAD-drawing&rdquo; aesthetic—every line of code and every server
            node must be placed with intent and precision.
          </p>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
            <div className="border-l border-[#ffb800] pl-[17px] flex flex-col gap-1">
              <span className="font-[family-name:var(--font-space-mono)] text-[#ffb800] text-[10px]">
                // SPECIALIZATION
              </span>
              <span className="font-[family-name:var(--font-inter)] font-medium text-white text-[16px] leading-[1.5]">
                Cloud Architecture &amp; DevOps Automation
              </span>
            </div>
            <div className="border-l border-white/20 pl-[17px] flex flex-col gap-1">
              <span className="font-[family-name:var(--font-space-mono)] text-white/40 text-[10px]">
                // PHILOSOPHY
              </span>
              <span className="font-[family-name:var(--font-inter)] font-medium text-white text-[16px] leading-[1.5]">
                Performance is not a feature, it&apos;s a foundation.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
