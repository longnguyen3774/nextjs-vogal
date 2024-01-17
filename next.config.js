/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vogal-demo.myshopify.com",
        port: "",
        pathname: "/cdn/shop/files/logo-white.png?v=1674572726",
      },
    ],
  },
};
module.exports = nextConfig;
