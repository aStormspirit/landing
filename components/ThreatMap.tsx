"use client";

import { useEffect, useRef } from "react";

const CITIES: [number, number][] = [
  [-74.0, 40.7], [-118.2, 34.0], [-87.6, 41.9], [-79.4, 43.7],
  [-46.6, -23.5], [-99.1, 19.4], [-58.4, -34.6],
  [-0.1, 51.5], [2.3, 48.8], [13.4, 52.5], [12.5, 41.9],
  [4.9, 52.4], [37.6, 55.7], [30.5, 50.5],
  [116.4, 39.9], [121.5, 31.2], [139.7, 35.7], [126.9, 37.5],
  [103.8, 1.3], [101.7, 3.1], [77.2, 28.6], [72.9, 19.1],
  [55.3, 25.3], [31.2, 30.0], [28.0, -26.2],
  [151.2, -33.9], [144.9, -37.8],
  [114.2, 22.3], [106.8, -6.2],
];

export default function ThreatMap() {
  const svgRef  = useRef<SVGSVGElement>(null);
  const loadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    let isVisible = !document.hidden;
    const onVisibility = () => { isVisible = !document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    const timers: ReturnType<typeof setInterval>[] = [];

    (async () => {
      const [d3mod, topo] = await Promise.all([
        import("d3"),
        import("topojson-client"),
      ]);
      if (!mounted || !svgRef.current) return;

      const W = 1000, H = 500;
      const projection = d3mod.geoEquirectangular()
        .scale(160)
        .translate([W / 2, H / 2]);

      const svg = d3mod.select(svgRef.current);

      try {
        const world = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
        ).then((r) => r.json());
        if (!mounted) return;

        const land = topo.feature(
          world,
          world.objects.countries as Parameters<typeof topo.feature>[1]
        );
        const dots: [number, number][] = [];
        for (let x = 0; x < W; x += 5) {
          for (let y = 0; y < H; y += 5) {
            const c = projection.invert?.([x, y]);
            if (c && c[1] > -58 && c[1] < 82 && d3mod.geoContains(land, c)) {
              dots.push([x, y]);
            }
          }
        }

        svg.select("#dots").selectAll("circle")
          .data(dots).enter().append("circle")
          .attr("cx", (d) => d[0])
          .attr("cy", (d) => d[1])
          .attr("r", 0.9)
          .attr("fill", "rgba(80,200,255,0.32)");

        if (loadRef.current) loadRef.current.style.opacity = "0";
      } catch {
        if (loadRef.current) loadRef.current.textContent = "Map data unavailable";
        return;
      }

      const spawnPulseAt = (x: number, y: number, scale = 1) => {
        if (!mounted) return;
        const g = svg.select("#pulses").append("g")
          .attr("transform", `translate(${x},${y})`);
        g.append("circle")
          .attr("r", 0).attr("fill", "none")
          .attr("stroke", "#ff3a6e").attr("stroke-width", 1).attr("opacity", 0.85)
          .transition().duration(1800)
          .attr("r", 18 * scale).attr("opacity", 0).remove();
        g.append("circle")
          .attr("r", 2.4 * scale).attr("fill", "#ff3a6e")
          .transition().duration(1800).attr("opacity", 0)
          .on("end", () => g.remove());
      };

      const spawnPulse = () => {
        if (!mounted || !isVisible) return;
        const c = CITIES[Math.floor(Math.random() * CITIES.length)];
        const [x, y] = projection(c)!;
        spawnPulseAt(x, y);
      };

      const spawnArc = () => {
        if (!mounted || !isVisible) return;
        const a = CITIES[Math.floor(Math.random() * CITIES.length)];
        let b = a;
        while (b === a) b = CITIES[Math.floor(Math.random() * CITIES.length)];
        const [x1, y1] = projection(a)!;
        const [x2, y2] = projection(b)!;
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.32 - 20;

        const path = svg.select("#arcs").append("path")
          .attr("fill", "none").attr("stroke", "#ff3a6e")
          .attr("stroke-width", 1.2).attr("stroke-linecap", "round")
          .attr("d", `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);

        const len = (path.node() as SVGPathElement).getTotalLength();
        path
          .attr("stroke-dasharray", `${len} ${len}`)
          .attr("stroke-dashoffset", len).attr("opacity", 0.9)
          .transition().duration(1400).ease(d3mod.easeCubicInOut)
          .attr("stroke-dashoffset", 0)
          .transition().duration(700).attr("opacity", 0).remove();

        spawnPulseAt(x1, y1, 0.7);
        setTimeout(() => spawnPulseAt(x2, y2, 1.1), 1400);
      };

      timers.push(setInterval(spawnPulse, 650));
      timers.push(setInterval(spawnArc, 1100));
    })();

    return () => {
      mounted = false;
      document.removeEventListener("visibilitychange", onVisibility);
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #0d1f3a 0%, #050d1a 70%)",
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
      }}
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(80,200,255,0.04) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(80,200,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col p-4 gap-2">
        {/* Header */}
        <div className="flex justify-between items-center text-[10px] tracking-[0.12em] uppercase">
          <span className="text-[#50c8ff] font-semibold">⬢ Threat Intel — Global Monitor</span>
          <span className="text-[#5a7a9a]">SYS_ID 0xA47F-2C19 // NODE 04</span>
          <span className="live-indicator flex items-center text-[#00ff9d] font-medium">Live</span>
        </div>

        {/* Progress rows */}
        {(["Scan", "Feed"] as const).map((label, i) => (
          <div key={label} className="flex items-center gap-2 text-[9px] text-[#5a7a9a] tracking-[0.14em]">
            <span className="w-[44px]">{label}</span>
            <div className="relative flex-1 h-[3px] rounded-sm overflow-hidden" style={{ background: "rgba(80,200,255,0.08)" }}>
              <div
                className="scan-bar h-full w-[30%]"
                style={{
                  background: "linear-gradient(90deg, transparent, #50c8ff 50%, transparent)",
                  animationDelay: i === 1 ? "-1.1s" : "0s",
                }}
              />
            </div>
            <span className="w-8 text-right text-[#50c8ff]">{i === 0 ? "87%" : "OK"}</span>
          </div>
        ))}

        {/* SVG Map */}
        <div
          className="relative flex-1 map-scan overflow-hidden"
          style={{ border: "1px solid rgba(80,200,255,0.15)", background: "rgba(0,8,20,0.5)" }}
        >
          <div
            ref={loadRef}
            className="absolute inset-0 flex items-center justify-center text-[#50c8ff] text-[10px] tracking-[0.2em] transition-opacity duration-500"
          >
            Initializing satellite link…
          </div>
          <svg
            ref={svgRef}
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full block"
          >
            <g id="dots" />
            <g id="arcs" />
            <g id="pulses" />
          </svg>
        </div>
      </div>
    </div>
  );
}
