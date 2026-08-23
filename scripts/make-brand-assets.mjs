import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const appDir = join(__dirname, "..", "app");

// Site palette: dark #131313 / #0e0e0e, amber accent #ffb800, muted #d5c4ab

// Shrek-style chunky rounded S: thick monoline centerline with round caps,
// drawn twice (dark outline behind, amber gradient on top).
// Centerline is authored in a 0..100 box, then transformed into place.
const S_PATH =
  "M78 26 C78 10 30 8 26 30 C22 52 74 50 74 72 C74 94 26 96 22 74";

function badge({ size, sInkOutline = true }) {
  // Everything scales from a 100x100 icon coordinate space.
  const s = size / 100;
  return `
  <g transform="scale(${s})">
    <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#badge)" stroke="#ffb800" stroke-opacity="0.6" stroke-width="1.5"/>
    <g transform="translate(50,52) scale(0.72) translate(-50,-52)">
      ${sInkOutline ? `<path d="${S_PATH}" fill="none" stroke="#2a1c00" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
      <path d="${S_PATH}" fill="none" stroke="url(#sfill)" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>`;
}

const DEFS = `
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
      <stop offset="0" stop-color="#242020"/>
      <stop offset="1" stop-color="#141212"/>
    </linearGradient>
    <linearGradient id="sfill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd155"/>
      <stop offset="1" stop-color="#ffb800"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>`;

// ---- OG image 1200x630 ----
const W = 1200, H = 630;
const badgeSize = 220;
const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${DEFS}
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g filter="url(#shadow)" transform="translate(${(W - badgeSize) / 2}, 108)">
    ${badge({ size: badgeSize })}
  </g>
  <text x="600" y="452" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="86" font-weight="bold" letter-spacing="-1"><tspan fill="#FFFFFF">Shinka</tspan><tspan fill="#ffb800">.DEV</tspan></text>
  <text x="600" y="516" text-anchor="middle"
        font-family="DejaVu Sans, Liberation Sans, sans-serif"
        font-size="34" fill="#d5c4ab">Разработка сайтов и веб-приложений</text>
</svg>`;

// ---- Standalone icon (square) ----
function iconSvg(size) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  ${DEFS}
  ${badge({ size })}
</svg>`;
}

// Build a .ico that embeds a single PNG image (ICO supports PNG payloads).
function pngToIco(pngBuffer, dim) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(dim >= 256 ? 0 : dim, 0); // width (0 == 256)
  entry.writeUInt8(dim >= 256 ? 0 : dim, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngBuffer.length, 8); // size
  entry.writeUInt32LE(6 + 16, 12); // offset
  return Buffer.concat([header, entry, pngBuffer]);
}

await sharp(Buffer.from(ogSvg)).png().toFile(join(publicDir, "og-image.png"));
await sharp(Buffer.from(iconSvg(512))).png().toFile(join(appDir, "icon.png"));

const icoPng = await sharp(Buffer.from(iconSvg(256))).png().toBuffer();
writeFileSync(join(appDir, "favicon.ico"), pngToIco(icoPng, 256));

console.log("wrote og-image.png, app/icon.png, app/favicon.ico");
