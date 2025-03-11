/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      try {
        const webpack = require("next/dist/compiled/webpack/webpack");

        if (webpack?.BannerPlugin) {
          config.plugins.push(
            new webpack.BannerPlugin({
              banner: `
/**
 *  ██████╗ ██╗   ██╗███╗   ██╗██████╗ ███████╗███████╗
 *  ██╔══██╗██║   ██║████╗  ██║██╔══██╗██╔════╝██╔════╝
 *  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║█████╗  █████╗  
 *  ██╔═══╝ ██║   ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══╝  
 *  ██║     ╚██████╔╝██║ ╚████║██████╔╝███████╗███████╗
 *  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝
 *  
 *  🚀 Built with Next.js 15
 */
              `.trim(),
              raw: true, // Garde le formatage ASCII
            })
          );
        }
      } catch (error) {
        console.warn("⚠️ Webpack BannerPlugin non disponible :", error.message);
      }
    }

    return config;
  },
};

export default nextConfig;