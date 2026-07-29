import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages задаётся в Actions: VITE_BASE_PATH=/first-site-nova/
const base = process.env.VITE_BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  preview: {
    host: true,
    port: 4173,
    open: true,
  },
  build: {
    target: ['es2020', 'chrome87', 'firefox78', 'safari14', 'edge88'],
    cssTarget: 'chrome87',
  },
})
