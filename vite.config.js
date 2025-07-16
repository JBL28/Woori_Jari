import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],
  optimizeDeps: {
    include: ['@dnd-kit'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
