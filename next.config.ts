import type { NextConfig } from 'next';
import { config } from './config';


const { basePath, output } = config;

const nextConfig: NextConfig = {
  output,
  images: { unoptimized: true },
  basePath,
  env: { BASE_PATH: basePath },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
