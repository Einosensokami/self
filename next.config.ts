import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "self";

// GitHub Pages: site is served at https://<user>.github.io/<repo>/
// - `basePath` rewrites all asset / route URLs to start with /<repo>
// - `output: 'export'` produces a fully static site in `out/` (works with Pages)
// - `images.unoptimized` is required because next/image's optimizer
//   depends on a server runtime that Pages can't provide
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
