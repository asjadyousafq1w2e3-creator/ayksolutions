/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async redirects() {
    return [{ source: "/projects/res3d-saas", destination: "/projects/dine3d", permanent: true }];
  },
};

export default nextConfig;
