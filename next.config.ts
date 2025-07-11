import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This option allows you to ignore TypeScript errors during the build process.
    // Use with caution, as it may hide potential issues in your code.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
