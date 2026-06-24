import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.kodama.page",
      },
      {
        protocol: "https",
        hostname: "static.prod-images.emergentagent.com",
      },
    ],
  },
};

export default nextConfig;
