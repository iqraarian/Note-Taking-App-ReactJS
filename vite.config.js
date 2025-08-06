import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Yeh line must hai
  build: {
    outDir: 'dist', // Explicitly define output directory
    emptyOutDir: true // Clean dist folder before build
  }
})