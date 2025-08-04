import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 性能优化配置 */
  compress: true,
  
  /* 图片优化 */
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  /* 实验性功能 - 暂时禁用优化CSS以避免构建错误 */
  // experimental: {
  //   optimizeCss: true,
  // },
  
  /* 生产环境优化 */
  productionBrowserSourceMaps: false,
  
  /* 安全头配置 */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
