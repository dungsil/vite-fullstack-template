import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const srcDir = resolve(__dirname, 'src/client')

export default defineConfig({
  root: srcDir,
  resolve: {
    alias: {
      '~': srcDir,
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    })
  ],
  server: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
