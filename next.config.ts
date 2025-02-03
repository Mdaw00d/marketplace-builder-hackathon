import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ Allows Next.js to load images from Sanity
  },
};

export default nextConfig;
