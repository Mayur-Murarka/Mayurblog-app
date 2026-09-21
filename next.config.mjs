/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.creative-tim.com',
      },
    ],
  },
};

export default nextConfig;
