import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
  // Project Pages live at /cosanalyst until the apex DNS is pointed.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/cosanalyst",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/cosanalyst",
};

export default nextConfig;
