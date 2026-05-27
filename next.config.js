/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ THIS IS REQUIRED
  output: "export",

  // optional (keep if needed)
  turbopack: {},
};

module.exports = withBundleAnalyzer(nextConfig);