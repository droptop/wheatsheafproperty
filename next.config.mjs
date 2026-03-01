const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.builder.io' },
      { protocol: 'https', hostname: '**.builder.io' },
    ],
  },
};
export default nextConfig;
