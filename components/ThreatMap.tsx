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

const EVENTS = [
  { t: "ok",   m: "ssh handshake from 203.0.113.42" },
  { t: "bad",  m: "anomaly: port scan from 198.51.100.7" },
  { t: "ok",   m: "tls negotiated — cipher TLS_AES_256_GCM" },
  { t: "warn", m: "firewall drop udp/53 from 192.0.2.18" },
  { t: "bad",  m: "geo-block: incoming RU/Vladivostok" },
  { t: "ok",   m: "cert validated — sha256:8f3a9b2e..." },
  { t: "warn", m: "rate-limit hit /api/v1/login" },
  { t: "bad",  m: "brute-force detected — banned 24h" },
  { t: "ok",   m: "backup checkpoint complete" },
  { t: "warn", m: "unusual traffic from AS-15169" },
];

const TAG: Record<string, string> = { ok: "[OK]", warn: "[--]", bad: "[!!]" };
const CLS: Record<string, string> = {
  ok: "text-[#00ff9d]",
  warn: "text-[#ffb84a]",
  bad: "text-[#ff3a6e]",
};

export default function ThreatMap() {
  const svgRef     = useRef<SVGSVGElement>(null);
  const fillRef    = useRef<HTMLDivElement>(null);
  const termRef    = useRef<HTMLDivElement>(null);
  const connRef    = useRef<HTMLSpanElement>(null);
  const threatRef  = useRef<HTMLSpanElement>(null);
  const blockedRef = useRef<HTMLSpanElement>(null);
  const latRef     = useRef<HTMLSpanElement>(null);
  const loadRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
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
        if (!mounted) return;
        const c = CITIES[Math.floor(Math.random() * CITIES.length)];
        const [x, y] = projection(c)!;
        spawnPulseAt(x, y);
      };

      const spawnArc = () => {
        if (!mounted) return;
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

      let conn = 14237, threats = 0, blocked = 47;
      const fmt = (n: number) => n.toLocaleString("en-US");
      timers.push(setInterval(() => {
        if (!mounted) return;
        conn += Math.floor(Math.random() * 9) - 3;
        if (Math.random() < 0.45) threats++;
        if (Math.random() < 0.65) blocked++;
        if (connRef.current)    connRef.current.textContent    = fmt(conn);
        if (threatRef.current)  threatRef.current.textContent  = fmt(threats);
        if (blockedRef.current) blockedRef.current.textContent = fmt(blocked);
        if (latRef.current)     latRef.current.textContent     = `${8 + Math.floor(Math.random() * 10)}ms`;
      }, 800));

      let pct = 67;
      timers.push(setInterval(() => {
        if (!mounted || !fillRef.current) return;
        pct = Math.max(35, Math.min(92, pct + (Math.random() * 10 - 5)));
        fillRef.current.style.width = pct + "%";
      }, 1500));

      timers.push(setInterval(() => {
        if (!mounted || !termRef.current) return;
        const e = EVENTS[Math.floor(Math.random() * EVENTS.length)];
        termRef.current.innerHTML =
          `<span class="terminal-line"><span class="${CLS[e.t]}">${TAG[e.t]}</span> ${e.m}</span>`;
      }, 1300));
    })();

    return () => {
      mounted = false;
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
          <span className="text-[#5a7a9a]">SYS_ID 0xA47F-2C19</span>
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

        {/* Stats */}
        <div className="grid grid-cols-5 gap-1.5">
          {([
            { label: "Connections", ref: connRef,    init: "14,237", alert: false },
            { label: "Threats",     ref: threatRef,  init: "0",      alert: true  },
            { label: "Blocked",     ref: blockedRef, init: "47",     alert: false },
            { label: "Latency",     ref: latRef,     init: "12ms",   alert: false },
            { label: "Uptime",      ref: null,       init: "99.97%", alert: false },
          ] as const).map(({ label, ref: statRef, init, alert }) => (
            <div
              key={label}
              className="pl-2 py-1.5"
              style={{
                borderLeft: `2px solid ${alert ? "#ff3a6e" : "#50c8ff"}`,
                background: `rgba(${alert ? "255,58,110" : "80,200,255"},0.04)`,
              }}
            >
              <div className="text-[8px] text-[#5a7a9a] tracking-[0.18em] uppercase mb-0.5">{label}</div>
              <div
                className="text-[13px] font-semibold tabular-nums"
                style={{ color: alert ? "#ff3a6e" : "#50c8ff" }}
              >
                {statRef ? <span ref={statRef}>{init}</span> : init}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="h-1.5 rounded-sm overflow-hidden" style={{ background: "rgba(80,200,255,0.08)" }}>
          <div
            ref={fillRef}
            className="h-full rounded-sm"
            style={{
              width: "67%",
              background: "linear-gradient(90deg, #50c8ff, #00ff9d)",
              boxShadow: "0 0 12px rgba(80,200,255,0.5)",
              transition: "width 0.6s ease-out",
            }}
          />
        </div>

        {/* Terminal */}
        <div ref={termRef} className="text-[9px] text-[#5a7a9a] h-[14px] overflow-hidden tracking-[0.05em]" />
      </div>
    </div>
  );
}
