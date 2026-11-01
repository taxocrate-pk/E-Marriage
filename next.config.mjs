/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/court-marriage-services-in-pakistan', destination: '/court-marriage-in-pakistan', permanent: true },
      { source: '/ourt-marriage-in-procedure-islamabad-rawalpindi-fees-cost', destination: '/court-marriage-in-pakistan', permanent: true },
      { source: '/court-marriage-process-in-lahore-fees-cost-and-requirements', destination: '/court-marriage-in-pakistan', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/international-marriage-usa', destination: '/countries/united-states', permanent: true },
      { source: '/international-marriage-uk', destination: '/countries/united-kingdom', permanent: true },
      { source: '/international-marriage-canada', destination: '/countries/canada', permanent: true },
      { source: '/international-marriage-europe', destination: '/countries/europe', permanent: true },
      { source: '/international-marriage-countries', destination: '/international-marriage', permanent: true },
      { source: '/international-marriage-services', destination: '/international-marriage', permanent: true },
      { source: '/jewish-marriage', destination: '/foreign-national-marriage', permanent: true },
      { source: '/marriage-by-religion', destination: '/foreign-national-marriage', permanent: true },
      { source: '/civil-interfaith-marriage', destination: '/foreign-national-marriage', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
