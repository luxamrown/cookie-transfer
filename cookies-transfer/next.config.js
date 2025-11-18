/** @type {import('next').NextConfig} */


const nextConfig = {
  async rewrites() {

    return [
      {
        source: "/sub/:path*",
        destination: `https://sub-cookie-transfer.vercel.app/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
