/** @type {import('next').NextConfig} */

function getMainDomain() {

  // Priority 2: Vercel auto domain
  if (process.env.VERCEL_URL) {
    return normalizeDomain(process.env.VERCEL_URL);
  }

  // Priority 3: Local fallback
  return "localhost:3001";
}

const nextConfig = {
  async rewrites() {
    const main = process.env.VERCEL_URL;

    return [
      {
        source: "/sub/:path*",
        destination: `https://${main}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
