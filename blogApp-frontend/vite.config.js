import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'BlogApp by Kevin Patrick Cullen',
        },
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
    include: ['**/*.test.jsx'],
  },
})
