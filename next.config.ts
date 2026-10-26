import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import "./src/config/env";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" }],
  },
};

export default withNextIntl(nextConfig);
