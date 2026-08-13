/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable browser source maps for production builds to map minified React errors
  productionBrowserSourceMaps: true,
  // Disable SWC minification so runtime errors are not minified on deploy (temporary)
  swcMinify: false,
};

export default nextConfig;
