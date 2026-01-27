import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    images: { unoptimized: true },
};

module.exports = nextConfig;
export default nextConfig;
