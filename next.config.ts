import { fileURLToPath } from 'node:url'
import path from 'node:path'
import bundleAnalyzer from '@next/bundle-analyzer'
import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

async function createNextConfig(): Promise<NextConfig> {
  const { createJiti } = await import('jiti')
  const jiti = createJiti(fileURLToPath(import.meta.url))

  await jiti.import('./src/env')

  const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: process.env.SOURCE_MAPS === 'true',
    devIndicators: false,
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    serverExternalPackages: [
      'ts-morph',
      'typescript',
      'oxc-transform',
      'twoslash',
      'twoslash-protocol',
      'shiki',
      '@takumi-rs/image-response',
    ],
    turbopack: {
      resolveAlias: {
        transliteration: 'transliteration/dist/browser/bundle.esm.min.js',
      },
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        transliteration: path.resolve(
          process.cwd(),
          'node_modules/transliteration/dist/browser/bundle.esm.min.js'
        ),
      }
      return config
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'web3idn-fi.vercel.app',
          port: '',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/docs/:path*.mdx',
          destination: '/llms.mdx/:path*',
        },
      ]
    },
  }

  return nextConfig
}

const bundleAnalyzerPlugin = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const mdxPlugin = createMDX()

const NextApp = async () => {
  const nextConfig = await createNextConfig()
  const plugins = [bundleAnalyzerPlugin, mdxPlugin]
  return plugins.reduce((config, plugin) => plugin(config), nextConfig)
}

export default NextApp
