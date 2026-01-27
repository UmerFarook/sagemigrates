import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/sagemigrates',
    assetPrefix: '/sagemigrates/',
};

module.exports = nextConfig;

