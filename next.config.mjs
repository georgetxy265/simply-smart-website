/** @type {import('next').NextConfig} */

const nextConfig = {
  allowedDevOrigins: ["192.168.18.82"],

  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;