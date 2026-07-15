import type { NextConfig } from "next";

// GitHub Pages serves this site at https://<user>.github.io/<repo>/.
// In CI (Actions), GITHUB_REPOSITORY is "<user>/<repo>"; locally it is
// undefined. Only apply basePath in CI so `npm run dev` works on /.
const repoInCi = process.env.GITHUB_REPOSITORY?.split("/")[1];

const nextConfig: NextConfig = {
  output: "export",
  ...(repoInCi ? { basePath: `/${repoInCi}` } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
