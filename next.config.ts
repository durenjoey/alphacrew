import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The photos never change. Without this each resized copy expires after 60 seconds and is made again,
    // and the whole log is on one page: that would use up the host's monthly image allowance. 31 days is the maximum.
    minimumCacheTTL: 2678400,
    // a short list of widths and one quality, so each photo is only ever resized a few ways
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [256, 384],
    qualities: [75],
  },
};

export default nextConfig;
