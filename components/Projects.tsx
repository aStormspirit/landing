"use client";
import dynamic from "next/dynamic";
const ThreatMap = dynamic(() => import("./ThreatMap"), { ssr: false });

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
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-[48px] md:gap-[80px]">

        {/* Section header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[30px] md:text-[40px] tracking-[-0.01em] leading-[1.2]">
              KEY_WORK
            </h2>
            <span className="font-[family-name:var(--font-space-mono)] text-[#ffb800] text-[12px] md:text-[13px]">
              DEPLOYED_SOLUTIONS_v4.2
            </span>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-white/40 text-[16px] hover:text-white/70 transition-colors"
          >
            VIEW_ALL_REPOS <ArrowIcon />
          </a>
        </div>

        {/* ── MOBILE layout: vertical stack ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Large feature card */}
          <div
            className="overflow-hidden"
            style={{ border: "1px solid rgba(255,184,0,0.1)", backdropFilter: "blur(6px)", background: "rgba(20,19,19,0.7)" }}
          >
            <div className="relative h-[220px] overflow-hidden">
              <ThreatMap />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-2 flex-wrap">
                <Tag label="CYBER_SEC" accent />
                <Tag label="REACT" />
                <Tag label="AWS" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white text-[16px] leading-[1.5]">
                NEURAL_SHIELD INFRASTRUCTURE
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.5]">
                A high-performance security monitoring dashboard capable of processing
                2.4 million events per second with zero-latency visualization.
              </p>
              <a
                href="#"
                className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-space-grotesk)] text-[16px] px-6 py-3 inline-flex items-center gap-2 w-fit transition-[filter] hover:brightness-110"
              >
                CASE_STUDY <ArrowIcon />
              </a>
            </div>
          </div>

          <SmallCardMobile
            label="PROJECT_02"
            title="CLOUD_STRATOS"
            description="Automated multi-region AWS deployment pipeline reducing lead time by 75%."
            dotColor="#fe6b00"
            tech="TERRAFORM"
          />
          <SmallCardMobile
            label="PROJECT_03"
            title="KUBE_MESH"
            description="Service mesh orchestration for microservices environment with Istio."
            dotColor="#ffb800"
            tech="KUBERNETES"
          />

          <a href="#" className="flex items-center justify-center gap-2 font-[family-name:var(--font-space-grotesk)] text-white/40 text-[16px] hover:text-white/70 transition-colors py-2">
            VIEW_ALL_REPOS <ArrowIcon />
          </a>
        </div>

        {/* ── DESKTOP layout: bento grid ── */}
        <div className="hidden md:grid grid-cols-3 gap-6" style={{ height: 800 }}>
          <div className="col-span-2 row-span-2 glass relative overflow-hidden flex flex-col justify-end">
            <ThreatMap />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-[11]" />
            <div className="relative z-[12] p-8 flex flex-col gap-2">
              <div className="flex gap-2">
                <Tag label="CYBER_SEC" accent />
                <Tag label="REACT" />
                <Tag label="AWS" />
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

          <SmallCard
            label="PROJECT_02"
            title="CLOUD_STRATOS"
            description="Automated multi-region AWS deployment pipeline reducing lead time by 75%."
            dotColor="#fe6b00"
            tech="TERRAFORM"
          />
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

function Tag({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className="font-[family-name:var(--font-space-mono)] text-[10px] px-[9px] py-[5px]"
      style={{
        border: `1px solid ${accent ? "#ffb800" : "rgba(255,255,255,0.2)"}`,
        color: accent ? "#ffb800" : "rgba(255,255,255,0.6)",
      }}
    >
      {label}
    </span>
  );
}

function SmallCard({ label, title, description, dotColor, tech }: {
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

function SmallCardMobile({ label, title, description, dotColor, tech }: {
  label: string; title: string; description: string; dotColor: string; tech: string;
}) {
  return (
    <div
      className="flex flex-col justify-between p-6 gap-4"
      style={{
        backdropFilter: "blur(6px)",
        background: "rgba(20,19,19,0.7)",
        borderTop: "1px solid #ffb800",
        borderRight: "1px solid #ffb800",
        borderBottom: "1px solid #ffb800",
        borderLeft: "2px solid #ffb800",
      }}
    >
      <div className="flex flex-col gap-2">
        <span className="font-[family-name:var(--font-space-mono)] text-white/40 text-[10px]">{label}</span>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-white text-[20px] leading-[1.4]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.6]">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full" style={{ background: dotColor }} />
        <span className="font-[family-name:var(--font-space-mono)] text-white/60 text-[10px]">{tech}</span>
      </div>
    </div>
  );
}
