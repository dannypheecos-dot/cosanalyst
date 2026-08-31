import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
  // Apex custom domain serves the export at site root.
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
