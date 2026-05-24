import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/landing" : "",
  assetPrefix: isProd ? "/landing" : "",
  // Bake basePath into the bundle so fetch() in client components resolves correctly on GH Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/landing" : "",
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
