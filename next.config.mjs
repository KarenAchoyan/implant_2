/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://implants.geeklab.am/api",
    IMAGE_URL: "https://implants.geeklab.am/storage/",
    IMAGE_URL2: "https://implants.geeklab.am/",
  },

};

export default nextConfig;
