/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,

  // ✅ IMPORTANT FOR NETLIFY
  output: "export",
};

module.exports = withBundleAnalyzer(nextConfig);