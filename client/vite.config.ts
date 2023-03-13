import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
        manualChunks: () => 'everything.js'
      }
    }
  },
  resolve: {
    alias: {
      src: "/src",
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  }
})
