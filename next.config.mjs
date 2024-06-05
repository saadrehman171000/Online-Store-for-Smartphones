/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.apple.com",
      },
      {
        hostname: "images.samsung.com",
      },
      {
        hostname: "fdn2.gsmarena.com",
      },
      {
        hostname: "utfs.io",
      },
      {
        hostname: "image-us.samsung.com",
      },
      {
        hostname: "www.oneplus.com",
      },
    ],
  },
};

export default nextConfig;
