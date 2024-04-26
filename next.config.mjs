/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '4m4r199707.github.io',
            port: '',
            pathname: '/amar-portfolio/**',
          },
        ],
      },
};

export default nextConfig;
