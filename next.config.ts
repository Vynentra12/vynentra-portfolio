import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
