import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This option allows you to ignore TypeScript errors during the build process.
    // Use with caution, as it may hide potential issues in your code.
    ignoreBuildErrors: true,
  },
  eslint: {
    // This option allows you to ignore ESLint errors during the build process.
    // Use with caution, as it may hide potential issues in your code.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
