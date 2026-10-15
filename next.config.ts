import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "admin.gmebd.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "lifeandhealth.esoft.family",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "lifeandhealth.esoft.family",
        pathname: "/public/uploads/**",
      },
      {
        protocol: "https",
        hostname: "lifeandhealth.esoft.family",
        pathname: "/images/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable prefetching for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    proxyClientMaxBodySize: '12mb',
  },
};

export default nextConfig;
