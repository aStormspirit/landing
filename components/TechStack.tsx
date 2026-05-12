const ICONS: { name: string; src: string; w: number; h: number }[] = [
  { name: "NODE.JS",    src: "/assets/icon-nodejs.svg",     w: 25, h: 20 },
  { name: "AWS",        src: "/assets/icon-aws.svg",        w: 27, h: 20 },
  { name: "REACT",      src: "/assets/icon-react.svg",      w: 25, h: 20 },
  { name: "POSTGRESQL", src: "/assets/icon-postgresql.svg", w: 22, h: 22 },
  { name: "DOCKER",     src: "/assets/icon-docker.svg",     w: 22, h: 22 },
  { name: "OAUTH 2.0",  src: "/assets/icon-oauth.svg",      w: 20, h: 25 },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-[#131313] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-8 md:gap-[80px]">

        <div className="flex flex-col items-center gap-4">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[30px] md:text-[40px] tracking-[-0.01em] uppercase">
            THE_TECH_STACK
          </h2>
          <div className="bg-[#ffb800] h-[2px] w-16" />
        </div>

        {/* 2-col on mobile, 6-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {ICONS.map(({ name, src, w, h }) => (
            <div
              key={name}
              className="glass flex flex-col items-center gap-3 p-6 md:p-[25px]"
              style={{ border: "1px solid rgba(255,184,0,0.1)" }}
            >
              <div className="bg-[rgba(255,184,0,0.1)] rounded-[4px] size-12 flex items-center justify-center">
                <img src={src} alt={name} style={{ width: w, height: h }} className="object-contain" />
              </div>
              <span className="font-[family-name:var(--font-space-mono)] text-white/80 text-[10px] uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
