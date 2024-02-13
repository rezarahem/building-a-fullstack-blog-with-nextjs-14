/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rahem-dev.storage.iran.liara.space',
      },
    ],
  },
};

export default nextConfig;
