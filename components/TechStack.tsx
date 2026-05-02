const ICONS: { name: string; src: string; w: number; h: number }[] = [
  { name: "NODE.JS",    src: "https://www.figma.com/api/mcp/asset/21c2d216-d67b-436a-8324-210865d82540", w: 25, h: 20 },
  { name: "AWS",        src: "https://www.figma.com/api/mcp/asset/bc415dc6-788a-4394-9a87-62e003ab3278", w: 27, h: 20 },
  { name: "REACT",      src: "https://www.figma.com/api/mcp/asset/d945b7d2-2e2f-4a45-985f-ca376a057e58", w: 25, h: 20 },
  { name: "POSTGRESQL", src: "https://www.figma.com/api/mcp/asset/7c7c9208-6317-4746-8136-61aa9c702463", w: 22, h: 22 },
  { name: "DOCKER",     src: "https://www.figma.com/api/mcp/asset/3ac8261b-6651-481b-97b0-83a37dc7874f", w: 22, h: 22 },
  { name: "OAUTH 2.0",  src: "https://www.figma.com/api/mcp/asset/a1dec599-6e98-47b3-9cf1-0d73880b6822", w: 20, h: 25 },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-[#131313] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-[80px]">

        <div className="flex flex-col items-center gap-4">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[40px] tracking-[-0.01em]">
            THE_TECH_STACK
          </h2>
          <div className="bg-[#ffb800] h-1 w-20" />
        </div>

        <div className="grid grid-cols-6 gap-6">
          {ICONS.map(({ name, src, w, h }) => (
            <div key={name} className="glass flex flex-col items-center gap-4 p-[25px]">
              <div className="bg-[rgba(255,184,0,0.1)] rounded-[4px] size-12 flex items-center justify-center">
                <img
                  src={src}
                  alt={name}
                  style={{ width: w, height: h }}
                  className="object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-space-mono)] text-white/80 text-[12px] uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
