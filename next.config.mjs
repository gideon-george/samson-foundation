/**
 * When the site is built for GitHub Pages it lives under a sub-path
 * (e.g. https://<user>.github.io/samson-foundation). The deploy workflow
 * sets PAGES_BASE_PATH so links and assets resolve correctly. Locally
 * (npm run dev) the variable is unset, so the site runs at the root.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
