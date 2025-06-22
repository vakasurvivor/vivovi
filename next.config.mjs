import { build } from 'velite';

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in next.js
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      // const { build } = await import('velite');
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Optionally, add any other Next.js config below
  reactStrictMode: true,

  webpack: config => {
    // transpilePackages: ['re2'],
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // ...existing code...
    config.plugins.push(new VeliteWebpackPlugin());

    return config;
  },
};

// Wrap MDX and Next.js config with each other
export default nextConfig;
