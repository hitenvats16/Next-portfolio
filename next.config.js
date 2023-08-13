/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.tenor.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
