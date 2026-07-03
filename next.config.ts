import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  ...(isGitHubPages
    ? { basePath: "/DigitalStudioz", assetPrefix: "/DigitalStudioz/" }
    : {}),
  images: { unoptimized: true },
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],
  devIndicators: false,
};

export default nextConfig;
