/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.html$/,
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
  async redirects() {
    return [{ source: "/projects/res3d-saas", destination: "/projects/dine3d", permanent: true }];
  },
};

export default nextConfig;
