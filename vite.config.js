import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), svgr()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  resolve: {
    alias: {
      '~': path.resolve('./src'),
    },
  },
})
