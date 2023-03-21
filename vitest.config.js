/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    quasar({
        sassVariables: 'src/quasar-variables.scss',
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
