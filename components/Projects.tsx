const LARGE_CARD_IMG = "https://www.figma.com/api/mcp/asset/d253a347-9f81-48f7-a510-b80e1cdac748";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0e0e0e] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-[80px]">

        {/* Section header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[40px] tracking-[-0.01em] leading-[1.2]">
              KEY_WORK
            </h2>
            <span className="font-[family-name:var(--font-space-mono)] text-[#ffb800] text-[13px]">
              DEPLOYED_SOLUTIONS_v4.2
            </span>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-white/40 text-[16px] hover:text-white/70 transition-colors"
          >
            VIEW_ALL_REPOS <ArrowIcon />
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 gap-6" style={{ height: 800 }}>

          {/* Large card */}
          <div className="col-span-2 row-span-2 glass relative overflow-hidden flex flex-col justify-end">
            <img
              src={LARGE_CARD_IMG}
              alt="Neural Shield"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative p-8 flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="border border-[#ffb800] text-[#ffb800] font-[family-name:var(--font-space-mono)] text-[10px] px-[9px] py-[5px]">
                  CYBER_SEC
                </span>
                <span className="border border-white/20 text-white/60 font-[family-name:var(--font-space-mono)] text-[10px] px-[9px] py-[5px]">
                  REACT
                </span>
                <span className="border border-white/20 text-white/60 font-[family-name:var(--font-space-mono)] text-[10px] px-[9px] py-[5px]">
                  AWS
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white text-[16px] leading-[1.5] mt-2">
                NEURAL_SHIELD INFRASTRUCTURE
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.5] max-w-[576px] pb-4">
                A high-performance security monitoring dashboard capable of processing
                2.4 million events per second with zero-latency visualization.
              </p>
              <a
                href="#"
                className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-space-grotesk)] text-[16px] px-6 py-2 inline-flex items-center gap-2 w-fit transition-[filter] hover:brightness-110"
              >
                CASE_STUDY <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Small card 1 */}
          <SmallCard
            label="PROJECT_02"
            title="CLOUD_STRATOS"
            description="Automated multi-region AWS deployment pipeline reducing lead time by 75%."
            dotColor="#fe6b00"
            tech="TERRAFORM"
          />

          {/* Small card 2 */}
          <SmallCard
            label="PROJECT_03"
            title="KUBE_MESH"
            description="Service mesh orchestration for microservices environment with Istio."
            dotColor="#ffb800"
            tech="KUBERNETES"
          />

        </div>
      </div>
    </section>
  );
}

function SmallCard({
  label, title, description, dotColor, tech,
}: {
  label: string; title: string; description: string; dotColor: string; tech: string;
}) {
  return (
    <div className="glass flex flex-col justify-between p-[33px]">
      <div className="flex flex-col gap-[7px]">
        <span className="font-[family-name:var(--font-space-mono)] text-white/40 text-[12px]">{label}</span>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-white text-[16px] leading-[1.5] mt-[9px]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.6]">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full" style={{ background: dotColor }} />
          <span className="font-[family-name:var(--font-space-mono)] text-white/60 text-[10px]">{tech}</span>
        </div>
        <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
