import type { NextConfig } from "next";

import "./src/config/env";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" }],
  },
};

export default nextConfig;
