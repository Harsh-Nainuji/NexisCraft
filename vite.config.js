import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ||'/',          // Keep root path
  server: {
    host: true,       // Required for Vercel to access the dev server
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
  }
});
