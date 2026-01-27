import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    images: { unoptimized: true },
    basePath: '/sagemigrates',
    assetPrefix: '/sagemigrates/',
};

module.exports = nextConfig;

