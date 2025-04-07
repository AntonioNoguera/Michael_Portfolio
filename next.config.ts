// next.config.ts
import path from 'path';
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import type { Configuration } from 'webpack';

// Plugin de next-intl, apuntando a la configuración de routing
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true, // Evita redirecciones innecesarias

  images: {
    domains: ['localhost'], // Puedes agregar más dominios si usas imágenes externas
  },

  webpack(config: Configuration) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, 'src'),
        '@i18n': path.resolve(__dirname, 'src/i18n'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@messages': path.resolve(__dirname, 'messages'),
        '@png_assets': path.resolve(__dirname, 'public/png'),
        '@svg_assets': path.resolve(__dirname, 'public/svg'),
      },
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
