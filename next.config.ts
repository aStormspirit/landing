import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  // Custom domain (shinkadev.org) serves from root, so no basePath/assetPrefix.
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
