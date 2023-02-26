import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      // manifest: {
      //   name: 'EMU: A digital task tracker',
      //   short_name: 'EMU',
      //   description: 'A digital take on an analog task system',
      //   theme_color: '#aaaf8f',
      //   icons: [
      //     {
      //       src: 'pwa-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png'
      //     },
      //     {
      //       src: 'pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png'
      //     }
      //   ]
      // }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
})
