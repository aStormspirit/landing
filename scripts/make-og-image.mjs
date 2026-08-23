import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;

// Site palette: dark #131313 / #0e0e0e, amber accent #ffb800, muted #d5c4ab
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a1a1a"/>
      <stop offset="1" stop-color="#0b0b0b"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.34" r="0.55">
      <stop offset="0" stop-color="#ffb800" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#ffb800" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#222020"/>
      <stop offset="1" stop-color="#141212"/>
    </linearGradient>
    <linearGradient id="sfill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffce4d"/>
      <stop offset="1" stop-color="#ffb800"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
    <filter id="sglow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#ffb800" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- icon badge: dark square with orange S -->
  <g filter="url(#shadow)">
    <rect x="490" y="112" width="220" height="220" rx="52" fill="url(#badge)" stroke="#ffb800" stroke-opacity="0.55" stroke-width="3"/>
  </g>
  <text x="600" y="300" text-anchor="middle" filter="url(#sglow)"
        font-family="DejaVu Serif, Liberation Serif, serif"
        font-size="210" font-weight="bold" fill="url(#sfill)">S</text>

  <!-- wordmark -->
  <text x="600" y="452" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="86" font-weight="bold" letter-spacing="-1"><tspan fill="#FFFFFF">Shinka</tspan><tspan fill="#ffb800">.DEV</tspan></text>

  <!-- subtitle -->
  <text x="600" y="516" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="34" font-weight="normal" fill="#d5c4ab">Разработка сайтов и веб-приложений</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
