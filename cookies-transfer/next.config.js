/** @type {import('next').NextConfig} */

function normalizeDomain(domain) {
  if (!domain) return null;

  // remove https:// or http://
  let clean = domain.replace(/^https?:\/\//, "");

  // remove trailing slash
  clean = clean.replace(/\/$/, "");

  return clean;
}

function getMainDomain() {
  // Priority 1: custom domain (production)
  if (process.env.NEXT_PUBLIC_MAIN_DOMAIN) {
    return normalizeDomain(process.env.NEXT_PUBLIC_MAIN_DOMAIN);
  }

  // Priority 2: Vercel auto domain
  if (process.env.VERCEL_URL) {
    return normalizeDomain(process.env.VERCEL_URL);
  }

  // Priority 3: Local fallback
  return "localhost:3001";
}

const nextConfig = {
  async rewrites() {
    const main = getMainDomain();
    // const sub = `sub.${main}`;

    return [
      {
        source: "/sub/:path*",
        destination: `https://${sub}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
