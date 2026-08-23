import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7C3AED"/>
      <stop offset="0.55" stop-color="#5B21B6"/>
      <stop offset="1" stop-color="#3B0F73"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.36" r="0.6">
      <stop offset="0" stop-color="#A78BFA" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#A78BFA" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#6D28D9"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="26" flood-color="#1E0A45" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- icon badge -->
  <g filter="url(#shadow)">
    <rect x="490" y="118" width="220" height="220" rx="52" fill="url(#badge)" stroke="#C4B5FD" stroke-opacity="0.35" stroke-width="2"/>
  </g>
  <text x="600" y="262" text-anchor="middle"
        font-family="DejaVu Sans Mono, Liberation Mono, monospace"
        font-size="118" font-weight="bold" fill="#FFFFFF" letter-spacing="-4">&lt;/&gt;</text>

  <!-- wordmark -->
  <text x="600" y="452" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="86" font-weight="bold" fill="#FFFFFF" letter-spacing="-1">Shinka.DEV</text>

  <!-- subtitle -->
  <text x="600" y="516" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="34" font-weight="normal" fill="#DDD6FE">Разработка сайтов и веб-приложений</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
