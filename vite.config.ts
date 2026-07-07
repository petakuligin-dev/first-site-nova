import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Относительные пути — сайт открывается с любого адреса и из папки dist
  base: './',
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
