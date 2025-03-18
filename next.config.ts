import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // This will skip optimization but allow local images to work
  }
};

export default nextConfig;